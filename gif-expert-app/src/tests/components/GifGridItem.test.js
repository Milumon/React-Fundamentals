import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas en <GifGridItem />', () => {
        
    const title= 'Mi titulito :D';
    const url= 'https://localhost/imagen.jpg';
    const wrapper = shallow( <GifGridItem title={title} url={url} /> )

    test('Debe de mostrar el componente correctamente', () => {
       
        expect (wrapper).toMatchSnapshot();

    });

    test('Debe tener el title igual al prop', () => {
        const p = wrapper.find('p') 
        expect(p.text().trim()).toBe(title)
    });

    test('Debe de tener la imagen igual al props url y alt', () => {
        const img = wrapper.find('img')
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    });

    test('Debe tener fadeIn como className', () => {
        const div = wrapper.find('div')
        //expect(div.prop('className').split(' ')[2]).toBe('animate__fadeIn')
        expect(div.prop('className').includes('animate__fadeIn')).toBe(true)

    });
});