
import { Component, OnInit } from '@angular/core';
import { Ihero } from './model/Ihero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  public heroContent: Ihero;

  constructor() {
    this.heroContent={

      title:"Star Wars",
      descripcion: "Hace mucho tiempo en una galaxia muy, muy lejana. Son tiempos adversos para la rebelión. Aunque la Estrella de la Muerte ha sido destruida, las tropas imperiales han hecho salir a las fuerzas rebeldes de sus bases ocultas y las persiguen a través de la galaxia. Tras escapar de la terrible Flota Imperial, un grupo de guerreros de la libertad, encabezados por Luke Skywalker, ha establecido una nueva base secreta en el remoto mondo helado de Holh. El malvado Lord Darth Vader, obsesionado por encontrar al joven Skywalker, ha enviado miles de sondas espaciales hacía las infinitas distancias del espacio.... ",
      banner:"https://i.redd.it/331gedc6aat01.png"

    }
   }

  ngOnInit(): void {
  }

}
