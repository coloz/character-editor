import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'character-editor';

  items = [];

  charStr = "";

  width = 5;

  height = 8;

  size = 40;

  get widthpx() {
    return `${this.width * 26}px`
  }

  ngOnInit(): void {
    this.ngModelChange()
  }

  selectBlock(item) {
    console.log(item);
    item.isSelected = !item.isSelected
    this.process()
  }

  process() {
    this.charStr = `byte newchar[${this.height}] = {\n\tB`
    for (let index = 0; index < this.size; index++) {
      this.charStr += this.items[index].isSelected ? '1' : '0';
      if ((index + 1) % this.width == 0 && (index + 1) != this.size) this.charStr += `,\n\tB`
    }
    this.charStr += `\n}`
  }

  ngModelChange() {
    this.size = this.width * this.height
    this.items = []
    for (let index = 0; index < this.size; index++) {
      this.items.push({ isSelected: false })
    }
    this.process()
  }

}
