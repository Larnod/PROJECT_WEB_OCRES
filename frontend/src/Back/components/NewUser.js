import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserData = this.onChangeUserData.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      UserData: ''
    }
  }

  onChangeUserData(e) {
    this.setState({
      UserData: e.target.value
    })
  }

  onSubmit(e) {


    const user = {
      UserData this.state.UserData
    }

    console.log(user);

    axios.post('http://localhost:3001/events/add', user)
      .then(res => console.log(res.data));

    this.setState({
      UserData: ''
    })


  }

  render() {
    return (
      <div>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>ID: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.UserData}
              onChange={this.onChangeUserData}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}