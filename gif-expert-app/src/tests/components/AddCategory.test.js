import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Test de AddCategory', () => {

    const setCategories = () => {}

    test('Debe de mostrarse el component', () => {

        const wrapper = shallow( <AddCategory setCategories={setCategories} /> )
        expect(wrapper).toMatchSnapshot();
        
    });

    test('Debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: {value} } )

        expect(wrapper.)
        
    })
    
    
});