// store = Context API
import { createContext } from 'react';

// INITIAL STATES ----------------------------------------------------------------
export const USER = {
  email: '',
  password: '',
};

export const RECIPES = {
  foods: true,
  categoriesLimit: 5,
  cardsLimit: 12,
  meals: [],
  categoriesMeals: [],
  drinks: [],
  categoriesDrinks: [],
};

export const SEARCH = {
  search: [],
};

// COMBINE -----------------------------------------------------------------------

export const INITIAL_STATE = { ...USER, ...RECIPES, ...SEARCH };

const store = createContext(INITIAL_STATE);

export default store;

// ACTIONS -----------------------------------------------------------------------

// USER
export const ADD_LOGIN = 'ADD_LOGIN'; // ACTION -> ADD_LOGIN
export const addLogin = ({ target: { name, value } }) => ({ // ACTION-CREATOR -> ADD_LOGIN
  type: ADD_LOGIN, payload: { name, value },
});

// RECIPES

export const ADD_RECIPES = 'ADD_RECIPES';
export const addRecipes = (meals, drinks, categoriesMeals, categoriesDrinks) => ({
  type: ADD_RECIPES, payload: { meals, drinks, categoriesMeals, categoriesDrinks },
});

export const DIRECT_PAGE = 'DIRECT_PAGE';
export const directPage = (foods) => ({
  type: DIRECT_PAGE, payload: { foods },
});
