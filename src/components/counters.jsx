import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onReset, counters, onIncrement, onDelete } = this.props;
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <button
          onClick={onReset}
          className="px-2 py-1 bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Reset
        </button>
        <ul>
          {counters.map((counter) => (
            <li key={counter.id} className="my-2 flex items-center space-x-2">
              <Counter
                onIncrement={onIncrement}
                onDelete={onDelete}
                counter={counter}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Counters;
