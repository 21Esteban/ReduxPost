import { configureStore } from '@reduxjs/toolkit'
import postReducer from "./postSlice"
import modalPostReduce from "./modalPostSlice"

export const store = configureStore({
  reducer: {
    postStore:postReducer,
    modalStore:modalPostReduce
  }
})














//Para especificar cómo se actualiza el estado en respuesta a una acción, escribe funciones reductoras puras que calculan un nuevo estado basado en el estado anterior y la acción.