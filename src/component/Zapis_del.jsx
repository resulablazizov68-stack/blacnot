import { useState } from "react";
import "./Zapis_del.css"; 
function Zapis_del({zapis_del}){
    {/*Тут реализована состаяни котороя мы будем писать и наш текс тут будет отображаться */}
    const[text,setText]=useState("");
   

    {/*Тут реализована функция котороя будет добавлять задачи в  массив данных */}
    function addTask(){
        {/*Тут это доработка условия чтобы  пустая строка записи не добавлялось в список задачи */}
        if(text.trim() === ""){
            return; 
        }
        zapis_del(text);
        setText(""); 
    }
    return(
        <div>
            <h1>запись дел</h1>
            {/*Тут я написал разметку для заполнения  задачь и кнопка добавить*/}
            <div className="input_zapise_zadache">
                <input value={text} onChange={(event)=>setText(event.target.value)}/>
                <button onClick={addTask}>Добавить</button>  
                <h3>{text}</h3> 

            </div>
        </div>
    ) 
}

export default Zapis_del; 