import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipsComponent } from './tips/tips.component';

const routes: Routes = [
  {
    path: "tips",
    component: TipsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipsRoutingModule { }
