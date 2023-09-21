import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaqsComponent } from './faqs.component';

@NgModule({
  declarations: [FaqsComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: FaqsComponent },
      // Add more routes specific to the FAQs module if needed.
    ]),
  ],
})
export class FaqsModule {}
