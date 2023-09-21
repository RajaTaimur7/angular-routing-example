import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdmissionComponent } from './admission.component';

@NgModule({
  declarations: [AdmissionComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: AdmissionComponent },
      // Add more routes specific to the Admission module if needed.
    ]),
  ],
})
export class AdmissionModule {}
