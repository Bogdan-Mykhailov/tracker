const TEST = 'TEST'

const initState = {
    value: ''
}

export const appReducer = (state = initState, action) => {
    switch (action.type) {
        case TEST: {
            return {...state, value: action.value}
        }

        default:
            return state
    }
}

//actions
export const setValue = (value) => ({type: TEST, value})