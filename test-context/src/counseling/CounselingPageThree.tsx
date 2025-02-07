import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { CounselingContext } from "../contexts/counselingContext/counselingContext";

export default function CounselingPageThree() {
    const navigate = useNavigate()
    const { counselingForm, updateCounselingForm } = useContext(CounselingContext)

    return (
        <>
            <div>
                <h1>Counseling Page Three</h1>
                <label htmlFor="birthdate">生年月日:</label>
                <input
                    type="text"
                    id="birthdate"
                    name="birthdate"
                    value={counselingForm.birthdate}
                    onChange={(e) => updateCounselingForm({ ...counselingForm, birthdate: e.target.value })}
                />
            </div>
            <div>
                <button onClick={() => navigate("/uploadForm/counselingComplete")}>提出</button>
            </div>
        </>
    );
}