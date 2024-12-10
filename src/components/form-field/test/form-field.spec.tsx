import { newSpecPage } from '@stencil/core/testing';
import { FormField } from '../form-field';

describe('form-field', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FormField],
      html: `<form-field></form-field>`,
    });
    expect(page.root).toEqualHtml(`
      <form-field>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </form-field>
    `);
  });
});
