import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MobileService } from './services/mobile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-color-telecom';
  
  status$: Observable<string>;

  constructor(
    private mobileService: MobileService,
  ) {
    this.status$ = this.mobileService.isMobile$.pipe(
      map(isMobile => isMobile ? 'Mobile' : 'Desktop'),
    );
  }
}
