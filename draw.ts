import puppeteer from "puppeteer";
import os from "os";

async function draw() {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
        args: [
            "--no-sandbox", 
            "--disable-setuid-sandbox",
            "--start-fullscreen"
        ],
        defaultViewport: null, // Ensures full screen
    });

    const page = await browser.newPage();
    await page.goto("https://excalidraw.com", {
        waitUntil: "networkidle2",
    });

    await page.keyboard.press("7");

    // Simulate drawing a detailed flower
    const centerX = 700;
    const centerY = 300;
    const petalRadius = 100;
    const petalCount = 8;



    // Draw petals
    for (let i = 0; i < petalCount; i++) {
        const angle = (i * 2 * Math.PI) / petalCount;
        const startX = centerX + petalRadius * Math.cos(angle);
        const startY = centerY + petalRadius * Math.sin(angle);
        const endX = centerX + petalRadius * Math.cos(angle + Math.PI / petalCount);
        const endY = centerY + petalRadius * Math.sin(angle + Math.PI / petalCount);

        await page.mouse.move(centerX, centerY);
        await page.mouse.down();
        await page.mouse.move(startX, startY);
        await page.mouse.move(endX, endY);
        await page.mouse.move(centerX, centerY);
        await page.mouse.up();
        await new Promise((resolve) => setTimeout(resolve, 500)); // Delay between petals
    }

    // Draw center circle
    const circleRadius = 30;
    for (let i = 0; i <= 360; i += 10) {
        const angle = (i * Math.PI) / 180;
        const x = centerX + circleRadius * Math.cos(angle);
        const y = centerY + circleRadius * Math.sin(angle);

        if (i === 0) {
            await page.mouse.move(x, y);
            await page.mouse.down();
        } else {
            await page.mouse.move(x, y);
        }
    }
    await page.mouse.up();

    await page.mouse.move(centerX, centerY);
    await page.mouse.down();
    await page.mouse.move(centerX, centerY+300);
    await page.mouse.up();
    

    await page.screenshot({ path: "flower.png" });
    // await browser.close();
    console.log("Flower drawing saved as flower.png");
}

await draw().catch((e) => {
  console.error(e);
  process.exit(1);
});

export default draw;