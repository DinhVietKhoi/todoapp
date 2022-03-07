import React, { useEffect, useRef, useState } from 'react';
import { ref, set, onValue} from 'firebase/database'
import db  from './firebase'
import './app.scss'
interface jobss{
  content: string;
}
function App() {
  
  const [job,setJob] = useState("");
  const [jobs,setJobs] = useState([""])
  const [number,setNumber] = useState(0)
  const inputJob = useRef(null)
  useEffect(()=>{
    onValue((ref(db,'ID')), (snapShot)=>{
      const data1 = snapShot.val();
      const listData1  = data1.number
      setNumber(listData1)
    })
    onValue((ref(db,'jobs')), (snapShot)=>{
      const data = snapShot.val();
      const arr: any = []
      const listData:jobss[]  = Object.values(data)
      listData.map((l: jobss)=>{
        arr.push(l.content)
      })
      setJobs(arr)
    })
  },[])
  

  const handleAdd =()=>{
    setJob("")
    set(ref(db,`jobs/${number}`),{
      content: job
    })
    const numberr = number+1;
    set(ref(db,`ID`),{
      number: numberr
    })
  }
  const reverse = jobs.reduce((acc,b)=>([b,...acc]),[""])
  return (
    <div className="app">
      <div className="container">
        <h1>TODOAPP</h1>
        <div className="app__container">
          <div className="app__add">
            <label>Bạn sẽ làm gì:</label>
            <input type="text" placeholder='Bạn sẽ làm gì?' onChange={(e)=>setJob(e.target.value)} value={job}/>
            <button onClick={handleAdd}>Thêm</button>  
          </div>
          <ul className="app__list">
            <li className="app__item">
              <h1>DANH SÁCH CÔNG VIỆC</h1>
            </li>
            {
            reverse.map((j,i)=>[
              i<reverse.length-1&&<li key={i} className="app__item">
                <span className='app__name'>{j}</span>
              </li>
            ])
            }
          </ul>    
        </div>
      </div>
    </div>
  );
}

export default App;
