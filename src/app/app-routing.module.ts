import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ImgComponent } from './img/img.component';

const routes: Routes = [
  {
    path: 'image-detail/:id',
    component: ImgComponent
  },
  {
    path: '',
    component: GalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
