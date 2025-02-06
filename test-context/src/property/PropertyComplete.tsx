import { useNavigate } from "react-router-dom";

export default function PropertyComplete() {
    const navigate = useNavigate()

    return (
        <>
            <div>
                <h1>物件情報登録完了</h1>
                <button onClick={() => navigate("/uploadForm/Guidance")}>物件情報登録へ</button>
            </div>
        </>
    );
}