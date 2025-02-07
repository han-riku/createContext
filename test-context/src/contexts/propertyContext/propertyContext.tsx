import { createContext } from "react";

export type Property = {
    name: string;
    phone: string;
};

export type PropertyContextProps ={
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