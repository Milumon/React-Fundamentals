import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Test de AddCategory', () => {

    const setCategories = () => {}
    const wrapper = shallow( <AddCategory setCategories={setCategories} /> )

    test('Debe de mostrarse el component', () => {

         expect(wrapper).toMatchSnapshot();
        
    });

    test('Debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: {value} } )

         expect( wrapper.find('h1').text().trim() ).toBe(value)
        
    })
    
    
});