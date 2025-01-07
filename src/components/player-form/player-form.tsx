import { Component, Host, h, State } from '@stencil/core';
@Component({
  tag: 'player-form',
  styleUrl: 'player-form.css',
  shadow: true,
})
export class PlayerForm {
  @State() playerName: string;
  @State() playerPosition: 'qb' | 'rb' | 'wr' | 'te' | 'lt' | 'lg' | 'c' | 'rg' | 'rt' | 'le' | 'dt' | 're' | 'lolb' | 'mlb' | 'rolb' | 'cb' | 'fs' | 'ss';
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

  private handleNameChange(event: Event) {
    this.playerName = (event.target as HTMLSelectElement).value as string;
  }

  private handlePositionChange(event: Event) {
    this.playerPosition = (event.target as HTMLSelectElement).value as
      | 'qb'
      | 'rb'
      | 'wr'
      | 'te'
      | 'lt'
      | 'lg'
      | 'c'
      | 'rg'
      | 'rt'
      | 'le'
      | 'dt'
      | 're'
      | 'lolb'
      | 'mlb'
      | 'rolb'
      | 'cb'
      | 'fs'
      | 'ss';
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
    this.playerName = '';
    this.playerPosition = 'qb';
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
          <fieldset class="player-info">
            <form-field htmlFor="player-name" label="Player Name">
              <input slot="input" id="player-name" onChange={e => this.handleNameChange(e)}></input>
            </form-field>
            <form-field htmlFor="player-position" label="Position">
              <select slot="input" id="player-position" onChange={e => this.handlePositionChange(e)}>
                <option value="" disabled>
                  Offense
                </option>
                <option value="qb">QB</option>
                <option value="rb">RB</option>
                <option value="wr">WR</option>
                <option value="te">TE</option>
                <option value="lt">LT</option>
                <option value="lg">LG</option>
                <option value="c">C</option>
                <option value="rg">RG</option>
                <option value="rt">RT</option>
                <option value="" disabled>
                  Defense
                </option>
                <option value="le">LE</option>
                <option value="dt">DT</option>
                <option value="re">RE</option>
                <option value="lolb">LOLB</option>
                <option value="mlb">MLB</option>
                <option value="rolb">ROLB</option>
                <option value="cd">CB</option>
                <option value="fs">FS</option>
                <option value="ss">SS</option>
              </select>
            </form-field>
            <form-field htmlFor="dev-trait" label="Dev Trait">
              <select slot="input" id="dev-trait" onChange={e => this.handleDevTraitChange(e)}>
                <option value="elite">Elite</option>
                <option value="star">Star</option>
                <option value="impact">Impact</option>
                <option value="normal">Normal</option>
              </select>
            </form-field>
          </fieldset>

          <fieldset class="player-attributes">
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
            <div>
              <button class="reset" onClick={this.handleResetClick}>
                Reset
              </button>
            </div>
          </fieldset>
          <form-field htmlFor="total-caps" label="Total Caps">
            <input slot="input" id="total-caps" type="number" min={0} max={25} value={this.totalCaps} onChange={e => this.handleCapsTotalChange(e)} />
          </form-field>

          <button type="submit">Submit</button>
        </form>

        <hr />
        <prospect-data playerName={this.playerName} playerPosition={this.playerPosition} devTrait={this.devTrait} totalCaps={this.totalCaps}></prospect-data>
      </Host>
    );
  }
}
