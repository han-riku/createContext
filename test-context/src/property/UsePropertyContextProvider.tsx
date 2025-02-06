import { createContext, useState } from 'react';

export type Property = {
    name: string;
    phone: string;
};

export interface PropertyContextProps {
    propertyForm: Property;
    updatePropertyForm: (value: Property) => void;
}

export const PropertyContext = createContext<PropertyContextProps>({
    propertyForm: {
        name: "",
        phone: ""
    },
    updatePropertyForm: () => null,
});

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
