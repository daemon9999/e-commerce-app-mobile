import {setUser} from 'store/auth';
import store from 'store';
export const handleUser = data => {
  store.dispatch(setUser(data));
};

