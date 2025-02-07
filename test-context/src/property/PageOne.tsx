import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { PropertyContext } from "../contexts/propertyContext/propertyContext";

export default function PageOne() {
    const navigate = useNavigate()
    const { propertyForm, updatePropertyForm } = useContext(PropertyContext)

    return (
        <>
            <div>
                <h1>Property Page One</h1>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={propertyForm.name}
                    onChange={(e) => {
                        updatePropertyForm({ ...propertyForm, name: e.target.value })
                    }}
                />
            </div>
            <div>
                <button onClick={() => navigate("/uploadForm/pageTwo")}>次へ</button>
            </div>
        </>
    );
}