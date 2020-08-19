import React, { Component } from "react";
import history from './history';


export default class HomeButton extends Component {
    render() {
      return (
        <div className="HomeButton">
          <div className="lander">
            <h1>Home page</h1>
            <form>
              <button variant="btn btn-success" onClick={() => history.push('/CommissionType')}>Enter</button>
            </form>
          </div>
        </div>
      );
    }
  }