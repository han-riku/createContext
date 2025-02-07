import { createContext } from "react";

export type Counseling = {
    age: string;
    sex: string;
    birthdate: string;
};

export type CounselingContextProps ={
    counselingForm: Counseling;
    updateCounselingForm: (value: Counseling) => void;
}

export const CounselingContext = createContext<CounselingContextProps>({
    counselingForm: {
        age: "",
        sex: "",
        birthdate: ""
    },
    updateCounselingForm: () => null,
});