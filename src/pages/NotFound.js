import React from 'react';

export default ({ staticContext = {} }) => {
  staticContext.status = 404;
  return <h1>Opps, Sorry Not Found!</h1>;
};