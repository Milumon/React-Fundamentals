import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {

        console.log('montao')

        return () => {
            console.log('desmontao')
        }

    }, [])

    return (
        <div>
            <h3>Eres genial</h3>
        </div>
    )
}
