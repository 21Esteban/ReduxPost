import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

//Valor incial de nuestro estado global

const initialState = {
  posts: [
    {
      id: uuidv4(),
      img: "https://randomwordgenerator.com/img/picture-generator/fun-1009760_640.jpg",
      title: "titleDelEstadoInicial",
      description: "ValorInicial",
    },
  ],
};

export const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {

    //el parametro action es el dato que nos va a enviar el componente
    addpost: (state, action) => {
        state.posts.push({...action.payload,id:uuidv4()})
    },

    updatepost: (state,action) => {
        state.posts=state.posts.map(post=>post.id===action.payload.id? action.payload:post)
    },

    deletepost: (state,action) => {
        state.posts=state.posts.filter(post=>post.id !== action.payload)
    },
  }, 
  
});

export const { addpost, updatepost, deletepost } = postSlice.actions;

export default postSlice.reducer;
