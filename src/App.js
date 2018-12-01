import React, { Component } from 'react';
import './App.css';
import GitHubAPI from './GithubApi';

class App extends Component {
  state = {
    repos: [],
  }

  fetchRepos = async () => {
    const repos = await GitHubAPI.getAllRepos('felipelm');
    this.setState({ repos });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.repos.map((repo, idx) => {
            return <p key={idx}>{repo.full_name}</p>;
          })}
          <p onClick={this.fetchRepos}>
            Fetch Repos
          </p>
        </header>
      </div>
    );
  }
}

export default App;
