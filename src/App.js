import './App.css';
import {
  RecoilRoot
} from 'recoil';
import Page from './components/page'
function App() {
  return (
    <RecoilRoot>
    <div className="App">
      <Page></Page>
    </div>
    </RecoilRoot>
  );
}

export default App;
