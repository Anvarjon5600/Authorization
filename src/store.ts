import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/authSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice
    },
})

//=>Store keep in track for RootState and AppDispatch. 
// Infer the `RootState` and `AppDispatch` types from the store itself
// store.getState is fn provided by Redux store to get it's current State. 
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

//AppDispatch => captures type of dispatch fn we use to send actions to store
//RootState => captures the structure of Redux store's state. 