const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  page.on('console', msg => {
    console.log('CONSOLE:', msg.type(), msg.text());
  });

  page.on('pageerror', err => {
    console.log('PAGEERROR:', err.message);
  });

  page.on('requestfailed', req => {
    console.log('REQUESTFAILED:', req.url(), req.failure()?.errorText);
  });

  page.on('response', async (res) => {
    if (res.status() >= 400) {
      console.log('HTTP', res.status(), res.url());
    }
  });

  await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(2000);
  console.log('TITLE:', await page.title());
  console.log('HTML_SNIPPET:', await page.locator('body').innerHTML());
  console.log('TEXT:', await page.locator('body').innerText());
  await page.screenshot({ path: 'debug-render.png', fullPage: true });
  await browser.close();
})();
