import { FETCH_CURRENCIES } from '../actions/ActionCreators';

const initialState = { currencies:[]}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CURRENCIES:
            return {
                ...state, currencies: action.payload
            }
        default:
            return state;
    }
}