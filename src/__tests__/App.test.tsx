import * as React from 'react';
import {shallow} from 'enzyme';
import {fireEvent, render, cleanup} from "@testing-library/react";
import App from "../components/App";

describe('<App />', () => {
    afterEach(cleanup);

    it('Начальный снимок', () => {
        const component = shallow(<App />);
        expect(component).toMatchSnapshot();
    });

    it('Должен рендерить правильное значение input',  async () => {
        const { container } = render(<App/>);
        expect(container.querySelector('input').getAttribute('value')).toEqual('');
        fireEvent.change(container.querySelector('input'), {
            target: {
                value: 'test'
            },
        })
        expect(container.querySelector('input').getAttribute('value')).toEqual('test');
        fireEvent.click(container.querySelector('button'))
        expect(container.querySelector('input').getAttribute('value')).toEqual('');
    });
})