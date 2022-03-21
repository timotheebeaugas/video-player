import React from "react";
import ReactHlsPlayer from "react-hls-player";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Video player</h1>
        <ReactHlsPlayer
          src="http://localhost:3030/video"
          autoPlay={false}
          controls={true}
          width="50%"
          height="auto"
        />
      </header>
    </div>
  );
}

export default App;
