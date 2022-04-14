import { useRecoilState } from "recoil"
import loginStatus from "../../atoms/loginStatus"

const DoLogin = ({ name }) => {
	const [user, setUser] = useRecoilState(loginStatus)

	const login = () => setUser({ ...user, isLoggedIn: true, name: name })

	return (
		<div>
			<button onClick={login}>
				Login as {name}
			</button>
		</div>
	)
}

export default DoLogin
