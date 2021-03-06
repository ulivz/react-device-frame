import React, { Component } from "react";
import Content from './lib/Content';
import Props from './lib/Props';

export default class Iphone8 extends Component {
  render() {
    
    const color = (this.props.color) ? this.props.color : "gold";

    return (
      <div
        className={`marvel-device iphone8 ${this.props.orientation} ${color}`}
      >
        <div className="top-bar" />
        <div className="sleep" />
        <div className="volume" />
        <div className="camera" />
        <div className="sensor" />
        <div className="speaker" />
        <div className="screen">
          <Content show={this.props.show} />
        </div>
        <div className="home" />
        <div className="bottom-bar" />
      </div>
    );
  }
}

Iphone8.propTypes = Props;
