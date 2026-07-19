
import{useState} from 'react';
import { Routes, Route , Link} from "react-router-dom";
import Glavnoe from './component/Glavnoe';
import Istoria from './component/Istoria';
import Zadachi from './component/Zadachi';
import Zapis_del from './component/Zapis_del';  
import './App.css';
function App(){
  {/*Тут реализован массив которые будет хранить задачи которые я записал в  раздели записи задачь они будут попадать в этот массив */}
  const[danie_zadachi, setDanie_zadachi]=useState([]);

   {/*Тут реализована состояния массив данных котороя бужет хранить историю выполненых и проваленных задачь */} 
    const[danie_istorei_vipolnen,setDanie_istorei_vipolnen]=useState([]);
    const[danie_istorei_provalen,setDanie_istorei_provalen]=useState([]);

  {/*Тут реализована функция котороая будет передана в компонент записи задачи и когда пользовать нажмет на кнопку добавить сработает функция котороя добавить данные в массив записи задачь */}
  function dobavite_zadachy(task){
    setDanie_zadachi([
      ...danie_zadachi,
      task
    ])
  }

  {/* Тут рализована функция добавление проваленых и выполненых задачь в массив */}
  function dobavlenie_provalen(task){
    setDanie_istorei_provalen([
      ...danie_istorei_provalen,
      task 
    ])
  }

  function dobavlenie_vipolnen(task){
    setDanie_istorei_vipolnen([
      ...danie_istorei_vipolnen,
      task
    ]) 

  }

 
 
  return(
    <div>
       <hr/>
       <nav>
        <Link to="/"><button>Главная</button></Link> 
        <Link to="/zadachi"><button>Задачи</button></Link> 
        <Link to="/zapis_del"><button>Запись</button></Link> 
        <Link to="/istoria"><button>История</button></Link>
      </nav> 
      <hr/> 
     <Routes> 
  
      <Route path="/" element={<Glavnoe />} />
      <Route path="/Istoria" element={<Istoria Danie_provalen={danie_istorei_provalen}  Danie_vipilnen={danie_istorei_vipolnen}  />} />
       <Route path="/Zadachi" element={<Zadachi   dobavlenie_provalen={dobavlenie_provalen}  dobavlenie_vipolnen= { dobavlenie_vipolnen} Zadachi_del={danie_zadachi}  Danie_vipilnen={danie_istorei_vipolnen}  />}/>
       <Route path="/Zapis_del" element={<Zapis_del zapis_del={dobavite_zadachy}/>}  />

     </Routes>


    {/*Тут реализована на подобие нижний шакпки  */} 

      <div className='nejnia_shapca'>
        <hr/>
        <header>
          <h4>@Blacnot</h4>
        </header> 
        <hr/> 
      </div>
    </div> 
  )
}

export default App;  