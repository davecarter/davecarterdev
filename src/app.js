import React from 'react'
import ReactDOM from 'react-dom'
import {register} from '@s-ui/bundler/registerServiceWorker'
import './index.scss'

const App = () => {
  return (
    <main>
      <header className="headingsContainer">
        <h1 className="mainHeading">davecarter.dev personal portfolio</h1>
        <h3 className="mainSubHeading">
          Some of my contributions as a frontend developer based in Barcelona.
        </h3>
        <p />
      </header>
    </main>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))

register({
  first: () => window.alert('Content is cached for offline use.'),
  renovate: () => window.alert('New content is available; please refresh.')
})()
