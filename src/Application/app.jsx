import React from 'react';
import StoreContainer from './Components/Store/StoreContainer';
import NewsRoomContainer from './Components/NewsRoom/NewsRoomContainer';
import MapCanvasContainer from './Components/MapCanvas/MapCanvasContainer';
import ClickCanvasContainer from './Components/ClickCanvas/ClickCanvasContainer';

const App = () => (
    <div>
      <div className="col-md-3">
          <NewsRoomContainer />
      </div>

      <div className="col-md-6">
          <ClickCanvasContainer />
          <MapCanvasContainer />
      </div>

      <div className="col-md-3">
          <StoreContainer />
      </div>
    </div>
);

export default App;