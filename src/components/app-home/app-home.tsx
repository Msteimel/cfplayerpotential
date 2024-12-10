import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <div class="layout">
          <player-form></player-form>
          <div>Rating Table here</div>
        </div>
      </div>
    );
  }
}
