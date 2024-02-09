import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';


import { provideClientHydration, provideProtractorTestingSupport } from '@angular/platform-browser';
import routeConfig from './routes';
import { HttpClient, HttpClientModule, HttpHandler, provideHttpClient } from '@angular/common/http';
import { CategoryService } from './service/category.service';
import { ProductService } from './service/product.service';

export const appConfig: ApplicationConfig = {

  

  providers: [
    provideHttpClient(),
    provideClientHydration(),
    provideProtractorTestingSupport(),
    provideRouter(routeConfig),
  ]
};
