import React, { Component } from "react";
import history from './history';


export default class CommissionButton extends Component {
    render() {
      return (
        <div className="CommissionButton">
          <div className="lander">
            <form>
              <button class="button" variant="btn btn-success" onClick={() => history.push('/CommissionType')}>Art/Design Portfolio</button>
            </form>
          </div>
        </div>
      );
    }
  }
