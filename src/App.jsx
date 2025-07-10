import { Provider } from "react-redux";
import AppRoutes from "./components/AppRoutes";
import { store } from "./store";

function App() {
  //redux, redux-core với thunk => dispatch( function)

  /* function (dispatch) {
    const user = authService.getCurrentUser();
    const action = {
      type; "add",
      payload: user
    }
    dispatch(action)
  }

  rootState = {
    users: {
      entities: [],
      loading: 'idle',
    },
    
  
  }
  */
  //redux toolkit => dispatch( action)
  //createAsyncThunk
  dispatch();
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
