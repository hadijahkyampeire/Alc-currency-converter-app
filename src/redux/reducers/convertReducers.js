import { CONVERT_CURRENCY, EXCHANGE_VALUE } from '../actions/ActionCreators';

const initialState = { 
    values:[], 
    convertedCurrency: 0,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CONVERT_CURRENCY:
            return {
                ...state, values: action.payload
            }
        
            case EXCHANGE_VALUE: 
            return {
                convertedCurrency: action.value
            }
        default:
            return state;
    }
}