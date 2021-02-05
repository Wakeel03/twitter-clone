import './App.css';
import  Sidebar from './Sidebar'
import Feeds from './Feeds'
import RightPanel from './RightPanel'



function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feeds />
      <RightPanel />
    </div>
  );
}

export default App;
