import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AutonomoPage } from './autonomo.page';

const routes: Routes = [
  {
    path: '',
    component: AutonomoPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        AutonomoPage
    ],
    declarations: [AutonomoPage]
})
export class AutonomoPageModule {}
