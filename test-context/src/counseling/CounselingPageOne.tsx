import { useNavigate } from "react-router-dom";
// import { useContext } from "react";

// import { PropertyContext } from "./UsePropertyContextProvider";

export default function CounselingPageOne() {
    const navigate = useNavigate()

    return (
        <>
            <div>
                <h1>Counseling Page One</h1>
                <label htmlFor="age">年齢:</label>
                <input
                    type="text"
                    id="age"
                    name="age"
                />
            </div>
            <div>
                <button onClick={() => navigate("/uploadForm/counselingPageTwo")}>次へ</button>
            </div>
        </>
    );
}