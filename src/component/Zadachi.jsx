import {useState}from 'react';
import './Zadachi.css';

function Zadachi({Zadachi_del,dobavlenie_provalen,dobavlenie_vipolnen }){
    
    {/*тут будет реализованы две функции провал и выполнен которые будт  добавлять задачи в историю  */}
   function addProvalen(Zadachi_del){
    dobavlenie_provalen(Zadachi_del);
   }
   
   function addvipolnen(Zadachi_del){ 
    dobavlenie_vipolnen(Zadachi_del);   
   }
    return(  
        <div>
            <h1>Мои цели</h1>
{/*Тут реализована разметка котороя спомощью метода мап переберает массив данных и выводит каждое заначения массива на экран */}
            <div className='spisok_del'>
                 
                  {Zadachi_del.map((Zadachi,index) => (
                    <ul key={index}>
                        <li>{Zadachi}</li> 
                        <button onClick= { ()=>addvipolnen(Zadachi)}>Выполнино</button>
                        <button onClick={ ()=>addProvalen(Zadachi)}>Провал</button>    
                    </ul>
                   ))}   
            </div>
        </div>   
    )
}

export default Zadachi; 