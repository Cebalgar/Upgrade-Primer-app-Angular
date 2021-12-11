import { Component, OnInit } from '@angular/core';
import { Ifooter } from './model/Ifooter';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public footerContent: Ifooter[];

  constructor() {
    this.footerContent =[
      {
        name:"Twitter",
        img:"https://i.blogs.es/991456/650_1000_twitter-logo/1366_2000.png"
      },
      {
        name:"Instagram",
        img:"https://cdn.icon-icons.com/icons2/1195/PNG/512/1490889700-instagram_82540.png",
      },
      {
        name:"Facebook",
        img:"https://cdn.icon-icons.com/icons2/2232/PNG/512/facebook_logo_icon_134597.png"
      },

    ]
  }

  ngOnInit(): void {
  }

}
