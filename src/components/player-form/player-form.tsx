import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'player-form',
  styleUrl: 'player-form.css',
  shadow: true,
})
export class PlayerForm {
  @State() devTrait: 'elite' | 'star' | 'impact' | 'normal';
  @State() totalCaps: number = 0;
  @State() capsGroup1: number = 0;
  @State() capsGroup2: number = 0;
  @State() capsGroup3: number = 0;
  @State() capsGroup4: number = 0;
  @State() capsGroup5: number = 0;
  @State() capsGroup6: number = 0;

  private handleDevTraitChange(event: Event) {
    this.devTrait = (event.target as HTMLSelectElement).value as 'elite' | 'star' | 'impact' | 'normal';
  }

  private handleCapsGroupChange(event: Event, group: number) {
    const value = parseInt((event.target as HTMLInputElement).value, 10);
    switch (group) {
      case 1:
        this.capsGroup1 = value;
        break;
      case 2:
        this.capsGroup2 = value;
        break;
      case 3:
        this.capsGroup3 = value;
        break;
      case 4:
        this.capsGroup4 = value;
        break;
      case 5:
        this.capsGroup5 = value;
        break;
      case 6:
        this.capsGroup6 = value;
        break;
      default:
        break;
    }
    this.totalCaps = this.capsGroup1 + this.capsGroup2 + this.capsGroup3 + this.capsGroup4 + this.capsGroup5 + this.capsGroup6;
  }

  private handleCapsTotalChange(event: Event) {
    this.totalCaps = parseInt((event.target as HTMLInputElement).value, 10);
    console.log(this.totalCaps);
  }

  private handleResetClick() {
    this.devTrait = 'elite';
    this.totalCaps = 0;
    this.capsGroup1 = 0;
    this.capsGroup2 = 0;
    this.capsGroup3 = 0;
    this.capsGroup4 = 0;
    this.capsGroup5 = 0;
    this.capsGroup6 = 0;
  }

  render() {
    return (
      <Host>
        <form>
          <div class="form-field__item">
            <form-field htmlFor="dev-trait" label="Dev Trait">
              <select slot="input" id="dev-trait" onChange={e => this.handleDevTraitChange(e)}>
                <option value="elite">Elite</option>
                <option value="star">Star</option>
                <option value="impact">Impact</option>
                <option value="normal">Normal</option>
              </select>
            </form-field>
          </div>

          <fieldset>
            {[1, 2, 3, 4, 5, 6].map(group => (
              <form-field htmlFor={`caps-group-${group}`} label={`Ratings Group ${group}`}>
                <input
                  slot="input"
                  id={`caps-group-${group}`}
                  type="number"
                  min={0}
                  max={10}
                  value={this[`capsGroup${group}`]}
                  onChange={e => this.handleCapsGroupChange(e, group)}
                />
              </form-field>
            ))}
            <button onClick={this.handleResetClick}> Reset</button>
          </fieldset>
          <form-field htmlFor="total-caps" label="Total Caps">
            <input slot="input" id="total-caps" type="number" min={0} max={25} value={this.totalCaps} onChange={e => this.handleCapsTotalChange(e)} />
          </form-field>
        </form>

        <prospect-data devTrait={this.devTrait} totalCaps={this.totalCaps}></prospect-data>
      </Host>
    );
  }
}
