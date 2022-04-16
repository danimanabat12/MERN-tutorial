import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import goalReducer from '../features/goals/goalsSlice'

// Weirda aning authReducer oy kay ang object sa authSlice kay reducer ra jud pero if mu-tawag tag authReducer kay ang reducer jud ang matawag?? wow this is so messy.
export const store = configureStore({
  // Yawa diri diay gikan ang auth lMAO. sige pakog question.
  reducer: {
    auth: authReducer,
    goals: goalReducer,
  },
});
