import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { RecoilRoot } from 'recoil'

// Provider måste wrappa App-komponenten
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RecoilRoot>
		<Provider store={store}>
			<App />
		</Provider>
		</RecoilRoot>
	</React.StrictMode>
)
