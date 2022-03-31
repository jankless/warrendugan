import { Component } from '@angular/core';

interface RandomType {
  test: string;
}
@Component({
  selector: 'main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'www';

  public randomJunk: RandomType = { test: 'Warren Rocks' };
  private _junk: unknown = {};
  get junk(): string {
    return JSON.stringify(this._junk);
  }

  set junk(value: string) {
    this._junk = JSON.parse(value);
  }

  handleClick(event: MouseEvent) {
      const result = event.currentTarget as HTMLButtonElement;
      const test = result.attributes.getNamedItem('derp');
      this.junk = test.nodeValue;
      console.log(this.junk);
      this.title = (this._junk as RandomType).test;
  }
}
