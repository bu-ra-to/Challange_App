import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/createchallange">CreateChallange</Link>
      <Link to="/startchallange">StartChallange</Link>
    </div>
  );
};
export default Welcome;
