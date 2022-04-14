import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import ThemeContext from './contexts/ThemeContext'
import DoLogin from './components/main/DoLogin'

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
					<DoLogin name="Nisse" />
					<DoLogin name="Pelle" />
				</main>
			</div>
		</ThemeContext.Provider>
	)
}

export default App
