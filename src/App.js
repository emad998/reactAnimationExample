import logo from './logo.svg';
import './App.css';
import Xbox from './components/Xbox'
import {motion} from 'framer-motion'

function App() {
  return (
    <div className="App">
      <motion.h1
      initial={{x:1000}}
      animate={{x: 0}}
      transition={{delay: 1}}
      style={{textAlign: "center"}}
      >This Line was done using framer-motion package</motion.h1>

      <h1 style={{textAlign: "center"}}>This below example is of running a lottie file using lottie-react package</h1>
        
      
      
      <Xbox />
      
    </div>
  );
}

export default App;
