import { combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import currencyReducers from './CurrencyReducers';
import convertReducers from './convertReducers'

const rootReducer = combineReducers({
    currencies: currencyReducers,
    converter: convertReducers
});

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(
    rootReducer
);
export default store;