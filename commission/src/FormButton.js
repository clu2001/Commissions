import React, { Component } from "react";
import history from './history';


export default class FormButton extends Component {
    render() {
      return (
        <div className="FormButton">
          <div className="lander">
            <form>
              <button class="button" variant="btn btn-success" onClick={() => history.push('/FormPage')}>Send me a message!</button>
            </form>
          </div>
        </div>
      );
    }
  }