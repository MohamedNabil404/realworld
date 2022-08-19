import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type {RootState} from "../store"


// Define a type for the slice state
interface LoginState {
  token: string
}

// Define the initial state using that type
const initialState: LoginState = {
  token:'',
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {

    removeToken : (state)=> {
        state.token = ''
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
  },
})

export const { removeToken,setToken } = loginSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.login.token

export default loginSlice.reducer