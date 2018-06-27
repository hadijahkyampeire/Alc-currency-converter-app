import React, { Component } from 'react';

class homePage extends Component {
  render() {
    return (
      <div className="dashboard">
      <div className="header">
      <span><strong>ALC Currency Coverter App by Hadijah</strong></span>
      </div>

        <div className="intro">
          Is a front-end application that takes advantage of the functionalities
          that the
          Freecurrencyconverterapi <a href="https://free.currencyconverterapi.com/">https://free.currencyconverterapi.com/ </a>
        provides. The application should be able convert one currency to
          another while offline or online.
        </div>
        <div className="fields">
        <div>
            ReactJs currency conveter app
        </div>
        <hr/>
          <form className="form-inline" action="/action_page.php">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
                placeholder="Enter amount"
              />
            </div><br/><br/>
            <div className="form-group">
              <label for="text">From:</label>
              <div className="dropdown">
                <button
                  className="btn btn-default dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                >
                  Choose currency
                  <span className="caret" />
                </button>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li>USD</li>
                  <li>KSH</li>
                  <li>UGX</li>
                </ul>
              </div>
            </div>
            <div className="form-group">
              <label for="text">To:</label>
              <div className="dropdown">
                <button
                  className="btn btn-default dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                >
                  Choose currency
                  <span className="caret" />
                </button>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li>USD</li>
                  <li>KSH</li>
                  <li>UGX</li>
                </ul>
              </div>
            </div> {' '}{' '}
            <div id="button">
              <button type="submit" className="btn btn-primary">
                convert
              </button>
            </div>
          </form>
          </div>
          <div className="results">
            <ul>
                <li>Amount:</li>
                <li>Currency From:</li>
                <li>Currency To:</li>
            </ul>
            <span><strong>Converted USD to UGX</strong></span>
            <div class="alert alert-primary" role="alert">
            <h4 class="alert-heading">Results!</h4> 
</div>
        </div>
        </div>
    );
  }
}
export default homePage;
