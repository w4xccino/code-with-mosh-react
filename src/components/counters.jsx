import React, { Component } from "react";
import Counter from "./counterComponent";
class Counters extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value}>
            {/* Acá estoy cerrando el componente manualmente y pasando un parámetro de
            padre a hijo. 'Hello Motherfuckers' es el hijo, en este caso, el children. */}
            <p>Hello Motherfuckers #{counter.id}</p>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
