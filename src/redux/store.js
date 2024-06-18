import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter/counterSlice'
import settingSlice from './setting/settingSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    setting: settingSlice
  },
})