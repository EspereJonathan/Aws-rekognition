import React, {useState, useEffect} from 'react'
import { Markup } from 'interweave'
import './Result.css'

export default function Card(datas: any) {
  const [key, setKey] = useState<String[]>([])
  const [value, setValue] = useState<String[]>([])

  const mapData = (data: any[])=>{
    let tableKey = []
    let tableValue = []
    
    //Index is all of principal key (AgeRange, BoundigBox, ...)
    let index = Object.keys(data[0])
    for(let item of index){
      tableKey.push(item)
        if(typeof(data[0][item]) == 'number'){
          tableValue.push((data[0][item]));
        }else if(data[0][item].length){
           tableValue.push(lenght(data[0][item]))
        }else{
          tableValue.push(parse((data[0][item])));
        }
    }
    //Assign the key values at variable state ​​to be able to use them in the JSX render
    setKey(tableKey);
    setValue(tableValue)
  }

  const parse = (table: any) => {
    let clefs = Object.keys(table); 
    let out = ""
    for(let clef of clefs){
      out+=`\n${clef} : ${table[clef]}`
    }
  return out
  }
  
  const lenght = (tableLength: any[]) => {
    let clefs = Object.keys(tableLength[0]);
    let out = "<table><tbody><tr>"
      for(let clef of clefs){
        out+=`<td class='titre'> ${clef}</td>`
      }
      out += "</tr>"
      for(let i=0; i<tableLength.length; i++){
        out += "<tr class='tab'>"
        for(let clef of clefs){
          out += `<td>${tableLength[i][clef]}</td>`
        }
        out += "</tr>"
      } 
      
      return out+="</tbody></table>"
    }
    
  useEffect(()=>{
    if(datas){
      mapData(datas.datas);
    }
  }, [datas])

  return (
      <>
        <table className='container'>
          <tbody>
            {value.map((elt: String, index: number)=>(
              <tr key={index} className='bar'>
                <th className='bar'>{key[index]}</th>
                <td className='content '><Markup content={(elt).toString()}/></td>
              </tr>
            ))}
          </tbody>
        </table>        
      </>
    )
}
