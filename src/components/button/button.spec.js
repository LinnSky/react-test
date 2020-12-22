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
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                buttonText: 'Test button test',
                emitEvent: mockFunc
            };
            wrapper = shallow(<SharedButton {...props} />)
        });
        
        it('Should render a button', () => {
            const button = findByTestAtrr(wrapper, 'button-component');
            expect(button.length).toBe(1);
        })

        it('Should emit callback on click event', () => {
            const button = findByTestAtrr(wrapper, 'button-component');
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        });
    })
    
    
})
