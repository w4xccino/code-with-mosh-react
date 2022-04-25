import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    // list: ["tag1", "tag2", "tag3", "tag4"],
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // styles = { //para estilos
  //   fontSize: "17px",
  //   fontWeight: "bold",
  // };

  // renderTags() {
  //   if (this.state.list.length === 0) return <p>There are no tags</p>;
  //   return this.state.list.map((item) => <li>{item}</li>);
  // }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          onClick={() => this.handleIncrement()} // pasando argumentos.
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.handleDecrement()} // pasando argumentos.
          className="m-2 btn btn-secondary btn-sm"
        >
          Decrement
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    let { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
