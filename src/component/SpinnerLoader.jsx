import { useEffect,useState } from "react"
import load from "../assets/loading.gif"
const SpinnerLoader = () => {
    const [text,setText]=useState('')
    const[showing,setShowIng]=useState(true)
 
    useEffect(() => {
      setTimeout(()=>{
        setText("I waited for this shit to load")
        setShowIng(false)
      },2000)
    },[])
  return (
    <div>

      {showing ? <img src={load}/>:<h3>{text}</h3>}
    </div>
  )
}

export default SpinnerLoader