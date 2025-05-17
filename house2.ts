import puppeteer from "puppeteer";

async function draw() {
    const openBrowser = true; // Set to false to run in headless mode
    const browser = await puppeteer.launch({
        headless: !openBrowser,
        slowMo: (openBrowser) ? 100 : 0,
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
    const startY = 100;
    let drawSteps = (openBrowser) ? 5 : 1;

    let commonMoveOptions = {
        steps: drawSteps,
    };

    //click on thin
    await page.click('label[title="Thin"]');

    // step 1
    await page.mouse.move(startX, startY);
    await page.mouse.down();
    await page.mouse.move(startX + 180, startY + 240, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX + 165, startY + 240, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX, startY + 25, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX - 165, startY + 240, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX - 180, startY + 240, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX, startY, commonMoveOptions);
    await page.mouse.up();


    // step 2
    await page.mouse.move(startX - 167, startY + 240, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX - 167, startY + 500, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX + 167, startY + 500, commonMoveOptions); // middle right bottom position
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX + 167, startY + 240, commonMoveOptions);
    await page.mouse.up();

    //step 3
    await page.mouse.move(startX - 145, startY + 260, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + 145, startY + 260, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX + 145, startY + 275, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX - 145, startY + 275, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX - 145, startY + 260, commonMoveOptions);
    await page.mouse.up();

    // step 4
    // step 4.1
    await page.mouse.move(startX - 142, startY + 260, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX, startY + 60, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX + 142, startY + 260, commonMoveOptions);
    await page.mouse.up();
    // step 4.2
    await page.mouse.move(startX - 128, startY + 260, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX, startY + 80, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX + 128, startY + 260, commonMoveOptions);
    await page.mouse.up();

    // step 5
    // step 5.1
    await page.mouse.move(startX - 128, startY + 275, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX - 128, startY + 490, commonMoveOptions);
    await page.mouse.up();

    // step 5.2
    await page.mouse.move(startX - 105, startY + 275, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX - 105, startY + 490, commonMoveOptions);
    await page.mouse.up();
    // step 5.3
    await page.mouse.move(startX + 105, startY + 275, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + 105, startY + 490, commonMoveOptions);
    await page.mouse.up();
    // step 5.4
    await page.mouse.move(startX + 128, startY + 275, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + 128, startY + 490, commonMoveOptions);
    await page.mouse.up();

    // step 5.1-2.bottom
    await page.mouse.move(startX - 132, startY + 500, commonMoveOptions);
    await page.mouse.down();    
    await page.mouse.move(startX - 132, startY + 490, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX - 101, startY + 490, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX - 101, startY + 500, commonMoveOptions);
    await page.mouse.up();
    // step 5.3-4.bottom
    await page.mouse.move(startX + 101, startY + 500, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + 101, startY + 490, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX + 132, startY + 490, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX + 132, startY + 500, commonMoveOptions);
    await page.mouse.up();

    // step 6
    // step 6.1
    await page.mouse.move(startX - 102, startY + 490, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX - 102, startY + 285, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX + 102, startY + 285, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX + 102, startY + 490, commonMoveOptions);
    await page.mouse.up();
    // step 6.2
    await page.mouse.move(startX - 99, startY + 490, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX - 99, startY + 288, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX + 99, startY + 288, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX + 99, startY + 490, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX - 99, startY + 490, commonMoveOptions);
    await page.mouse.up();

    // step 6.3
    await page.mouse.move(startX - 89, startY + 298, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX - 9, startY + 298, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX - 9, startY + 390, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX - 89, startY + 390, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX - 89, startY + 298, commonMoveOptions);
    await page.mouse.up();
    // step 6.4
    await page.mouse.move(startX + 9, startY + 298, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + 89, startY + 298, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX + 89, startY + 390, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX + 9, startY + 390, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX + 9, startY + 298, commonMoveOptions);
    await page.mouse.up();
    // step 6.5
    await page.mouse.move(startX, startY + 288, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX, startY + 490, commonMoveOptions);
    await page.mouse.up();


    //click on thin
    // step 6.6
    await page.click('label[title="Bold"]');
    await page.keyboard.press("3");
    await page.mouse.move(startX - 4, startY + 400, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX - 15, startY + 406, commonMoveOptions);
    await page.mouse.up();
    // step 6.7
    await page.keyboard.press("3");
    await page.mouse.move(startX + 4, startY + 400, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + 15, startY + 406, commonMoveOptions);
    await page.mouse.up();


    //click on thin
    await page.keyboard.press("7");
    await page.click('label[title="Thin"]');

    // step 7
    await page.mouse.move(startX - 8, startY + 260, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX - 8, startY + 94, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.move(startX + 8, startY + 94, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + 8, startY + 260, commonMoveOptions);
    await page.mouse.up();

    // step 7.2
    await page.mouse.move(startX - 22, startY + 260, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX - 80, startY + 196, commonMoveOptions);
    await page.mouse.up();

    await page.mouse.move(startX - 8, startY + 250, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX - 72, startY + 180, commonMoveOptions);
    await page.mouse.up();

    await page.mouse.move(startX + 22, startY + 260, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + 80, startY + 196, commonMoveOptions);
    await page.mouse.up();

    await page.mouse.move(startX + 8, startY + 250, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + 72, startY + 180, commonMoveOptions);
    await page.mouse.up();

    // step 8
    await page.mouse.move(startX + 130, startY + 170, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + 550, startY + 170, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX + 600, startY + 330, commonMoveOptions);
    await page.mouse.up();

    await page.mouse.move(startX + 168, startY + 330, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + 615, startY + 330, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX + 615, startY + 340, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX + 168, startY + 340, commonMoveOptions);
    await page.mouse.up();

    await page.mouse.move(startX + 580, startY + 340, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + 580, startY + 500, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX + 167, startY + 500, commonMoveOptions);
    await page.mouse.up();

    await page.mouse.move(startX + 500, startY + 340, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + 500, startY + 330, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.move(startX + 485, startY + 340, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + 485, startY + 330, commonMoveOptions);
    await page.mouse.up();

    await page.mouse.move(startX + 385, startY + 340, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + 385, startY + 330, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.move(startX + 370, startY + 340, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + 370, startY + 330, commonMoveOptions);
    await page.mouse.up();

    await page.mouse.move(startX + 260, startY + 340, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + 260, startY + 330, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.move(startX + 245, startY + 340, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + 245, startY + 330, commonMoveOptions);
    await page.mouse.up();


    // step 9
    await page.mouse.move(startX + 330, startY + 170, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + 330, startY + 112, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.move(startX + 350, startY + 170, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + 350, startY + 105, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.move(startX + 390, startY + 170, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + 390, startY + 103, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.move(startX + 395, startY + 103, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + 350, startY + 105, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX + 325, startY + 113, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX + 325, startY + 100, commonMoveOptions);
    await page.mouse.up();

    await page.mouse.down();
    await page.mouse.move(startX + 350, startY + 92, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX + 394, startY + 90, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX + 396, startY + 103, commonMoveOptions);
    await page.mouse.up();

    //step 10
    // window box
    await windowBox(page, startX + 220, startX + 300, startY + 360, startY + 430, commonMoveOptions);
    await windowBox(page, startX + 440, startX + 520, startY + 360, startY + 430, commonMoveOptions);
    

    // press on text
    await page.keyboard.press("8");
    await page.mouse.move(startX + 280, startY + 200, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.up();

    await page.keyboard.type("WA&WS Home\nAbu Bin Oalid", {
        delay: 100,
    });
    

    await page.screenshot({ path: "house2.png" });
    console.log("House drawing saved as house2.png");
    if (!openBrowser) {
        await browser.close();
    }
}

async function mouseUpDown(page: any) {
    await page.mouse.down();
    await page.mouse.up();
    
}

async function windowBox(page:any, startX: number, endX: number, startY: number, endY: number, commonMoveOptions: any) {

    await page.mouse.move(startX-5, startY-5, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(endX+5, startY-5, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(endX+5, endY+5, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX-5, endY+5, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX-5, startY-5, commonMoveOptions);
    await page.mouse.up();

    await page.mouse.move(startX-5, endY+5, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX-15, endY+5, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.move(startX-15, endY+5, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX-15, endY+15, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(endX+15, endY+15, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(endX+15, endY+5, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(endX+5, endY+5, commonMoveOptions);
    await page.mouse.up();

    //window top start
    await page.mouse.move(startX-5, startY-5, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX, startY-15, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(endX, startY-15, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(endX+5, startY-5, commonMoveOptions);
    await page.mouse.up();

    //window top end
    
    await page.mouse.move(startX, startY, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(endX, startY, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(endX, endY, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX, endY, commonMoveOptions);
    await page.mouse.up();
    await page.mouse.down();
    await page.mouse.move(startX, startY, commonMoveOptions);
    await page.mouse.up();

    let diffX = 20;    
    await page.mouse.move(startX + diffX, startY, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + diffX, endY, commonMoveOptions);
    await page.mouse.up();

    await page.mouse.move(startX + (diffX * 2), startY, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + (diffX * 2), endY, commonMoveOptions);
    await page.mouse.up();

    await page.mouse.move(startX + (diffX * 3), startY, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(startX + (diffX * 3), endY, commonMoveOptions);
    await page.mouse.up();

    let diffY = 23;
    await page.mouse.move(startX, startY + diffY, commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(endX, startY + diffY, commonMoveOptions);
    await page.mouse.up();

    await page.mouse.move(startX, startY + (diffY * 2), commonMoveOptions);
    await page.mouse.down();
    await page.mouse.move(endX, startY + (diffY * 2), commonMoveOptions);
    await page.mouse.up();
}

await draw().catch((e) => {
  console.error(e);
  process.exit(1);
});

export default draw;