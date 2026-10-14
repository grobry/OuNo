import { createContext, useReducer } from "react";

export const StudiesContext = createContext()

//state: current state of local 
//action: action changing local state
export const studiesReducer = (state, action) => {
    switch(action.type){
        case 'SET_STUDIES': 
        return {
            studies: action.payload
        }
        case 'CREATE_STUDIES':
            return {
                studies: [action.payload, ...state.studies]
            }
        case 'DELETE_STUDIES':
            return{
                studies: state.studies.filter((s) => s._id != action.payload._id)
            }
        default:
            return state
    }
}

//wrap app with context
export const StudiesContextProvider = ({ children }) => {
    //useReducer > useState for complex objects, nested structures, arrays
    const [state, dispatch] = useReducer(studiesReducer, {
        studies: null
    })

    return (
        <StudiesContext.Provider value = {{...state, dispatch}}>
            { children }
        </StudiesContext.Provider>
    )
}