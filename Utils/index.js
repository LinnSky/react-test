import checkPropTypes from 'check-prop-types';

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const checkProps = (component, props) => {
    const propsErr = checkPropTypes(component.propTypes, props, 'props', component.name);
    return propsErr;
} 