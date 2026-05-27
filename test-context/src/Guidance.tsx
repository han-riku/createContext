import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';

import './Guidance.css'

export default function Guidance() {
    const navigate = useNavigate()

    return (
        <div>
            <h1>ご案内</h1>
            <div className='guidance'>
                <button onClick={() => navigate("/uploadForm/pageOne")}>物件情報登録</button>
                <button onClick={() => navigate("/uploadForm/counselingPageOne")}>カウンセリング情報登録</button>
                <div>Hello World</div>
            </div>
        </div>
    );
}