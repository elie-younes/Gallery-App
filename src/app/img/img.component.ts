import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image-service.service';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  image: any;

  constructor(public ImageData: ImageService) {

  }

  ngOnInit(): void {


  }

}
