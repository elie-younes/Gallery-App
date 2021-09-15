import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../image-service.service';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  image: any;

  constructor(public imageSrv: ImageService, public route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.image = this.imageSrv.getImage(+this.route.snapshot.params['id']);

    console.log(this.image)
  }

}
