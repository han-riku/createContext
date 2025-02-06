import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PageTwo() {
    const navigate = useNavigate();
    const [phone, setPhone] = useState("");

    return (
        <>
            <div>
                <h1>Page Two</h1>
                <label htmlFor="phone">電話番号:</label>
                <input
                    type="text"
                    id="phone"
                    onChange={(e) => {
                        setPhone(e.target.value);
                        console.log(phone);
                    }}
                />
            </div>
            <div>
                <button onClick={() => navigate("/uploadForm/propertyComplete")}>提出</button>
            </div>
        </>
    );
}