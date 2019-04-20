import React from 'react'
import ReactDOM from 'react-dom'
import {register} from '@s-ui/bundler/registerServiceWorker'
import firebase from 'firebase/app'
import 'firebase/messaging'
import {ResponsivePicture} from './components/ResponsivePicture/index'
import {homeSources} from './components/ResponsivePicture/sources'
import './index.scss'

const App = () => {
  return (
    <main>
      <header className="headingsContainer">
        <h1 className="mainHeading">davecarter.dev</h1>
        <h2 className="mainSubheading">personal site</h2>
        <h3 className="mainDescription">
          These are some of my contributions as a frontend developer based in
          Barcelona.
        </h3>
        <p>Made with ♥</p>
      </header>
      <ResponsivePicture sources={homeSources} />
    </main>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))

register({
  first: () => window.alert('Content is cached for offline use.'),
  renovate: () => window.alert('New content is available; please refresh.')
})()

const askForPermissioToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging()
    await messaging.requestPermission()
    const token = await messaging.getToken()
    return token
  } catch (error) {
    console.error(error)
  }
}

const inicializarFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: '876465390296'
  })
  navigator.serviceWorker
    .register('/firebase-messaging-sw.js')
    .then(registration => {
      firebase.messaging().useServiceWorker(registration)
      const token = askForPermissioToReceiveNotifications()
      console.log('TOKEN', token)
    })
}

inicializarFirebase()
