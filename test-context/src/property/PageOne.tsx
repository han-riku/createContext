import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PageOne() {
    const navigate = useNavigate()

    const [name, setName] = useState("")

    return (
        <>
            <div>
                <h1>Page One</h1>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => {
                        setName(e.target.value)
                        console.log(name)  
                    }}
                />
            </div>
            <div>
                <button onClick={() => navigate("/uploadForm/pageTwo")}>次へ</button>
            </div>
        </>
    );
}