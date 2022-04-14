// Exempel på reducer
import { createAction, createReducer } from '@reduxjs/toolkit'

// ACTIONS
/*
Används för att ange vad som kan hända i appen. Actions triggas oftast när användaren gör något. Reducers kan bara producera nästa state som respons på en action.
"Counter reducer" är en enkel räknare med två actions:
- öka värde med 1
- öka värde med ett godtyckligt tal
*/
const increaseByOne = createAction('Increase by 1')
const increase = createAction('Increase')

// Bunta ihop actions i ett objekt för att enklare kunna exportera och importera dem
const actions = { increaseByOne, increase }


// Detta är default-värdet på state för "counter feature"
const initialState = 1

// REDUCER
/*
En reducer producerar nästa state med hjälp av ett action, som talar om vilken händelse som har inträffat. Om en action innehåller data så ligger den i action.payload.
(nuvarandeState, inkommandeAction) => nästaState
*/
const reducer = createReducer(initialState, {
	[increaseByOne.toString()]: (state, action) => state + 1,
	[increase.toString()]: (state, action) => state + action.payload
})


export { actions, reducer }