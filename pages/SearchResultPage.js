import { expect } from '@playwright/test';

export class SearchResultPage {

  constructor(page) {
    this.page = page;
    this.homeTab = page.locator('[data-qa="filters-result-type-homes"]');
    this.communityTab = page.locator('[data-qa="filters-result-type-communities"]');
    this.secondSRPCard = page.locator('div.cards__list > :nth-child(2)');
  }

  async VerifyHomeCard(){
    
  }
}