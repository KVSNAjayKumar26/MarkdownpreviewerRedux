import { createStore } from "redux";


const initialState = {
    markdownText: '',
};

const markdownReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MARKDOWN':
            return { ...state, markdownText: action.payload };
        default:
            return state;
    }
};

const store = createStore(markdownReducer);

export default store;