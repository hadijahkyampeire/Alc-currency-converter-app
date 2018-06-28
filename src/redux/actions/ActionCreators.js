
const CONVERT_CURRENCY = 'convert_currency';
const FETCH_CURRENCIES = 'fetch_currencies';
const EXCHANGE_VALUE = 'exchange_value'

const convertCurrency = payload =>({
    type: CONVERT_CURRENCY,
    payload,
});

const fetchCurrencies = response =>({
    type: FETCH_CURRENCIES,
    payload: response.data,
});

const exchangedCurrency = exchangedCurrency => {
    return {
      type: EXCHANGE_VALUE,
      value: exchangedCurrency,
    }
    
  };

export {convertCurrency, fetchCurrencies, FETCH_CURRENCIES, CONVERT_CURRENCY, EXCHANGE_VALUE, exchangedCurrency}