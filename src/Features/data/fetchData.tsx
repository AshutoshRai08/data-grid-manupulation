import axios from "axios";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { GridRowParams } from "@mui/x-data-grid";
import { Todo, Inputs } from "../../Interfaces/typeRow";


export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get<Todo>(
    "https://api.slingacademy.com/v1/sample-data/users?offset=0&limit=10"
  );

  return response.data.users;
});

const fetchReducer = createSlice({
  name: "fetching",
  initialState: {
    todos: [] as Inputs[],
    status: "idle",
    error: "",
    rows: [] as Inputs[],
    modalState: false,
  },
  reducers: {
    editReducer: (state, action: PayloadAction<GridRowParams>) => {
      state.rows = JSON.parse(JSON.stringify(state.todos));
      state.rows = state.rows.filter((data) => data.id == action.payload.id);
      // console.log(state.rows);
    },
    updateReducer: (state, action: PayloadAction<Inputs>) => {
      let rowUpdate: Inputs = JSON.parse(JSON.stringify(state.todos)).find(
        (todo: any) => todo.id == action.payload.id
      );
      if (rowUpdate) {
        rowUpdate.email = action.payload.email;
        rowUpdate.gender = action.payload.gender;
        rowUpdate.zipcode = action.payload.zipcode;
        let indexBe = JSON.parse(JSON.stringify(state.todos)).findIndex(
          (data: any) => data.id == action.payload.id
        );
        state.todos.splice(indexBe, 1, rowUpdate);
        console.log(JSON.parse(JSON.stringify(state.todos)));
        console.log(rowUpdate);
        //  debugger
      }
    },

    deleteTodo: (state, action: PayloadAction<GridRowParams>) => {
      console.log(action.payload);
      let Ntodo: Inputs[] = JSON.parse(JSON.stringify(state.todos));
      state.todos = Ntodo.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;

      state.status = "succeeded";
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.status = "failed";
      state.error =
        action.error.message !== undefined ? action.error.message : "";
    });
  },
});
export const { deleteTodo, editReducer, updateReducer } = fetchReducer.actions;
export default fetchReducer.reducer;
