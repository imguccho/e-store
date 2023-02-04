import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from 'src/app/data/types';
import { albums } from '../../data/albums';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  albumsData = []

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    this.albumsData = albums;
  }

  onAlbumSelection(album: Album){
    this.router.navigate(['/photos-details/' + album.albumId]);
  }

}
