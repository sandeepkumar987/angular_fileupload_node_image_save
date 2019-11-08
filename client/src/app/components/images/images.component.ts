import { Component, OnInit } from '@angular/core';
import { MetadataService } from '../../services';

import { environment } from '../../../environments/environment';

const imageURI = environment.imageUrl

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  private rawMetadata = [];
  private imagePreviewData: any = {};
  private imageUrl:any=''
  constructor(private mds: MetadataService) { }

  ngOnInit() {
    this.fetchMetadata();
    this.imageUrl=imageURI;
  }

  fetchMetadata(query = {}) {
    this.mds.get(query).subscribe((res) => {
      this.rawMetadata = res.data;
    }, (err) => {
      alert(err.message);
    })
  }

  previewImage(item) {
    this.imagePreviewData = item.data;
    console.log(item);
  }

}
