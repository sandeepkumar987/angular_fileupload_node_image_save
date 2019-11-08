import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components';
import { UploadComponent } from './components/upload/upload.component';
import { ImagesComponent } from './components/images/images.component';
import { ImagepreviewComponent } from './components/imagepreview/imagepreview.component';
import { UploadService, MetadataService } from './services/index'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UploadComponent,
    ImagesComponent,
    ImagepreviewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [UploadService, MetadataService],

  bootstrap: [AppComponent]
})
export class AppModule { }
