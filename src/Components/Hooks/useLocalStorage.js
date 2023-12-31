import { useState , useEffect } from "react";

const PREFIX = "code-it-up-";
// To avoid confusion in loacal storage

function useLocalStorage( key , initialValue){
    const prefixedKey = PREFIX + key;
    

    // getting value from local storage
    const[value , setValue] = useState(()=>{
        const jsonValue = localStorage.getItem(prefixedKey);

        if(jsonValue != null)   return JSON.parse(jsonValue);

        if(typeof initialValue=== 'function'){
            return initialValue();
        }
        else    
            return initialValue;
    })


    // saving value on local storage when updated
    useEffect(()=>{
        localStorage.setItem(prefixedKey , JSON.stringify(value));
    }, [prefixedKey , value])

    return [value , setValue];
}

export default useLocalStorage;