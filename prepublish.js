const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.goto('http://localhost:3000/').then(() => {
        setTimeout(() => {
            page.screenshot({ path: 'docs/header.png', clip: { x: 200, y: 140, width: 400, height: 200 } }).then(() => {
                browser.close();
            });
        }, 2000);
    });
})();