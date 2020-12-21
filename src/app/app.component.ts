import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-to-cloud';

  public logTitle(): void{
    console.log(this.title);
  }

  ngOnInit(): void {
    this.logTitle();
  }
}
