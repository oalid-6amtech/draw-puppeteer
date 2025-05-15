import puppeteer from "puppeteer";

async function draw() {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 50,
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

    // drawing a house
    const startX = 700;
    const startY = 300;
    let drawSteps = 1;

    let commonMoveOptions = {
        steps: drawSteps,
    };

    // step 1
    await page.mouse.move(startX, startY);
    await page.mouse.down();
    await page.mouse.move(startX + 80, startY + 160, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX - 80, startY + 160, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX, startY, commonMoveOptions);
    await page.mouse.up();


    // step 2
    await page.mouse.move(startX + 20, startY + 40, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + 160, startY + 40, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX + 200, startY + 150, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX + 75, startY + 150, commonMoveOptions);
    await page.mouse.up();

    // step 3
    await page.mouse.move(startX + 170, startY + 150, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + 170, startY + 320, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.move(startX + 180, startY + 320, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX - 180, startY + 320, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX - 180, startY + 340, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX + 180, startY + 340, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX + 180, startY + 320, commonMoveOptions);
    await page.mouse.up();

    await page.mouse.move(startX - 170, startY + 320, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX - 170, startY + 150, commonMoveOptions);
    await page.mouse.up();

    // step 4
    await page.mouse.move(startX - 20, startY + 40, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX - 160, startY + 40, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX - 200, startY + 150, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX - 75, startY + 150, commonMoveOptions);
    await page.mouse.up();

    // step 5
    await page.mouse.move(startX - 65, startY + 160, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX - 65, startY + 320, commonMoveOptions);
    await page.mouse.up();

    await page.mouse.move(startX + 65, startY + 160, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + 65, startY + 320, commonMoveOptions);
    await page.mouse.up();
    
    

    await page.screenshot({ path: "house1.png" });
}

await draw().catch((e) => {
  console.error(e);
  process.exit(1);
});

export default draw;