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

export default (state, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload],
      };
    case DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(
          (article) => article.id !== action.payload
        ),
      };
      case SET_CURRENT_ARTICLE:
          return {
              ...state,
              current: action.payload
          };
          case CLEAR_CURRENT_ARTICLE:
              return {
                ...state,
                current: null  
              }
    default:
      return state;
  }
};
