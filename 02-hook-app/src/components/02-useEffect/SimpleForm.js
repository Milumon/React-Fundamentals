import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [form, setForm] = useState({
        name: '',
        email: ''
    })

    const {name, email} = form;

    useEffect( () => {
        console.log('hey')
    }, []) 
    
    useEffect( () => {
        console.log('form')
    }, [form])
    
    useEffect( () => {
        console.log('email')
    }, [email])

    const handleInputChange = ({target}) => {
        setForm({
            ...form,
            [ target.name ] : target.value
        })
    }



    return (
        <div>
            <h1>UseEffect</h1>
            <hr />

            <div className="form-group">
                <input type="text"
                        name="name"
                        className="form-control"
                        placeholder="Tu nombre"
                        autoComplete="off" 
                        value={name} 
                        onChange={handleInputChange} />

                <input type="text"
                        name="email"
                        className="form-control"
                        placeholder="milumon@gmail.com"
                        autoComplete="off"
                        value={email}
                        onChange={handleInputChange} />
            </div>

            { name === '123' && <Message /> }

            
        </div>
    )
}
