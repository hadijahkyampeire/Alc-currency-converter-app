import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrenciesAction, convertCurrencyAction } from '../redux/actions/Actions';
import data from '../api/data';

class HomePage extends Component {
  state = {
    amount:'',
    currencyFrom: '',
    currencyTo: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleConvert = (event) => {
    event.preventDefault();
    const { amount, currencyFrom, currencyTo } = this.state;
    this.props.convertCurrencyAction({ amount, currencyFrom, currencyTo });
  };

  render() {
    const { amount } = this.state;
    const { results: currencies } = data;
    const { converter } = this.props;
    return (
      <div className="dashboard">
        <div className="header">
          <span>
            <strong>ALC Currency Coverter App by Hadijah</strong>
          </span>
        </div>

        <div className="intro">
          Is a front-end application that takes advantage of the functionalities
          that the Freecurrencyconverterapi{' '}
          <a href="https://free.currencyconverterapi.com/">
            https://free.currencyconverterapi.com/{' '}
          </a>
          provides. The application should be able convert one currency to
          another while offline or online.
        </div>
        <div className="fields">
          <div>ReactJs currency conveter app</div>
          <hr />
          <form className="form-inline" onSubmit={this.handleConvert}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>
              <input
                type="number"
                min={0}
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
                placeholder="Enter amount"
                name="amount"
                required
                value={amount}
                onChange={this.handleChange}
              />
            </div>&nbsp;
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Currency From:</label>
              <select className="form-control" 
                id="exampleFormControlSelect1"
                name="currencyFrom"
                value={this.state.currencyFrom}
                onChange={this.handleChange}>
              {Object.keys(currencies).map(currency => (
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </select>
            </div>&nbsp;
            <div className="form-group">
              <label htmlFor="currency">Currency To:</label>
              <select
                className="form-control"
                id="exampleFormControlSelect2"
                name="currencyTo"
                value={this.state.currencyTo}
                onChange={this.handleChange}
              >
                {Object.keys(currencies).map(currency => (
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </select>
            </div>&nbsp;&nbsp;
            <div id="button">
              <button type="submit" className="btn btn-primary" disabled={Boolean(!this.state.amount)}>
                convert
              </button>
            </div>
          </form>
        </div>
        <div className="results">
          <ul>
            <li>Amount:{this.state.amount}</li>
            <li>Currency From:{this.state.currencyFrom}</li>
            <li>Currency To:{this.state.currencyTo}</li>
          </ul>
          <span>
            <strong>Converted _{this.state.currencyFrom} to _{this.state.currencyTo}</strong>
          </span>
          <div className="alert alert-primary" role="alert">
            <h4 className="alert-heading">Wow!! Here are your Results! ==> { amount * converter.converter.convertedCurrency }</h4>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    // global state
    currencies: state.currencies,
    converter: state
    // values: state.values,
  };
};
export default connect(
  mapStateToProps,
  { fetchCurrenciesAction, convertCurrencyAction },
)(HomePage);
