import { Component, Host, Prop, h } from '@stencil/core';

export interface formFieldProps {
  htmlFor?: string;
  label?: string;
}

@Component({
  tag: 'form-field',
  styleUrl: 'form-field.css',
  shadow: true,
})
export class FormField {
  @Prop() htmlFor: formFieldProps['htmlFor'];
  @Prop() label: formFieldProps['label'];

  render() {
    return (
      <Host class="form-field">
        <div>
          <label htmlFor={this.htmlFor}>{this.label}</label>
          <slot name="input"></slot>
        </div>
      </Host>
    );
  }
}
