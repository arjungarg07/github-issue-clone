import logo from './logo.svg';
import './App.css';
import IssuesList from './components/issuesList';


function App() {
  return (
    <div className="App">
		<IssuesList list={list} />
    </div>
  );
}

export default App;
