
import { Routes, Route , Link} from "react-router-dom";
import Glavnoe from './component/Glavnoe';
import Istoria from './component/Istoria';
import Zadachi from './component/Zadachi';
import Zapis_del from './component/Zapis_del'; 
import './App.css';
function App(){
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
      <Route path="/Istoria" element={<Istoria />} />
       <Route path="/Zadachi" element={<Zadachi />} />
       <Route path="/Zapis_del" element={<Zapis_del/>} /> 

     </Routes>
    </div>
  )
}

export default App; 