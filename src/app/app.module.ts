import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { MainComponent } from './main/main.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MobileService } from './services/mobile.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    FlexLayoutModule.withConfig({ addOrientationBps: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }




 