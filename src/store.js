import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { MasterFormReducer } from './reducers/MasterFormReducer';

const reducer = combineReducers({
  masterForm: MasterFormReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,

  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
