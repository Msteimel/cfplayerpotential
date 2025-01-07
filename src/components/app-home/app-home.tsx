import { Component, h, Element, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  @Element() el: HTMLElement;

  // Use State to manage dynamic player forms
  @State() playerForms: number[] = [1];

  private handleAddPlayerClick(e: Event) {
    // Add a new unique player form
    this.playerForms = [...this.playerForms, this.playerForms.length + 1];
  }

  render() {
    return (
      <div class="app-home">
        <div class="layout">
          <div>
            {/* Dynamically render player forms */}
            {this.playerForms.map(formId => (
              <player-form key={formId}></player-form>
            ))}

            {/* <button onClick={e => this.handleAddPlayerClick(e)} type="button">
              Add Player
            </button> */}
          </div>
          <player-table></player-table>
        </div>
      </div>
    );
  }
}
