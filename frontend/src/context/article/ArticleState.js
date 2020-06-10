import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ArticleContext from "./articleContext";
import articleReducer from "./articleReducer";
import {
  GET_ARTICLES,
  ADD_ARTICLE,
  DELETE_ARTICLE,
  SET_CURRENT_ARTICLE,
  CLEAR_CURRENT_ARTICLE,
  UPDATE_ARTICLE,
  FILTER_ARTICLES,
  CLEAR_FILTER,
} from "../types";

const ArticleState = (props) => {
  const initialState = {
    articles: [
      {
        id: 1,
        title: "One article",
        content:
          "Curabitur vitae congue lorem. Nam vehicula diam in accumsan dapibus. Nunc consequat dolor ac elementum auctor. Suspendisse euismod sem quis mi egestas molestie in sed urna. Etiam nisl dui, congue et ipsum non, feugiat laoreet felis. Cras vitae libero quam. Praesent facilisis lacus a sodales vehicula. Duis risus justo, volutpat maximus mauris vitae, posuere facilisis augue. Etiam a quam id nunc sodales dapibus vitae at tellus. Duis quis purus convallis, venenatis mauris nec, consequat est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur porta imperdiet vulputate. Fusce commodo eu velit a mollis. Duis orci massa, ultricies non tellus pretium, cursus mollis lectus.",
        image:
          "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        status: true,
      },
      {
        id: 2,
        title: "Two article",
        content:
          "Curabitur vitae congue lorem. Nam vehicula diam in accumsan dapibus. Nunc consequat dolor ac elementum auctor. Suspendisse euismod sem quis mi egestas molestie in sed urna. Etiam nisl dui, congue et ipsum non, feugiat laoreet felis. Cras vitae libero quam. Praesent facilisis lacus a sodales vehicula. Duis risus justo, volutpat maximus mauris vitae, posuere facilisis augue. Etiam a quam id nunc sodales dapibus vitae at tellus. Duis quis purus convallis, venenatis mauris nec, consequat est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur porta imperdiet vulputate. Fusce commodo eu velit a mollis. Duis orci massa, ultricies non tellus pretium, cursus mollis lectus.",
        image:
          "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        status: true,
      },
      {
        id: 3,
        title: "Three article",
        content:
          "Curabitur vitae congue lorem. Nam vehicula diam in accumsan dapibus. Nunc consequat dolor ac elementum auctor. Suspendisse euismod sem quis mi egestas molestie in sed urna. Etiam nisl dui, congue et ipsum non, feugiat laoreet felis. Cras vitae libero quam. Praesent facilisis lacus a sodales vehicula. Duis risus justo, volutpat maximus mauris vitae, posuere facilisis augue. Etiam a quam id nunc sodales dapibus vitae at tellus. Duis quis purus convallis, venenatis mauris nec, consequat est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur porta imperdiet vulputate. Fusce commodo eu velit a mollis. Duis orci massa, ultricies non tellus pretium, cursus mollis lectus.",
        image:
          "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        status: true,
      },
    ],
    current: null
  };

  const [state, dispatch] = useReducer(articleReducer, initialState);

  //Add article
  const addArticle = (article) => {
    article.id = uuidv4();
    article.image =
      "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
    dispatch({ type: ADD_ARTICLE, payload: article });
  };

  //Delete article
  const deleteArticle = (id) => {
    dispatch({ type: DELETE_ARTICLE, payload: id });
  };
  //Set Current article
  const setCurrentArticle = (article) => {
    dispatch({ type: SET_CURRENT_ARTICLE, payload: article });
  };
  //Clear Current article
  const clearCurrentArticle = () => {
    dispatch({ type: CLEAR_CURRENT_ARTICLE });
  };
  //Update article

  //Filter article

  //Clear filter

  return (
    <ArticleContext.Provider
      value={{
        articles: state.articles,
        current: state.current,
        addArticle,
        deleteArticle,
        setCurrentArticle,
        clearCurrentArticle
        
      }}
    >
      {props.children}
    </ArticleContext.Provider>
  );
};

export default ArticleState;
