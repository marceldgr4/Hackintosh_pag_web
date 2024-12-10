
import styles from'./App.module.css';
import{ Navbar} from './Componets/Navbar/Navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <Router>
      <div className={styles.App}>
        <Navbar/>
        <Routes>
          <Route path ="/" element={
            <>
            </>
          }/>

        </Routes>
      </div>
    </Router>
  );
}

export default App
