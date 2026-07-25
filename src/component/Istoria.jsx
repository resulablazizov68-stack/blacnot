import React from 'react';
import './Istoria.css'; 

function Istoria({Danie_provalen,Danie_vipilnen}){
    return(
        <div>
            <h1>История все моих выполненых и проваленых целий</h1> 
{/*Тут реализована разметка для отображения выполненых задачи тут был использован метод мап */}
            <div className='vipolnen'>
                <h3>Выполненые</h3>
                {
                    Danie_vipilnen.map((Vipolnen, index) => ( 
                        <ul key = {index}  > 
                            <li>{Vipolnen}</li> 
                        </ul> 
                    ))
                }
{/*Тут реализована разметка для отображения Проваленые  задачи тут был использован метод мап */}
                <div className='provalen'>
                    <h3>Проваленые</h3>
                    {
                        Danie_provalen.map((Provalen, index) =>(
                            <ul key={index}>
                                <li>{Provalen}</li>
                            </ul>  
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Istoria; 