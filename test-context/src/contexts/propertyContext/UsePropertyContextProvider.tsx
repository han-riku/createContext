import { useState } from 'react';

import { Property, PropertyContext } from './propertyContext';


// グローバルなStateを提供するProvider
export default function UsePropertyContextProvider({ children }: { children: React.ReactNode }) {
    const [propertyForm, setPropertyForm] = useState<Property>({
        name: "",
        phone: ""
    })

    console.log(propertyForm.name + "from Provider");

    const updatePropertyForm = (value: Property) => {
        setPropertyForm(value);
    }

    return (
        <PropertyContext.Provider value={{ propertyForm, updatePropertyForm }}>
            {children}
        </PropertyContext.Provider>
    )
}
