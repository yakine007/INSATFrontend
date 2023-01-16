import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from '../models/person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  displaySignUp :boolean=false;





  signUpform=this.fb.group(
{
  Name: this.fb.control(""),
  Email: this.fb.control("",[Validators.required,Validators.email]),
  Password: this.fb.control("",[Validators.required,Validators.minLength(6)])
})
  constructor(private personService: PersonService,
              private fb: FormBuilder) {
               }

  ngOnInit(): void {

  }
  showSignUp(){
    this.displaySignUp =true;
  }
  showSignIn(){
    this.displaySignUp =false;
  }

  register(person){
    console.log(person);

    this.personService.registerPerson(person).subscribe({
      next:(value: Person)=>{
      console.log("ajout réussit",value)
      },
      error:(error : any)=>{
        console.log("error:",error);
      }

  })


  }

}
