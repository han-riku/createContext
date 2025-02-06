import { useNavigate } from "react-router-dom";

export default function PageOne() {
    const navigate = useNavigate()

    return (
        <>
            <div>
                <h1>Page One</h1>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
            </div>
            <div>
                <button onClick={() => navigate("/uploadForm/pageTwo")}>次へ</button>
            </div>
        </>
    );
}