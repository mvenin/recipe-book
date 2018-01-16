import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBECcEsDWW7BwFtiizCnaKSf1fQSp2FzaE',
      authDomain: 'mv-recipe-book.firebaseapp.com',
      databaseURL: "https://mv-recipe-book.firebaseio.com",
      projectId: "mv-recipe-book",
      storageBucket: "mv-recipe-book.appspot.com",
      messagingSenderId: "191874937352"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
