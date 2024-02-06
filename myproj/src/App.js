import logo from './logo.svg';
import './App.css';
import Login from './component/login';
import { Provider } from 'react-redux';
import store from './redux/store';
import Entry from './component/entry';
import YourtaskList from './component/YourTaskList';
import Task from './component/task';
import {Routes,Route} from 'react-router-dom';
import Addtask from './component/addtask';
function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Entry></Entry>}/>
        <Route path='/YourTaskList' element={<YourtaskList></YourtaskList>}></Route>
        <Route path='/Login' element={<Login></Login>}/>
        <Route path='/addTask' element={<Addtask></Addtask>}/>
        {/* <Route path='/addtask' element={<addTask2></addTask2>}/> */}
      </Routes>
   
      {/* <Login></Login> */}
      {/* <YourTaskList id={111}></YourTaskList> */}
      {/* <Task taskcurent= {{ Password: 222, Name: "dvori", Description: "to do component", TaskId: 2,taskTypeId:1}}></Task> */}
      {/* <br></br>
      <YourtaskList usercurent={111}></YourtaskList> */}
    </Provider>
    </div>
  );
}

export default App;
