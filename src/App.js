import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App" style={{backgroundColor: "#0F1729"}}>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
