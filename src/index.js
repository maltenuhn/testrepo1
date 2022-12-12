import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from '../src/app'

const root = document.getElementById('root')
if (root != null) {
  ReactDOM.render(<App />, root)
}
