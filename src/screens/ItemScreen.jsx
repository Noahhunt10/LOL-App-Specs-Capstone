import axios from "axios"
import { useEffect, useState } from 'react'


const ItemScreen = () => {
    const [ items, setItems ] = useState([])
    useEffect(() => {
        axios
            .get('http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/item.json')
            .then((res) => {{
                const items = Object.values(res.data.data)
                const itemsArr = items.map( e =>{
                    return e
                })
                
                setItems(itemsArr)
                
            }})
          
    }, [])
    
   const itemDisp = items.map((item) => {
     if(item.gold.purchasable && !item.tags.includes('Jungle') ){
         return (
             <div>
                 <h1>{item.name}</h1>
                 <img src={`http://ddragon.leagueoflegends.com/cdn/13.3.1/img/item/${item.image.full}`}/>
             </div>
         )

     }
        
    
    })
    
    return (
        <div>
            {itemDisp}
        </div>
        )
}
export default ItemScreen