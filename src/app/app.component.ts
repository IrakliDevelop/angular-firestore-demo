import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { firebaseConfig } from '../environments/environment';
import { Ipost } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    firebase.initializeApp(firebaseConfig);
  }
}
