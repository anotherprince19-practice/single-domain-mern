
import {useState} from "react";
export default function App(){
  const [data,setData]=useState("");
  const callApi=async()=>{
    const r=await fetch("https://mernpracticeapp.sytes.net/api");
    setData(await r.text());
  };
  return <div>
    <h1>Orten.com Frontend</h1>
    <button onClick={callApi}>Call API</button>
    <pre>{data}</pre>
  </div>;
}
