import { useNavigate } from "react-router-dom";

export default function CounselingComplete() {
    const navigate = useNavigate()

    return (
        <>
            <div>
                <h1>カウンセリング情報登録完了</h1>
                <button onClick={() => navigate("/uploadForm/Guidance")}>ご案内へ</button>
            </div>
        </>
    );
}