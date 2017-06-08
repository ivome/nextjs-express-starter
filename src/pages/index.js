import React from 'react';
import Link from 'next/link';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';


function IndexPage(props) {
  return (
    <div>
      <h1>
        Hello World
      </h1>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}

export default withRedux(initStore)(IndexPage);
