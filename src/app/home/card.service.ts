import { Injectable } from '@angular/core';
import { Service } from './models/service';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private services: Service[] =[{
      "title":"Data visualisation",
      "description":"Data visualization  provide an accessible way to see and understand trends, outliers, and patterns of the stocks.",
      "imageUrl":"/assets/images/dataVisualisation.png"
  },
  {
      "title":"Forecast plots",
      "description":"A forecast plots visualize past data over a specific period and includes a trendline that continues past the current data to show predicted changes in the future.",
      "imageUrl":"/assets/images/focastPLot.png"
  },
  {
    "title":"stock market analytics",
    "description":"Stock analysis involves comparing a company's current financial statement to its financial statements in previous years.",
    "imageUrl":"/assets/images/analyse.png"
  },
{
  "title":"manage companies stocks",
  "description":"We help companies predict the pattern of theirs stocks and give them a full analyse of the market.",
  "imageUrl":"/assets/companies.png"
}]

  constructor() {

   }

   getServices():Promise<Service[]>{
    return new Promise((resolve,reject)=>{
      if (this.services.length){
        resolve(this.services)
      }
      else{
        reject([])
      }
    })
  }
}
