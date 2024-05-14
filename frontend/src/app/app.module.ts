import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FriendslistComponent } from './friendslist/friendslist.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { PongMultiplayerLocalComponent } from './pong-multiplayer-local/pong-multiplayer-local.component';
import { PongSingleplayerVsBotComponent } from './pong-singleplayer-vs-bot/pong-singleplayer-vs-bot.component';
import { PongMultiplayerOnlineComponent } from './pong-multiplayer-online/pong-multiplayer-online.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FriendslistComponent,
    UserprofileComponent,
    AuthCallbackComponent,
    PongMultiplayerLocalComponent,
    PongSingleplayerVsBotComponent,
    PongMultiplayerOnlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatMenuModule,
    MatExpansionModule,
    MatListModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
