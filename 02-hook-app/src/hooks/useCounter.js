import { useState } from "react"

export const useCounter = ({ numero = 10 }) => {

    const [counter, setCounter] = useState(numero)
     
    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)

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
