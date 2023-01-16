import { Routes } from "@angular/router";
import { ContacusComponent } from "./home/contacus/contacus.component";
import { MainComponent } from "./home/main/main.component";
import { SigninComponent } from "./home/signin/signin.component";

export const ROUTES: Routes=[
  {
    path:'',
    component: MainComponent,
    pathMatch:'full'
  },
  {
    path:'signin',
    component: SigninComponent,
    pathMatch:'full'
  },
  {
    path:'contactus',
    component: ContacusComponent,
    pathMatch:'full'
  }
]
