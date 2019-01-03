import React, { Component } from 'react';
class App extends React.Component{
  constructor() {
    super();
    this.state = {
      data: []
    }
    this.updater = this.updater.bind(this)
  }
  updater () {
    var str = [];
    str.push('vfvfvdf')
    this.setState({data: str})
  }
  render(){
    return(
      <button onClick={this.updater}>Click</button>
    );
  }
}

class Header extends React.Component {
  render () {
    return (
        <h1>Header1</h1>
    )
  }
}

class TableRow extends React.Component {
  render () {
    return (
        <tr>
          <td>{this.props.data.id}</td>
          <td>{this.props.data.name}</td>
          <td>{this.props.data.age}</td>
          <td>{this.props.key}</td>
        </tr>
    ) 
  }
}

export default App;
