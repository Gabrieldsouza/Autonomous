import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import {AutonomoDetailPageModule} from '../autonomo-detail/autonomo-detail.module';
import {AutonomosPageModule} from '../autonomos/autonomos.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    AutonomoDetailPageModule,
    AutonomosPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
