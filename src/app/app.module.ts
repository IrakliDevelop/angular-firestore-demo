import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import {PostsService} from './shared/posts.service';
import { PostsListComponent } from './components/posts-list/posts-list.component';

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { firebaseConfig } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig, 'angularfs'),
    AngularFirestoreModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
