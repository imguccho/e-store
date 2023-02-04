import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumItemComponent } from 'src/app/components/album-item/album-item.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  declarations: [
    AlbumItemComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlbumItemComponent,
  ],
})
export class SharedModule { }
