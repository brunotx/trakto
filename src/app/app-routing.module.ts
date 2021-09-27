import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ThanksPageComponent } from './pages/thanks-page/thanks-page.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/pages.module').then(p => p.PagesModule) }
    ]
  },
  {
    path: 'thanksPage', component: ThanksPageComponent
  }
];

@NgModule({
  declarations: [ThanksPageComponent],
  imports: [
    RouterModule.forRoot(routes),
    SharedModule,
    CarouselModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
