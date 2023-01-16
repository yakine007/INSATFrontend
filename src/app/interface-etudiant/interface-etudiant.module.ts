import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
  ]
})
export class InterfaceEtudiantModule { }
