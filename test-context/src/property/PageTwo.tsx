import { useContext } from "react";

import { PropertyContext } from "./UsePropertyContextProvider";

export default function PageTwo() {
    const { propertyForm, updatePropertyForm } = useContext(PropertyContext)

    return (
        <>
            <div>
                <h1>Property Page Two</h1>
                <label htmlFor="phone">電話番号:</label>
                <input
                    type="text"
                    id="phone"
                    value={propertyForm.phone}
                    onChange={(e) => {
                        updatePropertyForm({ ...propertyForm, phone: e.target.value })
                    }}
                />
            </div>
            <div>
                <button onClick={() => location.replace("/uploadForm/propertyComplete")}>提出</button>
            </div>
        </>
    );
}