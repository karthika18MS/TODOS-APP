import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTodos from './components/AddTodos';
import SearchTodos from './components/SearchTodos';
import DeleteTodos from './components/DeleteTodos';
import ViewTodos from './components/ViewTodos';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<AddTodos/>}/>
      <Route path="/search" element={<SearchTodos/>}/>
      <Route path="/delete" element={<DeleteTodos/>}/>
       <Route path="/view" element={<ViewTodos/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
