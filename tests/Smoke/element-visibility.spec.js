import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/home-page.js";
import config from "../../variables/config";
let homePage;
test.beforeEach(async ({ page, context, baseURL }) => {
  homePage = new HomePage(page);
  await page.setExtraHTTPHeaders(config.header);
  await context.addCookies([config.betaCookie]);
  await page.goto(`${baseURL}`);
  await homePage.NavigateToSRP();
});

test("Desktop | Elements Visibility | Communities - Homes Tab | View-Cards", async ({
  page,
  baseURL,
}) => {
});
