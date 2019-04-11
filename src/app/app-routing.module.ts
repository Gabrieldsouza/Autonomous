import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AutonomoDetailPage} from './autonomo-detail/autonomo-detail.page';
import {AutonomosPage} from './autonomos/autonomos.page';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'autonomos',  component: AutonomosPage},
  { path: 'autonomos/:id', component: AutonomoDetailPage },
  { path: 'info', loadChildren: './info/info.module#InfoPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
