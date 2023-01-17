import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { login } from '../models/login';
import { Person } from '../models/person';
import { PersonService } from '../person.service';
import { Message } from  'primeng/api';
import { StudentActionService } from '../student-action.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  displaySignUp :boolean=false;
  loginPerson =new login()
  data:any
  status:any
  msgs: Message[] ;





  signUpform=this.fb.group(
{
  firstName: this.fb.control(""),
  lastName: this.fb.control(""),
  cin: this.fb.control(""),
  filiere: this.fb.control(""),
  niveau: this.fb.control(""),
  email: this.fb.control("",[Validators.required,Validators.email]),
  password: this.fb.control("",[Validators.required,Validators.minLength(6)])
})
  constructor(private personService: PersonService,
              public studentActionService : StudentActionService,
              private fb: FormBuilder,
              private route: Router) {
               }

  ngOnInit(): void {


  }
  submit(){
    this.personService.loginPerson(this.loginPerson).subscribe(
      (res:any) =>{
        this.data=res;
        this.status=res.status;
        if( this.status == 1){
          this.route.navigate(['/']);
          this.studentActionService.showActions = true;
          this.studentActionService.showSignInUp = false;

        }
        else{
          this.msgs=[{
            severity: 'error',
            summary: 'authentification error',
            detail: 'you are not authorized to access this page',
          }];


        }
      }
    )


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
