import { useCallback, useState,useEffect, useRef} from 'react'



function App() {
  const [length,setlength]=useState(8)
  const [number,setnumber]= useState(false)
  const [character,setcharacter]= useState(false)
  const [password,setpassword]= useState('')

  const pass_generator = useCallback(()=>{


let pass= ""
let string= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"


if(number) string +="1234567890"
if(character) string += "!,.//*-!@#$%^&*()_+=?><|:|';"


for (let index = 0; index < length; index++) {
  const char= Math.floor(Math.random()*string.length+1)
   pass+= string.charAt(char)
  //  console.log(pass)

}
                                         
 

setpassword(pass)




  },[number,character,length])



useEffect(()=>{pass_generator()},[setnumber,setcharacter,setlength,pass_generator])

const password_opti= useRef(null)



const copy_password= useCallback(()=>{

window.navigator.clipboard.writeText(password)
password_opti.current?.select()

},[password])






  return (
    <>
    <h1 className='text-white text-3xl capitalize text-center'> password generator</h1>


    <div id="container" className='border 2px white rounded-xl '>
      
      
    <input id='input1' type="text"  placeholder='Password' value={password} readOnly ref={password_opti} />


    <button id="button" className='text-white bg-blue-600 hover:bg-blue-400' onClick={copy_password}  >copy</button>


<div id="container2">
<input type="range"  id='input2' min={8} max={100}  value={length} onChange={(e)=>{setlength(e.target.value)}} /><label >Length:{length}</label>
<label ><h3>Number</h3></label><input type="checkbox"  defaultChecked={number} onChange={()=>{setnumber((prev)=>!prev)}}/>
<br />
<label ><h3>character</h3></label><input type="checkbox"  defaultChecked={character} onChange={()=>{setcharacter((prev)=>!prev)}} />


</div>

    </div>
    </>
  )
}

export default App
