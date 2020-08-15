import * as React from 'react';
import {useReducer} from 'react';
import { Action, ActionType, State, ContextState} from '../types/stateType'
import NewTask from "./NewTask";
import TasksList from "./TasksList";

export const initialState: State = {
    newTask: '',
    tasks: []
}

export const ContextApp = React.createContext<Partial<ContextState>>({});

export const todoReducer = (state: State, action: Action):State => {
    switch (action.type) {
        case ActionType.ADD: {
            return {...state, tasks: [...state.tasks, {
                name: action.payload,
                isDone: false
            }]}
        }

        case ActionType.CHANGE: {
            return {...state, newTask: action.payload}
    }
        case ActionType.REMOVE: {
        return {...state, tasks: [...state.tasks.filter(task => task !== action.payload)]}
    }
        case ActionType.TOGGLE: {
            return {...state, tasks: {...state.tasks.map((task) => (task !== action.payload ? task : {...task, isDone: !task.isDone}))}}
        }
        default: throw new Error('Unexpected action');
    }
}


const App: React.FC = () => {
  const [state, changeState] = useReducer<React.Reducer<State, Action>>(todoReducer, initialState);

  const ContextState: ContextState = {
      state,
      changeState
  }

  return (
        <>
            <ContextApp.Provider value={ContextState}>
                <NewTask />
                <TasksList />
            </ContextApp.Provider>
            
        </>
    )
}

export default App;