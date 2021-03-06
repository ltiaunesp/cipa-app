import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GenericListItemsPage } from './generic-list-items.page';
import { PipesModule } from '../../pipes/pipes.module'
import { MatExpansionModule } from '@angular/material/expansion';


const routes: Routes = [
  {
    path: '',
    component: GenericListItemsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PipesModule,
    MatExpansionModule
  ],
  declarations: [GenericListItemsPage],
  entryComponents: [],
})
export class GenericListItemsPageModule {}
