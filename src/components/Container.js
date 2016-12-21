import React, { PropTypes }  from 'react';
import style from '../styles/container';


const Container = (props) => {
  return (
    <div className="container" style={style}> {props.children} </div>
  );
};

Container.propTypes = {
  children: PropTypes.object
};

export default Container;
