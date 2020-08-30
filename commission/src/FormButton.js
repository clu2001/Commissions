import React, { Component } from "react";
import history from './history';


export default class FormButton extends Component {
    render() {
      return (
        <div className="FormButton">
          <div className="lander">
            <h1>Form page</h1>
            <form>
              <button class="button" variant="btn btn-success" onClick={() => history.push('/FormPage')}>Order Commission</button>
            </form>
          </div>
        </div>
      );
    }
  }