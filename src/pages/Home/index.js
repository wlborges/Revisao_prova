import React,{useState} from 'react';
import '../../global.css';
import './styles.css'

export default function Home(){
    const [parenteses,setParenteses]=useState([])
    const [colchetes,setColchetes]=useState([])
    const [chaves,setChaves]=useState([])
    const [texto,setTexto]=useState([])
    const [resultado,setResultado]=useState('')
    const [valida, setValida] = useState(true)
    function handleCheck(e){
        e.preventDefault()
        for(let i=0;i<texto.length;i++){
            console.log()
            if(texto[i] ==='('){
                if(parenteses.length ===0 && (
                    (chaves.length === 0 && colchetes.length ===0) || 
                    (chaves.length === 0 && colchetes.length ===1) || 
                    (chaves.length === 1 && colchetes.length ===1)
                    )){
                    parenteses.unshift(texto[i])
                }
                else{
                    setValida(false)
                    break
                }
            }
            else if(texto[i]===')'){
                if(parenteses[0] ==='('){
                    parenteses.shift()
                }
                else{
                    setValida(false)
                    break
                }
            }
            else if(texto[i]==='['){
                if(colchetes.length === 0 && parenteses.length ===0){
                    colchetes.unshift(texto[i])
                }
                else{
                    setValida(false)
                    break 
                }
            }
            else if(texto[i]===']'){
                if(colchetes.length ===1 && parenteses.length === 0){
                    colchetes.shift()
                }
                else{
                    setValida(false)
                    break 
                }
            }
            else if(texto[i]==='{'){
                if(chaves.length === 0 && 
                    colchetes.length === 0 && 
                    parenteses.length === 0)
                    {
                    chaves.unshift(texto[i])
                }
                else{
                    setValida(false)
                    break
                }
            }
            else if(texto[i]==='}'){
                if(chaves.length === 1 && 
                    colchetes.length === 0 && 
                    parenteses.length === 0)
                    {
                        console.log("certo")
                        chaves.shift()
                }
                else{
                    console.log("errado")
                    setValida(!valida)
                    console.log(valida)
                    break
                }
            }
  
        }
        //console.log(chaves)
        //console.log(colchetes)
        //console.log(parenteses)
        //console.log(valida)
        if(chaves.length === 0 && 
            colchetes.length === 0 && 
            parenteses.length===0 && 
            valida)
            {
            setResultado('Expressão Correta!')
        }else{
            setResultado('Expressão Incorreta!')
        }

        setParenteses([])
        setColchetes([])
        setChaves([])
        setValida(true)
        console.log("zerado")
        console.log(chaves)
        console.log(colchetes)
        console.log(parenteses)
        console.log(valida)
    }
    
    return(
        <div className="geral">
            <form onSubmit={handleCheck}>
                <h3>Digite a expressão!</h3>
                <input
                    placeholder="Expressão"
                    value={texto}
                    onChange={e=> setTexto(e.target.value)}
                />
                
                <button type="submit">Verificar</button>
            </form>
            <h2>{resultado}</h2>

        </div>
    );
}