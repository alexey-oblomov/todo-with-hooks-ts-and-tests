import * as React from 'react';
import {ContextApp, initialState} from "../components/App";

import {shallow} from "enzyme";
import {cleanup, render} from "@testing-library/react";

import TasksList from "../components/TasksList";
import {State} from "../types/stateType";

describe('<TasksList />',() => {

    afterEach(cleanup);

    const testState: State = {
        newTask: '',
        tasks: [{name: 'test', isDone: false}, {name: 'test2', isDone: false}]
    }

    const Wrapper = () => {
        return (
            <ContextApp.Provider value={{state: testState}}>
                <TasksList/>
            </ContextApp.Provider>
            )
    }

    it('Должен возвращать правильную длину массива задач', async () => {
        const {container} = render(<Wrapper/>);
        expect(container.querySelectorAll('li')).toHaveLength(testState.tasks.length);
    });

})