import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import ThemeContext from './contexts/ThemeContext'
import DoLogin from './components/main/DoLogin'
import Counter from './components/main/Counter'

function App() {
	const [themeIsDark, setThemeIsDark] = useState(false)

	const themeString = themeIsDark ? 'dark' : 'light'
	const toggle = () => setThemeIsDark(!themeIsDark)
	const context = { theme: themeString, toggle: toggle }

	return (
		<ThemeContext.Provider value={context} >
			<div className={"app " + themeString}>
				<Header />
				<main>
					<div className="row">
						<DoLogin name="Nisse" />
						<DoLogin name="Pelle" />
					</div>
					<Counter />
				</main>
			</div>
		</ThemeContext.Provider>
	)
}

export default App
