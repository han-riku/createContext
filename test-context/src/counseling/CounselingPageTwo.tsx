import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { CounselingContext } from "../contexts/counselingContext/counselingContext";

export default function CounselingPageTwo() {
    const navigate = useNavigate()
    const { counselingForm, updateCounselingForm } = useContext(CounselingContext)

    return (
        <>
            <div>
                <h1>Counseling Page Two</h1>
                <label htmlFor="性別">性別:</label>
                <input
                    type="text"
                    id="sex"
                    name="sex"
                    value={counselingForm.sex}
                    onChange={(e) => updateCounselingForm({ ...counselingForm, sex: e.target.value })}
                />
            </div>
            <div>
            <button onClick={() => navigate("/uploadForm/counselingPageThree")}>次へ</button>
            </div>
        </>
    );
}