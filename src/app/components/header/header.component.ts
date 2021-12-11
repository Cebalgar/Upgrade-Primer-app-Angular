import { Component, OnInit } from '@angular/core';
import { Iheader } from './model/Iheader';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public headerContent: Iheader;

  constructor() {

    this.headerContent = {
      logo: {
        title: "Star Wars",
        img: "https://i.pinimg.com/564x/39/0c/06/390c06b751e9f45bfbb096d3b49ca2b6.jpg"
      },
      links:["Personajes","Escenarios","Naves"]
    }
   }

  ngOnInit(): void {}

}
