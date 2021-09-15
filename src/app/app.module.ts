import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImgComponent } from './img/img.component';
import { ImageService } from './image-service.service';
import { FilterPipe } from './filter.pipe';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImgComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule



  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
