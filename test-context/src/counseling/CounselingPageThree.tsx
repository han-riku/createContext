import { useNavigate } from "react-router-dom";
// import { useContext } from "react";

// import { PropertyContext } from "./UsePropertyContextProvider";

export default function CounselingPageThree() {
    const navigate = useNavigate()

    return (
        <>
            <div>
                <h1>Counseling Page Three</h1>
                <label htmlFor="birthdate">生年月日:</label>
                <input
                    type="text"
                    id="birthdate"
                    name="birthdate"
                />
            </div>
            <div>
                <button onClick={() => navigate("/uploadForm/counselingComplete")}>提出</button>
            </div>
        </>
    );
}