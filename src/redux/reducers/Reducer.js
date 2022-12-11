import { SHOW_DETAIL } from "../actions/Actions";

const initialState = {
    userData: {},
}

const userDetailReducer = (state = initialState, action) => {
    switch (action?.type) {
        case SHOW_DETAIL:
            return {
                ...state,
                userData: action?.payload
            };
        default:
            return state;
    }
}

export default userDetailReducer;