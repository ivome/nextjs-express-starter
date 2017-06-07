import React from 'react';
import Link from 'next/link';

function AboutPage() {
  return (
    <div>
      <h1>
        About page
      </h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
}

export default AboutPage;
