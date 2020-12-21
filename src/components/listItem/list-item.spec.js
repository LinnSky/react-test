import { shallow } from 'enzyme';
import React from 'react';
import { findByTestAtrr, checkProps } from './../../../Utils'
import ListItem from './index';

describe('ListItem Component', () => {
    
    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                title: 'Test title',
                desc: 'Test desc'
            };
            const propsErr = checkProps(ListItem, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Component Renders', () => {
        
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Test title',
                desc: 'Test desc'
            }
            wrapper = shallow(<ListItem {...props} />)
        })

        it('Should render list item', () => {
            const component = findByTestAtrr(wrapper, 'list-item');
            expect(component.length).toBe(1);
        });

        it('Should render title', () => {
            const title = findByTestAtrr(wrapper, 'title');
            expect(title.length).toBe(1);
        });

        it('Should render desc', () => {
            const desc = findByTestAtrr(wrapper, 'desc');
            expect(desc.length).toBe(1);
        });
    })
    
    describe('Should NOT render', () => {
        
        let wrapper;
        beforeEach(() => {
            const props = { desc: 'Some text'};
            wrapper = shallow(<ListItem {...props} />);
        });

        it('Component is not rendered', () => {
            const component = findByTestAtrr(wrapper, 'title');
            expect(component.length).toBe(0);
        });
    })
    
    
});

