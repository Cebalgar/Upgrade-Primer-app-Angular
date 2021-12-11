import { Component, OnInit } from '@angular/core';
import { Imainb } from './models/Imainb';

@Component({
  selector: 'app-mainb',
  templateUrl: './mainb.component.html',
  styleUrls: ['./mainb.component.scss']
})
export class MainbComponent implements OnInit {

  public mainbContent: Imainb [];

  constructor() {
    this.mainbContent = [
      {
        name:"Halcón Milenario ",
        img: "https://www.cinemascomics.com/wp-content/uploads/2021/06/star-wars-episodio-iv-halcon-milenario.jpg.webp",

      },
      {
        name:"Caza esterlar N-1 de Naboo ",
        img: "https://www.cinemascomics.com/wp-content/uploads/2021/06/N1-starfighter.jpg.webp",

      },
      {
        name:"Ebon Hawk",
        img: "https://www.cinemascomics.com/wp-content/uploads/2021/06/Ebon-Hawk.jpg.webp ",

      },
      {
        name:" Caza esterlar Ala-X",
        img: "https://www.cinemascomics.com/wp-content/uploads/2021/06/Poe_Dameron_X-wing_XWM.jpg.webp",

      },

    ]
  }

  ngOnInit(): void {
  }

}
