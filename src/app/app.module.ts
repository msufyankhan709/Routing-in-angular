import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { UsersModule } from './users/users.module';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    PageNotFoundComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    UsersModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
