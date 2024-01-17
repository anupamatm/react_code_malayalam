import Label from './Label';
import Header from './component/Header';
import Footer from './component/Footer'
import './list/List.css'
import logo from './logo.svg';

// import './App.css';

function ListItem(){
  return(
    <div className='list-item'>
      <hr/>
      <div className='list-title'>
        My Title Two
      </div>
      <div className='list-description'>
        This is very big description
      </div>
      
      <div className='list-label'>
        <Label/>
        <Label/>
        <Label/>       
      </div>
      <hr/>
    </div> 
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='app-body'>      
          <div className='app-list'>
          
          
           <ListItem/>
           <ListItem/>
           <ListItem/>

          </div>        
      </div>
     <Footer/>
    </div>
  );
}

export default App;
