import puppeteer from "puppeteer";

async function drawHouse() {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
        args: ["--no-sandbox", "--disable-setuid-sandbox", "--start-fullscreen"],
        defaultViewport: null,
    });

    const page = await browser.newPage();
    await page.goto("https://excalidraw.com", { waitUntil: "networkidle2" });

    // Select the "draw" tool (Pencil - shortcut key '7')
    await page.keyboard.press("7");

    // Helper: move + draw line
    async function drawLine(x1: number, y1: number, x2: number, y2: number) {
        await page.mouse.move(x1, y1);
        await page.mouse.down();
        await page.mouse.move(x2, y2);
        await page.mouse.up();
    }

    // Helper: draw a rectangle (manually using lines)
    async function drawRect(x: number, y: number, w: number, h: number) {
        await drawLine(x, y, x + w, y);         // Top
        await drawLine(x + w, y, x + w, y + h); // Right
        await drawLine(x + w, y + h, x, y + h); // Bottom
        await drawLine(x, y + h, x, y);         // Left
    }

    // Helper: draw triangle (roof)
    async function drawTriangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
        await page.mouse.move(x1, y1);
        await page.mouse.down();
        await page.mouse.move(x2, y2);
        await page.mouse.move(x3, y3);
        await page.mouse.move(x1, y1);
        await page.mouse.up();
    }

    // === Drawing Starts ===
    const centerX = 700;
    const centerY = 400;

    // 1. Draw house body (rectangle)
    await drawRect(centerX - 100, centerY, 200, 150);

    // 2. Draw roof (triangle)
    await drawTriangle(
        centerX - 100, centerY,     // Left
        centerX + 100, centerY,     // Right
        centerX, centerY - 100      // Top
    );

    // 3. Draw door (rectangle)
    await drawRect(centerX - 20, centerY + 50, 40, 100);

    // 4. Draw window (rectangle)
    await drawRect(centerX - 70, centerY + 20, 40, 40);
    await drawRect(centerX + 30, centerY + 20, 40, 40);

    // Optional: small delay before screenshot
    // await page.waitForTimeout(1000);
    await page.screenshot({ path: "house.png" });

    console.log("House drawing saved as house.png");
    // await browser.close();
}

await drawHouse().catch(err => {
    console.error(err);
    process.exit(1);
});

export default drawHouse;
