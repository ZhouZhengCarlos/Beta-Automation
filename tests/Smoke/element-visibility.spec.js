import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage.js";
import config from "../../variables/config";
let homePage;
test.beforeEach(async ({ page, context, baseURL }) => {
  homePage = new HomePage(page);
  await page.setExtraHTTPHeaders(config.header);
  await context.addCookies([config.betaCookie]);
  await page.goto(`${baseURL}`);
  await homePage.NavigateToSRP("Austin, TX Area");
});

test("Verify home cards", async ({
  page,
  baseURL,
}) => {
});
