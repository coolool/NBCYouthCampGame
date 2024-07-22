body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #000;
}

#gameContainer {
    position: relative;
    width: 450px;
    height: 500px;
    overflow: hidden;
    border: 2px solid #fff;
}

#gameCanvas {
    width: 100%;
    height: calc(100% - 50px);
    display: block;
}

#controls {
    display: flex;
    justify-content: space-between;
}

#controls button {
    background: #444;
    color: #fff;
    border: none;
    padding: 15px 0;
    font-size: 20px;
    cursor: pointer;
    width: 33.33%;
    box-sizing: border-box;
}
