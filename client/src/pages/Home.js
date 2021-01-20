import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_THOUGHTS } from '../utils/queries';
import ThoughtList from '../components/ThoughtList'

const Home = () => {
  const {loading,data} = useQuery(QUERY_THOUGHTS)
//  If data exists, store it in the thoughts constant. If data is undefined, then save an empty array
  const thoughts = data?.thoughts || [];
  console.log(thoughts)
  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>{/* PRINT THOUGHT LIST */
        loading ? (
          <div>Loading...</div>
        ):(
          <ThoughtList thoughts={thoughts} title="Some Feed for Thought(s)..."></ThoughtList>
        )}</div>
      </div>
    </main>
  );
};

export default Home;
