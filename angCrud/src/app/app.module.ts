import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './components/games/games.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GameEditComponent } from './components/game-edit/game-edit.component';


const appRoutes: Routes = [
  { path: '',component:GamesComponent},
  { path: 'edit/:id',component:GameEditComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    NavbarComponent,
    GameEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
