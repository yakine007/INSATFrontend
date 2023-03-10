import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Service } from '../models/service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  services: Service[]=[]
  display: boolean = false;
  showActionStudent: boolean =true;


  showDialog() {
      this.display = true;
  }
  closeDialog(){
    this.display= false;
  }

  constructor(private cardService : CardService) { }

  ngOnInit(): void {
    this.cardService.getServices()
    .then((service:Service[])=>{
      this.services=service
    })
    .catch(()=>{
      this.services=[]
    })


  }

}
