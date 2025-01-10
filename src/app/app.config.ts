import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-375dd","appId":"1:146918174391:web:a3cddaae979a9b70c76732","storageBucket":"simple-crm-375dd.firebasestorage.app","apiKey":"AIzaSyDWO7FI8g8DYEI0Di6o9AyjcuTbm4AOe4A","authDomain":"simple-crm-375dd.firebaseapp.com","messagingSenderId":"146918174391"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"simplecrm-935bc","appId":"1:773790172114:web:e577798aa43bde80c8be0b","storageBucket":"simplecrm-935bc.firebasestorage.app","apiKey":"AIzaSyBEwuAX3fbbEVqBUg3GlXI55FK0fxOEPk8","authDomain":"simplecrm-935bc.firebaseapp.com","messagingSenderId":"773790172114"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
