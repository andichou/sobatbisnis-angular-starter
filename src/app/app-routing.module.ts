import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { PathConstant } from './core/constant/path.constant'

const routes: Routes = [
  {
    path: '',
    redirectTo: PathConstant.DASHBOARD,
    pathMatch: PathConstant.MATCHING_FULL,
  },
  {
    path: PathConstant.DASHBOARD,
    loadChildren: './dashboard/dashboard.module#DashboardModule',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
