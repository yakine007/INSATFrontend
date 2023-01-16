import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonService {



  constructor(private http: HttpClient) { }

  registerPerson(personData){
    return this.http.post("http://localhost:3000/person",personData)
   }
   getPersons(){
    return this.http.get("http://localhost:3000/person")
  }

}
