import { Igallery } from './model/Igallery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public galleryContent: Igallery[];

  constructor() {
    this.galleryContent = [

      {
        name: "Dart Vader",
        img: "https://i.pinimg.com/564x/b2/14/73/b21473916e0cd429f9be42712c5469d1.jpg"
      },
      {
        name: "Soldado Imperial",
        img: "https://i.pinimg.com/564x/12/5a/1a/125a1aa26d4c843870d0d651d9387419.jpg"
      },

      {
        name: "Luke Skywalker",
        img: "https://i.pinimg.com/564x/cb/97/de/cb97de9132eb9b0ec1aefe360966f1d3.jpg"
      },
      {
        name: "Chewaka",
        img: "https://i.pinimg.com/564x/46/ed/dd/46eddd62c9db6d50902b13e2bb8fd3f7.jpg"
      },

      {
        name: "C3PO",
        img: "https://i.pinimg.com/564x/c9/90/d7/c990d7b2960c1755c90ff6da12033e4b.jpg"
      },
      {
        name: "BB8",
        img: "https://i.pinimg.com/564x/1f/07/7b/1f077bd847c4e4101381c7559cd3440e.jpg"
      },
    ]
  }

  ngOnInit(): void {
  }

}
