import React from 'react'

const Error = ({ resourceName }) => (
  <div className="error">
    There was an issue loading the { resourceName }.
  </div>
);

export default Error;