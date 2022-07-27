import React from 'react';
import './App.scss';
import { Card, Header, Information, Notify } from './components';
import informationSample from './data_sample/information';
import { Tabs } from './types';

function App() {
  const [activeTab, setActiveTab] = React.useState<Tabs>('information');

  const renderTab = () =>{
    switch(activeTab) {
      case 'information':
        return <Information information={informationSample} />
      case 'notify':
        return <Notify />
    }
  }
  return (
    <div className="App">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <Card>
       {renderTab()}
      </Card>
    </div>
  );
}

export default App;
