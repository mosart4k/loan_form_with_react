import React, {useState , useEffect} from "react";
import Modal from "../Modal/modal";
export default function Timer(){

    const[timer, setTimer] = useState(30);
    const[modal, setModal] = useState(false);

    useEffect(() => {
        if(timer > 0){
            setTimeout(()=>setTimer(timer-1), 1000);
        }
        if(timer===0){
            setModal(true);
        }
    },[timer]);

    return(
        modal? <Modal/>
        :
        <h4>{timer}</h4>
    )

}

