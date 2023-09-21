import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DepartmentComponent } from './department.component';

@NgModule({
  declarations: [DepartmentComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: DepartmentComponent },
      // Add more routes specific to the Department module if needed.
    ]),
  ],
})
export class DepartmentModule {}
