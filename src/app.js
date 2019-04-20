import React from 'react'
import ReactDOM from 'react-dom'
import {register} from '@s-ui/bundler/registerServiceWorker'
import firebase from 'firebase/app'
import 'firebase/messaging';
import './index.scss'

const App = () => {
  return (
    <main>
      <header className="headingsContainer">
        <h1 className="mainHeading">davecarter.dev personal portfolio</h1>
        <h3 className="mainSubHeading">
          Some of my contributions as a frontend developer based in Barcelona.
        </h3>
        <p>Made with ♥</p>
      </header>
    </main>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))

register({
  first: () => window.alert('Content is cached for offline use.'),
  renovate: () => window.alert('New content is available; please refresh.')
})()

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCL0z872M0WFdd3Cgxx_42tHiJn8DVMjqw",
    authDomain: "davecarterdev.firebaseapp.com",
    databaseURL: "https://davecarterdev.firebaseio.com",
    projectId: "davecarterdev",
    storageBucket: "davecarterdev.appspot.com",
    messagingSenderId: "876465390296"
  };


  const askForPermissioToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log('token do usuário:', token);
      
      return token;
    } catch (error) {
      console.error(error);
    }
  }

const inicializarFirebase = () => {
    firebase.initializeApp({
      messagingSenderId: "876465390296"
    });
  navigator.serviceWorker
      .register('/firebase-messaging-sw.js')
      .then((registration) => {
        firebase.messaging().useServiceWorker(registration);
        const token = askForPermissioToReceiveNotifications()
      });
  }


inicializarFirebase()

