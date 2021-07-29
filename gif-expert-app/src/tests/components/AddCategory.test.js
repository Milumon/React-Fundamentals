import React from 'react';
// import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Test de AddCategory', () => {

    const setCategories = jest.fn() // () => {}
    let wrapper = shallow( <AddCategory setCategories={setCategories} /> )

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories} /> )
    })

    test('Debe de mostrarse el component', () => {

         expect(wrapper).toMatchSnapshot();
        
    });

    test('Debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: {value} } )

         expect( wrapper.find('h1').text().trim() ).toBe(value)
        
    })

    test('No debe de postear la información con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} } );

        expect( setCategories ).not.toHaveBeenCalled();
        
    })
    
    
    
});