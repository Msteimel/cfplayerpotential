import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'player-table',
  styleUrl: 'player-table.css',
  shadow: true,
})
export class PlayerTable {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
