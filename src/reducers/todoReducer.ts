import * as React from "react";
import {State, Action, ActionType} from "../types/stateType";

export const todoReducer: React.Reducer<State, Action> = (state, action):State => {
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
            return {...state, tasks:  [...state.tasks.filter(task => task !== action.payload)]}
        }
        case ActionType.TOGGLE: {
            return {...state, tasks: [...state.tasks.map((task) => (task !== action.payload ? task : {...task, isDone: !task.isDone}))]}
        }
        default: throw new Error('Unexpected action');
    }
};