import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'character-editor';

  items = [];

  charStr = ""

  ngOnInit(): void {
    for (let index = 0; index < 40; index++) {
      this.items.push({ isSelected: false })
    }
    this.process()
  }

  selectBlock(item) {
    console.log(item);
    item.isSelected = !item.isSelected
    this.process()
  }

  process() {
    this.charStr = `byte newchar[8] = {\n\tB`
    for (let index = 0; index < 40; index++) {
      this.charStr += this.items[index].isSelected ? '1' : '0';
      if ((index + 1) % 5 == 0 && (index + 1) != 40) this.charStr += `,\n\tB`
    }
    this.charStr +=`\n}`
  }

}
