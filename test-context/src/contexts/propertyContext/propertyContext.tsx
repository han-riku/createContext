import { createContext } from "react";

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