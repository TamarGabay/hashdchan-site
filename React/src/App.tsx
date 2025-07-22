import { useEffect } from 'react';
import Router from './routes/Router';
import { useAppDispatch } from './redux/store';
import { setUser } from './redux/auth/auth.slice';
import { loadUserFromToken} from './redux/thunks/auth.thunk'
import SideNav from './components/navbar/SideNav';

function App() {
  const dispatch = useAppDispatch();
useEffect(() => {
  dispatch(loadUserFromToken());
}, [dispatch]);

    return <>
      <Router /> 
}

export default App;
