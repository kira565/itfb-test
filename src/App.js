import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import ImagesContainer from "./components/ImageContainer";
import Preloader from "./components/Preloader";

const App = () => {
    const [data, setData] = useState({ photos: [] });
    const [isLoaded, setLoadingComplete] = useState(false);
    const [dataLength, setDataLength] = useState(0);

    useEffect(() => {
        function getFetchUrl() {
            return "https://jsonplaceholder.typicode.com/photos";
        }
        async function fetchData() {
            const result = await axios(getFetchUrl());
            setData(result);
        }
        fetchData().then(() => {
            setLoadingComplete(true)
        });
    }, []);

    const handleSetDataLength = (length) => {
        setDataLength(length)
    };

    return (
        <div className="App">
            <div className="header">
                <h1>Вывод данных в цикле:</h1>
                <h4>Всего записей: {dataLength}</h4>
            </div>
            <div className="main">
                {isLoaded ? <ImagesContainer data={data} handleSetDataLength={handleSetDataLength}/> : <Preloader/>}
            </div>
        </div>
    );
};

export default App;
