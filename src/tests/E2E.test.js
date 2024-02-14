import { launch } from "puppeteer";

describe("E2E tests", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await launch();
    page = await browser.newPage();
    await page.goto("https://leavethepast.github.io/JS_Popover/");
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
