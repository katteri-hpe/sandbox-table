import { Component, h, Prop } from '@stencil/core';
import React from 'react';

@Component({
  tag: 'table-component',
  styleUrl: 'table-component.css',
  shadow: true,
})
export class TableComponent {
  @Prop() headers: any;
  @Prop() rows: any;

  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.headers.map((header: string) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.rows.map((row: string[]) => (
            <tr>
              {row.map((cell: string) => (
                <td>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}