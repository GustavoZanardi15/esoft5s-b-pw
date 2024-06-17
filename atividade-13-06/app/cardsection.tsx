import React from "react";

function CardSection(props: any) {
    return (
      React.createElement(
        'section',
        { className: props.className },
        props.children
      )
    );
  }

export default CardSection