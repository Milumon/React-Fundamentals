import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas en <GifGridItem />', () => {
    
    const title= 'Mi titulito :D';
    const url= 'https://localhost/imagen.jpg';
    test('Debe de mostrar el componente correctamente', () => {
        const wrapper = shallow( <GifGridItem title={title} url={url} /> )
        expect (wrapper).toMatchSnapshot();
    });
});