import { Component, OnInit } from '@angular/core';
import { Imain } from './models/Imain';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public mainContent: Imain[];

  constructor() {
    this.mainContent = [

      {
      name:"Coruscant",
      img:"https://upload.wikimedia.org/wikipedia/commons/4/46/Trantor-Coruscant.jpg",
      descripcion:"Capital de la República Galáctica y del posterior imperio. Se encuentra situado en el centro de la galaxia y es uno de sus planetas más poblados, hasta el punto que casi todo él es una gran ciudad muy industrializada. Allí se encuentran el Senado Galáctico y el Templo Jedi, sede de la orden y donde se reúne su consejo"
    },
    {
      name:"Endor",
      img:"https://upload.wikimedia.org/wikipedia/commons/d/d0/20170709-_DSC4501_%2836496821796%29.jpg",
      descripcion:"Una luna montañosa caracterizada por sus grandes bosques y situada en el sistema homónimo. Sus habitantes más conocidos son los ewoks, unos seres de pequeño tamaño cuya forma corporal se asemeja a la de los osos."

    },
    {
      name:"Geonosis",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Libya_5391_Ubari_Lakes_Luca_Galuzzi_2007.jpg/640px-Libya_5391_Ubari_Lakes_Luca_Galuzzi_2007.jpg",
      descripcion:"De aspecto rocoso y árido. Sus principales pobladores, los geonosianos, tienen rasgos insectoides y sus construcciones son similares a los nidos de termitas.",
    },
    {
      name: "Tatooine",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Tatooinecity.jpg/640px-Tatooinecity.jpg",
      descripcion:"Un planeta desértico iluminado por dos estrellas y con un duro clima. Poblado escasamente, la mayoría de sus habitantes trabajan en granjas de humedad, donde emplean vaporizadores con el fin de obtener agua para su propio consumo y venta. Está bajo el control de los hutts y es un lugar de tránsito para piratas, cazarrecompensas y traficantes.41​ Entre sus pobladores autóctonos se encuentran los jawas, unos pequeños vendedores de chatarra que se cubren por completo con una túnica,42​ y los incursores tusken o moradores de las arenas, una agresiva raza muy territorial y xenófoba que rechaza la convivencia con cualquier otra en el planeta.43​ Lugar de nacimiento de Anakin Skywalker."
    }

    ]

  }


  ngOnInit(): void {
  }

}
