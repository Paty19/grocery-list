import './App.css';
import image from './list.webp';
import imageTwo from './man.webp';
import { GroceryList } from './GroceryList';



function App() {

  return (
    <div className='app'>
   
      <div className='container'>
    <img  src={image} width='200px' alt='shopping'/>
    </div>
    <div className='container'>
<h1>Grocery List</h1>
</div>

<GroceryList/>

<div className='container'>
    <img  src={imageTwo} width='200px' alt='shopping'/>
    </div>
    
    </div>
  )
}

export default App;
