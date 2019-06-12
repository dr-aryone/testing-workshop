import React from "react";
import PropTypes from "prop-types";

const Title = ({ title }) => <h2 data-testid="titleContainer">{title}</h2>;

Title.propTypes = {
  title: PropTypes.string
};

export default Title;
