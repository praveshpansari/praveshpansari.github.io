import React from 'react';

const echo = (args: string[]) => {
  return <>{args.join(' ')}</>;
};

export default echo;
