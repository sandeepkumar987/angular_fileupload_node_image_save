import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ActivatedRouteSnapshot } from '@angular/router';
import { DashboardComponent, ImagepreviewComponent, ImagesComponent, UploadComponent } from './components/index';

const externalUrlProvider = new InjectionToken("externalUrlRedirectResolver");

const routes: Routes = [
      {
            path: '', component: DashboardComponent,
            children: [
                  { path: 'upload', component: UploadComponent },
                  { path: 'preview', component: ImagepreviewComponent },
            ]
      },
      { path: '*', redirectTo: '' }
];

@NgModule({
      providers: [
            {
                  provide: externalUrlProvider,
                  useValue: (route: ActivatedRouteSnapshot) => {
                        const externalUrl = route.paramMap.get("externalUrl");
                        window.open(externalUrl, "_self");
                  }
            }
      ],
      imports: [RouterModule.forRoot(routes), CommonModule],
      exports: [RouterModule]
})
export class AppRoutingModule { }
