import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Content from './components/common/Content';
import Sidebar from './components/common/Sidebar';
import Landing from './components/common/Landing';
import { Dashboards } from './renderData';



const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Route path='/' exact render={() => <Landing />} />
      <Route path='/home' exact render={() => <Landing />} />

      <Content>
        {Dashboards.map((d,i) => 
          <Route key={i} path={`/${d.name}`} exact render={() => d.component} />
        )}
      </Content>
    </BrowserRouter>
  );
}

export default App;
