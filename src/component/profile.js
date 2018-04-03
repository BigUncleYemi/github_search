import React, { Component } from 'react';


export default class Profile extends Component {
    render() {
      const {git} = this.props;
      const a = {display:'none'} ;
      const b = {textAlign:'center'};
      const aStyle = git.login === "" || git.login === undefined;
      const bStyle = aStyle ? a : b;
        return (
         <div>
          <table className="table table-bordered ">
            <thead>
              <tr>
                <th>
                  <h1>
                    <strong>User Profile</strong>
                  </h1>
                </th>
              </tr>
            </thead>
            <tbody style={bStyle}>
              <tr colSpan='2'>
                <td>
                  <h3>{this.props.git.login}</h3>
                </td>
              </tr>
              <tr colSpan='2'>
                <td><center><img
                  src={this.props.git.avatar_url}
                  alt={this.props.git.name}
                  className='img-responsive'/></center></td>
              </tr>
              <tr colSpan='2'>
                <td>
                  <h2>{this.props.git.name}</h2>
                </td>
              </tr>
              <tr colSpan='2'>
                <td>
                  <p>
                    <strong>{this.props.git.bio}</strong>
                  </p>
                </td>
              </tr>
              <tr colSpan='2'>
                <td>
                  <p>location : {this.props.git.location}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <a href={this.props.git.following_url}>following
                    <span>&#160;</span>
                    <span className="badge">{this.props.git.following}</span>
                  </a>
                  <span>&#160;</span>
                  <a href={this.props.git.followers_url}>follower
                    <span>&#160;</span>
                    <span className="badge">{this.props.git.followers}</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>   
        );
    }
}