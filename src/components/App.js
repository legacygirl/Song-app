import React from 'react';
import SongList from './SongList';
import songDetail from './songDetail';

const App = () => {
  return (
    <div className='ui container grid'>
    <div className='ui row'>
    <div className='column eight wide'>
    <SongList />

</div>
<div className='column eight wide'>
 <songDetail />
</div>
    </div>
    </div>
  );
};

export default App;
