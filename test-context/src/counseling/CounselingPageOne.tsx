import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { CounselingContext } from "../contexts/counselingContext/counselingContext";

export default function CounselingPageOne() {
    const navigate = useNavigate()
    const { counselingForm, updateCounselingForm } = useContext(CounselingContext);

    return (
        <>
            <div>
                <h1>Counseling Page One</h1>
                <label htmlFor="age">年齢:</label>
                <input
                    type="text"
                    id="age"
                    name="age"
                    value={counselingForm.age}
                    onChange={(e) => updateCounselingForm({ ...counselingForm, age: e.target.value })}
                />
            </div>
            <div>
                <button onClick={() => navigate("/uploadForm/counselingPageTwo")}>次へ</button>
            </div>
        </>
    );
}