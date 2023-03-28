const defaultState = {
    tests: [],
    score: 0,
    open: false,
    precent: 0,
}

export const reducer = (state = defaultState, action) => {
    const { type, payload, id } = action;
    const { tests } = state
    switch (type) {
        case "REMOVE_STATE" : {
            return {
                ...state,
                tests: [],
                score: 0,
                precent: 0,
            }
        }
        case "MODAL_COMPONENT" : {
            return {
                ...state,
                open: payload // true || false
            }
        }
        case "TOTAL_SCORE": {
            if (payload === true) {
                return {
                    ...state,
                    score: state.score + 1,
                    precent: (state.score * state.tests.length) % 100
                }
            } else {
                return {
                    ...state,
                    score: 0
                }
            }
        }
        case "ADD_TEST": {
            const newItem = {
                id: Date.now(),
                test: payload.test,
                variant: payload.variant, // a b c
                variants: [
                    { quest: payload.variantA, correct: payload.variant === 'a' ? true : false },
                    { quest: payload.variantB, correct: payload.variant === 'b' ? true : false },
                    { quest: payload.variantC, correct: payload.variant === 'c' ? true : false }
                ]
            }
            return {
                ...state,
                tests: [...tests, newItem]
            }
        }
        case "DELETE_TEST": {
            const newArr = tests.filter(item => item.id !== id)
            return {
                ...state,
                tests: newArr
            }
        }
        default:
            return state
    }
}