import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorsComponent } from './errors/errors.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { TranslocoService } from '@ngneat/transloco';
import { browserLocaleFactory, LocaleConfig } from './locale-lang-config';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorsComponent,
    NotFoundComponent,
    HeaderComponent,
    PagesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    TranslocoRootModule
  ],
  providers: [{
    provide: LocaleConfig,
    useFactory: browserLocaleFactory
  }],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(transloco: TranslocoService, localeConf: LocaleConfig) {
    transloco.setActiveLang(localeConf.language);
  }
}
