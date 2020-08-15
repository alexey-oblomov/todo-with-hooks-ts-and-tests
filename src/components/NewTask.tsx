import * as React from 'react';

import {useContext} from 'react';
import {ContextApp} from './App'

import {TaskName} from '../types/taskType';
import {ActionType} from '../types/stateType';

const NewTask: React.FC = () => {
    const {state, changeState} = useContext(ContextApp);

const addTask = (event: React.FormEvent<HTMLFormElement>, task: TaskName) => {
    event.preventDefault();
    changeState({type: ActionType.ADD, payload: task})
    changeState({type: ActionType.CHANGE, payload: ''})
  }

  const changeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
      changeState({type: ActionType.CHANGE, payload: event.target.value})
  }

return (
    <>
        <form onSubmit={(event) => addTask(event, state.newTask)}>
            <input type='text' onChange={(event) => changeTask(event)} value={state.newTask} />
            <button type='submit'>Добавить задачу</button>
        </form>
    </>
)
}

export default NewTask;