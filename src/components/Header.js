import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  const headerStyles={
    backgroundColor:props.bgColor, 
    color:props.textColor
  }
  return (
    <header style={headerStyles}>
    <div className="container">
      <h2>{props.text}</h2>
    </div>
    </header>
  );
};


Header.defaultProps = {
  text: "Opinion Panel",
  bgColor: 'rgba(0,0,0,0.4)',
  textColor:'#ff6a95'
};
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
