import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page7Component } from './page/page7/page7.component';
import { Page8Component } from './page/page8/page8.component';


const routes: Routes = [

  {path:"page/page7",component: Page7Component},
  {path:"page/page8",component: Page8Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
