import axios from 'axios';
// import { notify } from 'react-notify-toast';

import { convertCurrency, fetchCurrencies,exchangedCurrency } from './ActionCreators';

const BASE_URL = 'https://free.currencyconverterapi.com/api/v5'

export const fetchCurrenciesAction = ()=>{
    return (dispatch)=>{
        axios.get(`${BASE_URL}/currencies`)
        .then(response=>{
            console.log(response)
            dispatch(fetchCurrencies(response));
        }).catch(error=>{
            // notify.show('error occured', 'error', 3000)
        });
    }
}

export const convertCurrencyAction = ({amount, currencyFrom, currencyTo})=>{
    const currencyForm = `${currencyFrom}_${currencyTo}`;
    return (dispatch)=>{
        axios.get(`${BASE_URL}/convert?q=${currencyForm}`)
        .then(response=>{
            console.log('res value', response.data.results[currencyForm].val)
            dispatch(exchangedCurrency(response.data.results[currencyForm].val))
            dispatch(convertCurrency(response));
        }).catch(error=>{
            // notify.show('error occured', 'error', 3000)
        });
    }
}

