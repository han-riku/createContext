import { useState } from 'react';

import { Counseling, CounselingContext } from './counselingContext';

// グローバルなStateを提供するProvider
export default function CounselingContextProvider({ children }: { children: React.ReactNode }) {
    const [counselingForm, setCounselingForm] = useState<Counseling>({
        age: "",
        sex: "",
        birthdate: "",
    })

    console.log(counselingForm.age + "from Provider");
    console.log(counselingForm.sex + "from Provider");
    console.log(counselingForm.birthdate + "from Provider");

    const updateCounselingForm = (value: Counseling) => {
        setCounselingForm(value);
    }

    return (
        <CounselingContext.Provider value={{ counselingForm, updateCounselingForm }}>
            {children}
        </CounselingContext.Provider>
    )
}