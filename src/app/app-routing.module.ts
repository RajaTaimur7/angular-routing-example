import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./modules/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'department',
    loadChildren: () =>
      import('./modules/department/department.module').then(
        (m) => m.DepartmentModule
      ),
  },
  {
    path: 'admission',
    loadChildren: () =>
      import('./modules/admission/admission.module').then(
        (m) => m.AdmissionModule
      ),
  },
  {
    path: 'faqs',
    loadChildren: () =>
      import('./modules/faqs/faqs.module').then((m) => m.FaqsModule),
  },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
