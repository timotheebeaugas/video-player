function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Video player</h1>
      <video id="videoPlayer" width="650" controls muted="muted" autoplay>
        <source src="http://localhost:3030/video/1" type="video/mp4" />
      </video>
      </header>
    </div>
  );
}

export default App;
