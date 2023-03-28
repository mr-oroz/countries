

export const addTestAction = (object) => {
    return {
        type: "ADD_TEST",
        payload: object
    }
}

export const deleteTestAction = (id) => {
    return {
        type: "DELETE_TEST",
        id
    }
}

export const checkScoreAction = (bool) => { 
    return {
        type: 'TOTAL_SCORE',
        payload: bool // true || false 
    }
}

export const modalAction = (bool) => {
    return {
        type: 'MODAL_COMPONENT',
        payload: bool
    }
}

export const removeState = () => {
    return {
        type: 'REMOVE_STATE',
    }
}