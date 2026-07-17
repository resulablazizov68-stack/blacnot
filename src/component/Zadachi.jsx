import {useState}from 'react';

function Zadachi({Zadachi_del,dobavlenie_provalen,dobavlenie_vipolnen }){
    const[test,setTest]=useState('');
    {/*тут будет реализованы две функции провал и выполнен которые будт  добавлять задачи в историю  */}
   function addProvalen(event){
    dobavlenie_provalen(test);
   }
   
   function addvipolnen(event){
    dobavlenie_vipolnen(test);  
   }
    return(
        <div>
            <h1>Мои цели</h1>
{/*Тут реализована разметка котороя спомощью метода мап переберает массив данных и выводит каждое заначения массива на экран */}
            <div className='spisok_del'>
                 {
                  Zadachi_del.map((Zadachi,index) => (
                    <ol key={index}>
                        <li>{Zadachi}</li> 
                        <button>Выполнино</button>
                        <button>Провал</button> 
                    </ol>
                   ))
                 } 
            </div>
        </div> 
    )
}

export default Zadachi; 