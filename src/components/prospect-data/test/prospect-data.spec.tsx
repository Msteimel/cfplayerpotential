import { newSpecPage } from '@stencil/core/testing';
import { ProspectData } from '../prospect-data';

describe('prospect-data', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ProspectData],
      html: `<prospect-data></prospect-data>`,
    });
    expect(page.root).toEqualHtml(`
      <prospect-data>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </prospect-data>
    `);
  });
});
