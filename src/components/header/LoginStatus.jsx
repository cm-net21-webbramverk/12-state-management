import { useRecoilState } from 'recoil'
import loginStatus from '../../atoms/loginStatus'

const LoginStatus = () => {
	const [user, setUser] = useRecoilState(loginStatus)

	return (
		<div>
			{user.isLoggedIn ? (
				`You are logged in as ${user.name}.`
			) : (
				`You are not logged in.`
			)}
		</div>
	)
}

export default LoginStatus
