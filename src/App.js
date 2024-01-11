import logo from './logo.svg';
// import './App.css';

function ListItem(){
  return(
    <div className='list-item'>
      <hr/>
      <div className='list-title'>
        This is very big description
      </div>
      <div className='list-label'>
        <span>Label 1</span>
        <span>Label 2</span>
        <span>Label 3</span>                
      </div>
      <hr/>
    </div> 
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className='header-title'>code malayalam</span>
        <span>Home</span>
        <span>Usage</span>
        <span>Settings</span>
        <span>Logout</span>
      </header>
      <div className='app-body'>      
          <div className='app-list'>
           <ListItem/>
           <ListItem/>
           <ListItem/>

          </div>        
      </div>
      <div className='app-footer'>
          Copyright codemalayalm.in All Right Reserved
      </div>
    </div>
  );
}

export default App;
