import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import { router } from './routes/routes';


function App() {
  return (
    <div className="App">
      <Main></Main>
      <h2 className='p-3 text-danger fw-bold display-6'>5Star Restaurent</h2>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
