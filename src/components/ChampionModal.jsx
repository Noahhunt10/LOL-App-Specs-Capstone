import classes from './ChampionModal.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ChampionModal = ({champName, onConfirm}) => {
   const [ skinNumber, setSkinNumber ] = useState(0)
   const [ skinArr, setSkinArr ] = useState([])
   const [ screenState, setScreenState  ] = useState('')
   const [ championData, setChampionData ] = useState({})
   
    const getChampInfo = () => {
        axios
            .get(`http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion/${champName}.json`)
            .then(res => {
               const champ = res.data.data[champName]
                setSkinArr(champ.skins)
                setChampionData(champ)
                
            })
            console.log(championData)
    }
    useEffect(() => {
        getChampInfo()
    },[])
    useEffect(() => {
        console.log(championData)
    },[championData])
   
   
   return(
       <>
        <div className={classes.backdrop} onClick={onConfirm}/>
        <div  
        className={classes.modal} 
        style={{
            backgroundImage: `url(${
          `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_${skinArr[skinNumber]?.num}.jpg`  
        })`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%'

        }}>
            {skinNumber === 0 ? <h1>{championData.name}</h1> :
            <h1>{championData.skins[skinNumber].name}</h1> }
            
            <ul className={classes.screen_buttons} >
                <li>
                <button onClick={() => {
                if(skinNumber > 0){
                    setSkinNumber(skinNumber - 1)
                }
                if(skinNumber === 0){
                    setSkinNumber(skinArr.length - 1)
                }
             }
            }>{'<'}</button>
                </li>
                <li>
                    <button onClick={()=> setScreenState('Lore')}>Lore</button>
                </li>
                <li>
                    <button onClick={()=> setScreenState('Abilities')}>Abilities</button>
                </li>
                <li>
                    <button onClick={()=> setScreenState('Hide')}>Hide</button>
                </li>
                <li>
                <button onClick={() => {
                if(skinNumber < skinArr.length - 1){
                    setSkinNumber(skinNumber + 1)
                }
                if(skinNumber === skinArr.length - 1){
                    setSkinNumber(0)
                }
             }
            }>{'>'}</button>
                </li>
            </ul>
           
            {screenState === 'Lore' && (
                <div className={classes.lore_backround}>
                    <p>{championData.lore}</p>
                </div>
            )}
        </div>
        
       </>
    )
}

export default ChampionModal