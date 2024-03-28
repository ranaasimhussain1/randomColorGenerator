import { useState, useEffect } from "react"

export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState("hex")
    const [color, setColor] = useState("#000000")
    function randomColor(length) {
        return Math.floor(Math.random() * length)
    }
    function handleRgbColor() {
        console.log("RGB");
        const r = randomColor(256)
        const g = randomColor(256)
        const b = randomColor(256)

        setColor(`rgb(${r},${g},${b})`)

    }
    function handleHexColor() {
        console.log("HEX");
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
        let hexColor = "#";
        for (let index = 1; index <= 6; index++) {
            hexColor += hex[randomColor(hex.length)]

        }
        setColor(hexColor)


    }
    useEffect(() => {
        if (typeOfColor === "rgb") handleRgbColor();
        else handleHexColor();
    }, [typeOfColor]);

    return (
        <div className="main"
            style={{
                backgroundColor: color,
                height: '100vh',
                width: '100vw',
                textAlign: 'center'
            }}>

            <button onClick={typeOfColor === "rgb" ? handleRgbColor : handleHexColor} >Generate Random Color</button>
            <button onClick={() => setTypeOfColor("rgb")}> Generate RGB Color</button>
            <button onClick={() => setTypeOfColor("hex")}>Generate HEX Colors</button>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontSize: "60px",
                    marginTop: "50px",
                    flexDirection: 'column',
                    gap: '20px'
                }}
            >
                <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}