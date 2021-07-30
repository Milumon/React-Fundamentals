import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import { Message } from './Message';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const {name, email, password} = formValues;

    useEffect( () => {
        console.log('hey email')
    }, [email]) 

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log( formValues );
    }
    
/*     useEffect( () => {
        console.log('form')
    }, [form])
    
    useEffect( () => {
        console.log('email')
    }, [email]) */

    return (
        <form onSubmit={ handleSubmit }>
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

                <input type="password"
                        name="password"
                        className="form-control"
                        placeholder="milumon@gmail.com"
                        autoComplete="off"
                        value={password}
                        onChange={handleInputChange} />

                <button
                    type="submit"
                    className="btn btn-primary">
                        Guardar
                    </button>
            </div>

            { name === '123' && <Message /> }

            
        </form>
    )
}
