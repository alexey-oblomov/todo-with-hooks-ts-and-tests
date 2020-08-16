import {todoReducer} from "../reducers/todoReducer";
import {ActionType, Action, State} from "../types/stateType";
import {Task} from "../types/taskType";

describe ("Тест todoReducer", () => {
    it('Возвращает новый стейт для "ADD"', () => {
        const initialState: State = {newTask: '', tasks: []};
        const updateAction: Action = {type: ActionType.ADD, payload:'Новая задача'};
        const updateState = todoReducer(initialState, updateAction);
        expect(updateState).toEqual({newTask: '', tasks: [{name: 'Новая задача', isDone: false}]});
    })

    it('Возвращает новый стейт для "REMOVE"', () => {
        const task: Task = {name: 'Новая задача', isDone: false}
        const initialState: State = {newTask: '', tasks: [task]}
        const updateAction: Action = {type: ActionType.REMOVE, payload: task}
        const updatedState = todoReducer(initialState, updateAction);
        expect(updatedState).toEqual({newTask: '', tasks: []})
    } )

    it('Возвращает новый стейт для "TOGGLE"', () => {
        const task: Task = {name: 'Новая задача', isDone: false}
        const initialState: State = {newTask: '', tasks: [task]};
        const updateAction: Action = {type: ActionType.TOGGLE, payload: task};
        const updatedState = todoReducer(initialState, updateAction);
        expect(updatedState).toEqual({newTask: '', tasks: [{name: 'Новая задача', isDone: true}]});
    });

    it('Возвращает новый стейт для "CHANGE"', () => {
        const initialState: State = {newTask: '', tasks: []};
        const updateAction: Action = {type: ActionType.CHANGE, payload: 'Новая задача'};
        const updatedState = todoReducer(initialState, updateAction);
        expect(updatedState).toEqual({newTask: 'Новая задача', tasks: []});
    });
})