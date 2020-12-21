import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './../src/reducers';
import { middleware } from './../src/createStore';

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const checkProps = (component, props) => {
    const propsErr = checkPropTypes(component.propTypes, props, 'props', component.name);
    return propsErr;
}

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
}