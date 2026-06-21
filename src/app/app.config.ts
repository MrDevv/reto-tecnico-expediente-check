import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeEsPe from '@angular/common/locales/es-PE';
import { Interceptor } from './core/interceptors/interceptor';


localeEsPe[11] = ' '; 
localeEsPe[12] = '.'; 
registerLocaleData(localeEsPe, 'es-PE');

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'es-PE' },
    provideHttpClient(withFetch(), withInterceptors([Interceptor])),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
