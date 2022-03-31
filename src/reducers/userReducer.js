const INITIAL_STATE = {
    user: null,
};


const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

// userReducer: update state, otherwise return the current state
export default userReducer;