import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: AboutComponent },
      // Add more routes specific to the About module if needed.
    ]),
  ],
})
export class AboutModule {}
