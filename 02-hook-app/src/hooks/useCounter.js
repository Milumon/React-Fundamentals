import { useState } from "react"

export const useCounter = ({ numero = 10 }) => {

    const [counter, setCounter] = useState(numero)
     
    const increment = (factor = 1 ) => {
        setCounter(counter + factor)
    }

    const decrement = (factor = 1 ) => {
        setCounter(counter - factor)

    }

    const reset = () => {
        setCounter(numero)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
