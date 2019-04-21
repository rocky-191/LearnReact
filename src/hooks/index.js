import React,{ useState } from 'react'
import MyReducer from './MyReducer';

export default function index() {
    const [count,setCount]=useState(0);
    const [fruits,setFruits]=useState([]);
    const [fruit,setFruit]=useState('');
    const [input,setInput]=useState([]);
    
    let addFruit=()=>{
        setInput('');
        setFruits([...fruits,input]);
    }

    return (
        <div>
            <div>
                <h2>hooks实例</h2>
            </div>
            <div>
                <p>点击次数{count}</p>
                <button style={{width:'50px',height:'30px',lineHeight:'30px'}} onClick={()=>setCount(count+1)}>点击</button>
            </div>
            <div>选择的水果：{fruit}</div>
            <div>
                <input style={{width:'200px',height:'30px',lineHeight:'30px'}} value={input} onChange={(e)=>setInput(e.target.value)} />
                <button style={{width:'50px',height:'30px',lineHeight:'30px'}} onClick={()=>addFruit()}>添加水果</button>
            </div>
            <ul>
                {fruits.map(f=>{
                    return <li key={f} onClick={()=>setFruit(f)}>{f}</li>
                })}
            </ul>
            <div>
                <h2>hooks实例usereducers</h2>
                <MyReducer />
            </div>
        </div>
    )
}
