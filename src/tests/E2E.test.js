import { launch } from "puppeteer";

describe("E2E tests", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await launch();
    page = await browser.newPage();
    await page.goto("http://127.0.0.1:5500/dist/index.html");
  });

  afterAll(() => {
    browser.close();
  });

  test("popover appears on button click", async () => {
    await page.click(".popoverButton");
    const popover = await page.$(".popover");
    expect(popover).toBeTruthy();
  });

  test("popover disappears on outside click", async () => {
    await page.click(".popoverButton");
    await page.click(".popover");
    const isActive = await page.evaluate(() => {
      const popover = document.querySelector(".popover");
      return popover.classList.contains("popover_active");
    });
    expect(isActive).toBeFalsy();
  });
});
