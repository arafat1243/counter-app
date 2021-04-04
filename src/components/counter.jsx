import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <samp className={this.getBadgeClasses()}>
          {this.props.counter.value}
        </samp>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="px-2 py-1 bg-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="px-2 py-1 bg-red-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes =
      "px-2 inline-flex text-xs leading-5 font-semibold rounded-full ";
    classes +=
      this.props.counter.value === 0
        ? "bg-yellow-100 text-yellow-800"
        : "bg-green-100 text-green-800";
    return classes;
  }
}

export default Counter;
