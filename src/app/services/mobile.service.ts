import { Injectable } from '@angular/core';
import { MediaChange, MediaObserver, ScreenTypes } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MobileService {

readonly isMobile$: Observable<boolean>;
constructor(
    private media: MediaObserver,
  ) {
    this.isMobile$ = this.media.media$.pipe(
      map(mediaChange => mediaChange.mqAlias === 'xs'),
    );
  }
 
  

}
