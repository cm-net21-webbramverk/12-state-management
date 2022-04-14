// src/store.js
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './features/rootReducer'

const store = configureStore({
	reducer: rootReducer
})

export { store }

// Om du använder TypeScript behöver store-filen exportera datatypen för state