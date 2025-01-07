import { Component, Host, h, Watch, Prop, State } from '@stencil/core';

export interface ProspectData {
  devTrait: 'elite' | 'star' | 'impact' | 'normal';
  totalCaps: number;
}

@Component({
  tag: 'prospect-data',
  styleUrl: 'prospect-data.css',
  shadow: true,
})
export class ProspectData {
  @Prop() playerName: string;
  @Prop() playerPosition: 'qb' | 'rb' | 'wr' | 'te' | 'lt' | 'lg' | 'c' | 'rg' | 'rt' | 'le' | 'dt' | 're' | 'lolb' | 'mlb' | 'rolb' | 'cb' | 'fs' | 'ss' = 'qb';
  @Prop() devTrait: 'elite' | 'star' | 'impact' | 'normal' = 'elite';
  @Prop() totalCaps: number;
  @State() devTraitValue: number = 10;
  @State() totalCapsValue: number = 10;

  @Watch('playerName')
  watchHandlerPlayerName(newValue: string) {
    this.playerName = newValue;
  }

  @Watch('playerPosition')
  watchHandlerPlayerPosition(newValue: any) {
    this.playerPosition = newValue;
  }

  @Watch('devTrait')
  watchHandler(newValue: any) {
    if (newValue === 'elite') {
      this.devTraitValue = 10;
    } else if (newValue === 'star') {
      this.devTraitValue = 8;
    } else if (newValue === 'impact') {
      this.devTraitValue = 4;
    } else {
      this.devTraitValue = 2;
    }
    console.log('The new value of devTrait is: ', this.devTraitValue);
  }

  @Watch('totalCaps')
  watchHandlerTotalCaps(newValue: any) {
    if (0 <= newValue && newValue <= 3) {
      this.totalCapsValue = 10;
    } else if (4 <= newValue && newValue <= 5) {
      this.totalCapsValue = 9;
    } else if (6 <= newValue && newValue <= 7) {
      this.totalCapsValue = 8;
    } else if (8 <= newValue && newValue <= 9) {
      this.totalCapsValue = 7;
    } else if (10 <= newValue && newValue <= 11) {
      this.totalCapsValue = 6;
    } else if (12 <= newValue && newValue <= 13) {
      this.totalCapsValue = 5;
    } else if (14 <= newValue && newValue <= 15) {
      this.totalCapsValue = 4;
    } else if (16 <= newValue && newValue <= 17) {
      this.totalCapsValue = 3;
    } else if (18 <= newValue && newValue <= 19) {
      this.totalCapsValue = 2;
    } else {
      this.totalCapsValue = 1;
    }
  }

  render() {
    const prospectPotential: number = this.devTraitValue + this.totalCapsValue;
    const prospectPotentialRating: string =
      prospectPotential > 18
        ? 'Heisman Candidate'
        : prospectPotential > 16
        ? 'All-American'
        : prospectPotential > 13
        ? 'All-Conference'
        : prospectPotential > 10
        ? 'Early Starter / Major Contributor'
        : prospectPotential > 7
        ? 'Late Starter / Role Player'
        : prospectPotential > 5
        ? 'Bench Warmer / Depth'
        : 'Portal Fodder';

    return (
      <Host>
        <p>Name: {this.playerName}</p>
        <p>Player Position: {this.playerPosition.toUpperCase()}</p>
        <p>Dev Trait: {this.devTrait}</p>
        <p>Total Caps Value: {this.totalCapsValue}</p>
        <p>Prospect Potential Score: {prospectPotential}</p>
        <p>Prospect Potential: {prospectPotentialRating}</p>
      </Host>
    );
  }
}
