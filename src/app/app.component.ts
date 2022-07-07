import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  userData: any = {};

  getData(data: any) {
    console.warn(data);
    this.userData = data;
  }

  display = true;

  toggle(para: any) {
    para.display = !para.display;
  }
  list: any[] = [];

  addtask(value: string) {
    //console.log(value);
    this.list.push({ id: this.list.length, name: value });
    for (var i = 0; i < this.list.length; i++) {
      console.log(this.list[i].id);
      console.log(this.list[i].name);
    }
  }

  
  // add above values in list
}
