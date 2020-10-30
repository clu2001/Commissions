import React, { Component } from "react";
import history from '../history';


export default class COMPButton extends Component {
    render() {
      return (
        <div className="COMPButton">
          <div className="lander">
            <form>
              <button class="button" variant="btn btn-success" onClick={() => history.push('/COMP251')}>COMP 251</button>
            </form>
          </div>
        </div>
      );
    }
  }