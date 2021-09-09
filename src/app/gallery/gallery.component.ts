import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ImageService } from '../image-service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {

  visibleImages: any[] = [];
  filterBy: string = "all";

  constructor(public ImageData: ImageService) {
    this.visibleImages = this.ImageData.getImages();
  }


  ngOnChanges() {
    this.visibleImages = this.ImageData.getImages();
  }


}
