import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Album } from 'src/app/data/types';

@Component({
  selector: 'album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.scss']
})
export class AlbumItemComponent implements OnInit {

  @Input() album: Album;
  @Output() albumSelection = new EventEmitter<Album>();

  constructor() { }

  ngOnInit(): void {
  }

  newItemEvent(){
    this.albumSelection.emit(this.album)
  }

}
