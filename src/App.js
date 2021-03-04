import Main from './pages/main';
import GlobalStyle from './styles/global';
import { ToastContainer } from 'react-toastify'
import 'reactjs-popup/dist/index.css';

function App() {

  const rate = 62.5

  return (
    <div className="App">
      <Main />
      <GlobalStyle rate={rate} />
      <ToastContainer autoClose={4000} />
    </div>
  );
}

export default App;
