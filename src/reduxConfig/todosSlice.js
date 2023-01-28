import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
  },
});

export const todosReducer = todosSlice.reducer;

export const { addTodo, deleteTodo } = todosSlice.actions;
