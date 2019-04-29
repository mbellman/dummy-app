import React from 'react';

export default class Thing extends React.Component {
  state = {
    fetched: false
  };

  async componentDidMount() {
    await this.fetchStuff();

    this.setState({
      fetched: true
    });
  }

  fetchStuff() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  render() {
    return this.state.fetched
      ? <button>Fetched! Here's a button!</button>
      : <div>Hold on...</div>;
  }
}
