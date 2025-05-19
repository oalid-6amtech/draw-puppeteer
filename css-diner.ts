import puppeteer from "puppeteer";

async function main() {
    const openBrowser = false; // Set to false to run in headless mode
    const browser = await puppeteer.launch({
        headless: !openBrowser,
        slowMo: (openBrowser) ? 0 : 0,
        args: [
            "--no-sandbox", 
            "--disable-setuid-sandbox",
            "--start-fullscreen"
        ],
        defaultViewport: null, // Ensures full screen
    });

    const page = await browser.newPage();
    await page.goto("https://flukeout.github.io/", {
        waitUntil: "networkidle2",
    });

    const answers = [
        "plate",
        "bento",
        "plate#fancy",
        "plate apple",
        "plate#fancy pickle",
        "apple.small",
        "orange.small",
        "bento orange.small",
        "plate, bento",
        "*",
        "plate *",
        "plate + apple",
        "bento ~ pickle",
        "plate > apple",
        "orange:first-child",
        "plate apple, plate pickle",
        ".small:last-child",
        "plate:nth-child(3)",
        "bento:nth-last-child(3)",
        "apple:first-of-type",
        "plate:nth-child(even)",
        "plate:nth-of-type(2n+3)",
        "plate apple:only-of-type",
        ".small:last-of-type",
        "bento:empty",
        "apple:not('.small')",
        "[for]",
        "plate[for]",
        "[for=Vitaly]",
        "[for^='Sa']",
        "[for$='ato']",
        "[for*='obb']"
    ];

    for (let i = 1; i <= 32; i++) {
        await page.click(`.levels a:nth-child(${i})`, { delay: 100 });
        await delay(1000);
        await page.keyboard.type(answers[i - 1]);
        await page.keyboard.press("Enter");
        await delay(1000);
    }


    await page.screenshot({ path: "css-diner.png" });
    console.log("Saved CSS Diner screenshot");
    if (!openBrowser) {
        await browser.close();
    }
}

await main().catch((e) => {
  console.error(e);
  process.exit(1);
});

function delay(time) {
   return new Promise(function(resolve) { 
       setTimeout(resolve, time)
   });
}