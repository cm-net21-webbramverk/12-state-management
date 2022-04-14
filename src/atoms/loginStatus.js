import { atom } from 'recoil'

const loginStatus = atom({
	key: 'loginStatus',
	default: {
		isLoggedIn: false,
		name: ''
	}
})

export default loginStatus
