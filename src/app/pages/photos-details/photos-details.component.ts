import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Subscription } from 'rxjs';
import { Photo } from 'src/app/data/types';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-photos-details',
  templateUrl: './photos-details.component.html',
  styleUrls: ['./photos-details.component.scss']
})
export class PhotosDetailsComponent implements OnInit {

  photosData = [];
  albumId: number;

  private subscriptions = new Subscription();
  
  constructor(
    private readonly commonService: CommonService,
    private readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.activatedRoute.params.subscribe(params => {
        this.albumId = params['id'];
      })
    );
    this.getBanner();
  }

  async getBanner() {
    this.subscriptions.add(
      this.commonService.getPhotos().subscribe(resp => {
        this.photosData = resp.filter((photo: Photo) => photo.albumId === Number(this.albumId));
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
