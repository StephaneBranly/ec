import React from 'react';
import './App.scss';
import { Card, Information } from './components';
import informationSample from './data_sample/information';

function App() {
  return (
    <div className="App">
      <Card>
        <Information information={informationSample}/>
      </Card>
    </div>
  );
}

export default App;
