import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services'
declare var $: any;

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  public uploadFiles: any;
  constructor(private us: UploadService) { }

  ngOnInit() {
  }

  onChangeFile(event) {
    console.log('event called', event);
    this.uploadFiles = event;
  }

  Save() {
    if (!this.uploadFiles) {
    }
    this.us.upload(this.uploadFiles.target.files).then(res => {

    }, err => {
      console.log(err);
    })
  };

}
