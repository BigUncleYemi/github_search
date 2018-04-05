import React, {Component} from 'react';
import axios from 'axios';
import Profile from './profile';
import Repo from './repo';
import Search from './Search';
import '../css/app.css'

class App extends Component {
  constructor() {
    super();

    this.getTask = this
      .getTask
      .bind(this);
    this.handleChange = this
      .handleChange
      .bind(this);
    this.getResult = this
      .getResult
      .bind(this);
    this.state = {
      git: {},
      username: {},
      search: {},
      repos: {}
    }

  }

  getResult(Search) {
    console.log('heroku')
    console.log(Search)
    this.setState({search: Search})
    axios
      .get('https://api.github.com/users/' + this.state.search)
      .then(response => this.setState({git: response.data}))
    axios
      .get('https://api.github.com/users/' + this.state.search + '/repos')
      .then(response => this.setState({repos: response.data}))
  }

  getTask(e) {
    console.log(e)
    console.log('hero')
    axios
      .get('https://api.github.com/users/' + this.state.search)
      .then(response => this.setState({git: response.data}))
      
    axios
      .get('https://api.github.com/users/' + this.state.search + '/repos')
      .then(response => this.setState({repos: response.data}))
  }

  handleChange(Search) {
    this.setState({search: Search})
    console.log('backpack')
    axios
      .get('https://api.github.com/search/users?q=' + this.state.search)
      .then(response => this.setState({username: response.data}))
      .catch(error => {
        if (error.response) {
          console.log(error.response);
        }
      });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Search
            handleChange={this.handleChange}
            getResult={this.getResult}
            getTask={this.getTask}
            username={this.state.username}/>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Profile git={this.state.git}/>
          </div>
          <div className="col-sm-6">
            <Repo repos={this.state.repos}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;