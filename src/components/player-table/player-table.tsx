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
        <table>
          <thead>
            <th>Points</th>
            <th>Potential</th>
          </thead>
          <tbody>
            <tr>
              <td class="row-1">19-20</td>
              <td class="row-2">Heisman Candidate</td>
            </tr>
            <tr>
              <td class="row-1">17-18</td>
              <td class="row-2">All-American</td>
            </tr>
            <tr>
              <td class="row-1">14-16</td>
              <td class="row-2">All-Conference</td>
            </tr>
            <tr>
              <td class="row-1">11-13</td>
              <td class="row-2">Early Starter / Major Contributor</td>
            </tr>
            <tr>
              <td class="row-1">8-10</td>
              <td class="row-2">Late Starter / Role Player</td>
            </tr>
            <tr>
              <td class="row-1">6-7</td>
              <td class="row-2">Bench Warmer / Depth</td>
            </tr>
            <tr>
              <td class="row-1">3-5</td>
              <td class="row-2">Portal Fodder</td>
            </tr>
          </tbody>
        </table>
      </Host>
    );
  }
}
