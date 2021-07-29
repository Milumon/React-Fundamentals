import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')


describe('El component se debe mostrar', () => {

    
    const category = 'GFRIEND' 

    test('El componente debe coincidir con el snapshot', () => { 
    
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
 
        const wrapper = shallow( <GifGrid category={category} /> )
        expect(wrapper).toMatchSnapshot()
        
    })

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'http://localhost/cualquiercosa.jpg',
            title: 'Mi imagensita'
        },{
            id: 'xd',
            url: 'http://localhost/cualquiercosa.jpg',
            title: 'Mi imagensita'
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow( <GifGrid category={category} /> )
        
        // tests
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)

    
    })
    
    
    
});