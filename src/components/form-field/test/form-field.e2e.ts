import { newE2EPage } from '@stencil/core/testing';

describe('form-field', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<form-field></form-field>');

    const element = await page.find('form-field');
    expect(element).toHaveClass('hydrated');
  });
});
