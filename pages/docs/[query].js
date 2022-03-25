import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import DocsPage from '../../container/DocsPage';

const Docs = () => {
  const router = useRouter();
  const { query } = router.query;

  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    if (!User) router.push('/login');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="bg-[#111] h-[100%]">
      <DocsPage query={query} />
    </div>
  );
};

export default Docs;
