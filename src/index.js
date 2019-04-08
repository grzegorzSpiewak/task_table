import React from 'react'
import { render } from 'react-dom'
import store from './store/configureStore'
import App from './routes/index'

// Inject global reset
import('reset-css')
// Render React
const rootEl = document.getElementById('root')

render(
  (<App store={store} />),
  rootEl
)
