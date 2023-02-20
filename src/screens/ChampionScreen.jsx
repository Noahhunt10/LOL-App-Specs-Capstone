import axios from "axios"
import React, { useEffect, useState } from 'react'
import ChampionCard from '../components/ChampionCard'
import ChampionModal from "../components/ChampionModal"

const ChampionScreen = () => {

    const [ champs, setChamps ] = useState([])
    const [ modal, setModal ] = useState()
    const [ modalChamp, setModalChamp ] = useState('')
    const clickHandler = (e) => {
        setModalChamp(e.target.id)
        setModal(true)
        
    }
    const getChamps = () => {
        axios
            .get(`https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json`)
            .then(res => {
                setChamps(res.data.data)
            })
    }
    useEffect(() => {
        getChamps()
    }, [])
    const setModalFalse = () => {
        setModal(null)
    }
    return (
       <>
        {modal && (
            <ChampionModal 
            champName={modalChamp} 
            onConfirm={setModalFalse}/>
        )}   
       <div>
            <ChampionCard
             champs={champs} 
             onConfirm={clickHandler}
             />
        </div>
       </>
    )
}

export default ChampionScreen