import { fetchUser } from '../utils/fetchLocalStorage'

const userInfo = fetchUser()
export const initialState = {
  user: userInfo,
}
console.log("initial State");
