import React from "react";

function Todo() {
    const items = ["Webpack", "Parcel", "Browserify", "FuseBox"];
    return (
      <div>
        <h4 className="s">This is a functional component for React</h4>
        <ul className="list">
        {
            items.map((item,index)=>(<li key={index}>{item}</li>))
        }
      </ul>
      </div>
    );
  }
  export default Todo;