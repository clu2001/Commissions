import React, { Component } from "react";
import history from './history';


export default class CommissionButton extends Component {
    render() {
      return (
        <div className="CommissionButton">
          <div className="lander">
            <h1>Commission Page</h1>
            <form>
              <button variant="btn btn-success" onClick={() => history.push('/CommissionType')}>Commission Types</button>
            </form>
          </div>
        </div>
      );
    }
  }
