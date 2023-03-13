// playwright-dev-page.js
import { expect } from '@playwright/test';

export class HomePage {

  constructor(page) {
    this.page = page;
    this.typeaheadInput = page.locator('input#HeaderSearchText');
    this.submitButton = page.locator('input[data-ga-event-action="Search Action"]');
    this.SRPHeader = page.locator('h1.title__type');
  }
  async NavigateToSRP() {
    await this.typeaheadInput.fill("Austin, TX Area");
    await this.submitButton.click();
    await expect(this.SRPHeader).toBeVisible();
  }
}