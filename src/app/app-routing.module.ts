import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import {M1Component} from './m1/m1.component';
import {M2Component} from './m2/m2.component';
import {M3Component} from './m3/m3.component';

const routes: Routes = [

  {
    path:'',
    redirectTo : '/',
    pathMatch: 'full'

  },

{
  path:'m1',
component: M1Component
},

{
  path:'m2',
component: M2Component
},

{
  path:'m3',
component: M3Component
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
