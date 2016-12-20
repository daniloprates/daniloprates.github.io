import React, { PropTypes }  from 'react';

const Bottom = (props) => {
  return (
    <div>
      {props.content}
    </div>
  );
};

Bottom.propTypes = {
  content: PropTypes.object
};

export default Bottom;
