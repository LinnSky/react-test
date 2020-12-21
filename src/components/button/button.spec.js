import { shallow } from 'enzyme';
import React from 'react';
import { findByTestAtrr, checkProps } from './../../../Utils';
import SharedButton from './index';

describe('SharedButton Component', () => {
    
    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                buttonText: 'Test button test',
                emitEvent: () => {}
            };
            const propsErr = checkProps(SharedButton, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    });

    describe('Renders', () => {
        
        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: 'Test button test',
                emitEvent: () => {}
            };
            wrapper = shallow(<SharedButton {...props} />)
        });
        
        it('Should render a button', () => {
            const button = findByTestAtrr(wrapper, 'button-component');
            expect(button.length).toBe(1);
        })
    })
    
    
})
