import { useNavigate } from "react-router-dom";
// import { useContext } from "react";

// import { PropertyContext } from "./UsePropertyContextProvider";

export default function CounselingPageTwo() {
    const navigate = useNavigate()

    return (
        <>
            <div>
                <h1>Counseling Page Two</h1>
                <label htmlFor="性別">性別:</label>
                <input
                    type="text"
                    id="sex"
                    name="sex"
                />
            </div>
            <div>
            <button onClick={() => navigate("/uploadForm/counselingPageThree")}>次へ</button>
            </div>
        </>
    );
}