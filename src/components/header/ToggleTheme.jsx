import { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

const ToggleTheme = () => {
	const { theme, toggle } = useContext(ThemeContext)
	return (
		<div>
			<button onClick={toggle}>
			{theme === 'light' ? 'Byt till dark theme' : 'Byt till light theme'}
			</button>
		</div>
	)
}

export default ToggleTheme
