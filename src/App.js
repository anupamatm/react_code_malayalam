import Label from './Label';
import Header from './component/Header';
import Footer from './component/Footer'
import './list/List.css'
import logo from './logo.svg';
import List from './list/List';
import Tools from './component/Tools';

// import './App.css';


const arr=[
  {
    title:"Appointment for October",
    descr:"The patient is resheduled to october",
    isActive:true
  },
  {
    title:"Appointment for October",
    descr:"The patient is resheduled to october",
    isActive:false
  },
  {
    title:"Appointment for October",
    descr:"The patient is resheduled to october",
    isActive:true
  }
];

function App() {
  return (
   
    <div className="App">
      <Header/>
      <div className='app-body'> 
      <Tools>     
          <div className='app-list'>

            {
              arr.map((obj)=>{
               return <List key={obj.title} title={obj.title} descr={obj.descr} isActive={obj.isActive}/>

              })
            }        

          </div> 
          </Tools>       
      </div>
     <Footer/>
    </div>
   
  );
}

export default App;
