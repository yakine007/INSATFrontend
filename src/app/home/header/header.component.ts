import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { StudentActionService } from '../student-action.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuType:string='default';


  constructor(public studentActionService : StudentActionService,
            private route : Router
    ) { }



  ngOnInit() {
    this.route.events.subscribe(
      (val:any)=>{
        if((val.url) && val.url.includes('Profile')){
          this.menuType='student'
        }
        else{
          this.menuType='default'
        }
      }
    )}}


