import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'

// import rootReducer from './reducers'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
})
