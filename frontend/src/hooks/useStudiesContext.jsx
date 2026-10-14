import { StudiesContext } from "../context/StudyContext";
import { useContext } from "react";

export const useStudiesContext = () => {
    const context = useContext(StudiesContext)

    if (!context){
        throw Error('Must be used within studies context provider')
    }
    
    return context;
}