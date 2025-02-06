import { useNavigate } from 'react-router-dom';

export default function Guidance() {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Guidance</h1>
            <button onClick={() => navigate("/uploadForm/pageOne")}>物件情報登録</button>
        </div>
    );
}