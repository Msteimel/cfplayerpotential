import { newE2EPage } from '@stencil/core/testing';

describe('prospect-data', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<prospect-data></prospect-data>');

    const element = await page.find('prospect-data');
    expect(element).toHaveClass('hydrated');
  });
});
