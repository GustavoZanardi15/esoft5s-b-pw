import React from "react";

function Header(props: any) {
    return (
      React.createElement(
        'header',
        { },
        <h1>{props.title}</h1>
      )
    );
  }

export default Header