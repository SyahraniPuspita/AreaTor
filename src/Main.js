import React, {useState} from 'react';
import Square from './square.png';
import Rectangle from './rectangle.png';
import Circle from './circle.png';
import Triangle from './triangle.png';
import Rhombus from './rhombus.png';
import Trapezoid from "./trapezoid.png";
import Parallelogram from "./parallelogram.png";

    const Main = (props) => {
        const [stateInput, setStateInput] = useState();

        function handleSubmit(e){
            console.log(e.target.value)
            e.preventDefault()
            if( stateInput === "Square"){
                var a = document.getElementById("inputA").value;
                var resultSquare = a*a;
                document.getElementById("result").innerHTML = "Result : " + resultSquare;
            } else if ( stateInput === "Rectangle"){
                var p = document.getElementById("inputP").value;
                var l = document.getElementById("inputL").value;
                var resultRect = p*l;
                document.getElementById("result").innerHTML = "Result : " + resultRect;
            } else if (stateInput === "Circle"){
                var r = document.getElementById("inputR").value;
                var resultCircle = Math.PI * r * r;
                document.getElementById("result").innerHTML = "Result : " + resultCircle;
            } else if (stateInput === "Triangle"){
                var a = document.getElementById("inputA").value;
                var t = document.getElementById("inputT").value;
                var resultTria = (a * t) / 2;
                document.getElementById("result").innerHTML = "Result : " + resultTria;
            } else if (stateInput === "Trapezoid"){
                var a = Number(document.getElementById("inputA").value);
                var b = Number(document.getElementById("inputB").value);
                var t = document.getElementById("inputT").value;
                var resultTrape = (a + b)*t / 2 ;
                document.getElementById("result").innerHTML = "Result : " + resultTrape;
            } else if (stateInput === "Parallelogram"){
                var a = document.getElementById("inputA").value;
                var t = document.getElementById("inputT").value;
                var resultPar = a*t;
                document.getElementById("result").innerHTML = "Result : " + resultPar;
            } else if (stateInput === "Rhombus"){
                var a = document.getElementById("inputA").value;
                var b = document.getElementById("inputB").value;
                var resultRhom = (a*b)/2;
                document.getElementById("result").innerHTML = "Result : " + resultRhom;
            }
            

        }

        function handleChange(e){
            setStateInput(e.target.value)
            console.log(e.target.value)

            const result = `<p id="result">Result : </p>`

            if(e.target.value === "Square"){
                document.getElementById("changeShape").src=Square;
                const square = `<label id="labelA">a :</label>
                <input type="text" id="inputA"></input> <br></br>`
                document.getElementById("demo").innerHTML = square;
                document.getElementById("result").innerHTML = result;
            } else if (e.target.value === "Rectangle"){
                const rect = `<label id="labelP">P :</label>
                <input type="text" id="inputP"></input> <br></br>
                <label id="labelL">L :</label>
                <input type="text" id="inputL"></input> <br></br>`
                document.getElementById("demo").innerHTML = rect;
                document.getElementById("result").innerHTML = result;
                document.getElementById("changeShape").src=Rectangle;
            } else if (e.target.value === "Triangle"){
                const triangle = `<label id="labelA">A :</label>
                <input type="text" id="inputA"></input> <br></br>
                <label id="labelT">t :</label>
                <input type="text" id="inputT"></input> <br></br>`
                document.getElementById("demo").innerHTML = triangle;
                document.getElementById("changeShape").src=Triangle;
                document.getElementById("result").innerHTML = result;
            } else if (e.target.value === "Circle"){
                const circle = `<label id="labelR">r :</label>
                <input type="text" id="inputR"></input> <br></br>`
                document.getElementById("demo").innerHTML = circle;
                document.getElementById("changeShape").src=Circle;
                document.getElementById("result").innerHTML = result;
            } else if (e.target.value === "Trapezoid"){
                const trapezoid = `<label id="labelA">a :</label>
                <input type="text" id="inputA"></input> <br></br>
                <label id="labelB">b :</label>
                <input type="text" id="inputB"></input> <br></br>
                <label id="labelT">t :</label>
                <input type="text" id="inputT"></input> <br></br>`
                document.getElementById("demo").innerHTML = trapezoid;
                document.getElementById("changeShape").src=Trapezoid;
                document.getElementById("result").innerHTML = result;
            } else if (e.target.value === "Parallelogram") {
                const parallelogram = `<label id="labelA">a :</label>
                <input type="text" id="inputA"></input> <br></br>
                <label id="labelT">t :</label>
                <input type="text" id="inputT"></input> <br></br>`
                document.getElementById("demo").innerHTML = parallelogram;
                document.getElementById("changeShape").src=Parallelogram;
                document.getElementById("result").innerHTML = result;
            } else if (e.target.value === "Rhombus") {
                const rhombus = `<label id="labelA">a :</label>
                <input type="text" id="inputA"/> <br></br>
                <label id="labelB">b :</label>
                <input type="text" id="inputB"/> <br></br>`
                document.getElementById("demo").innerHTML = rhombus;
                document.getElementById("changeShape").src=Rhombus;
                document.getElementById("result").innerHTML = result;
            }
        }
        return(
            <div className="main_content">
                <div className="main_header">
                    <h1>AreaTor.</h1>
                    <p>Calculate The Area !</p>
                </div>
                <div className="main_calc">
                    <div className="calc_wrap">
                        <div className="shape_wrap">
                            <p id="pickShape">Pick The Shape! = </p>
                            <form onSubmit={handleSubmit}>
                            <select id="Shape" name="Shape" 
                            value={stateInput}
                            onChange={handleChange}>
                            <option value="Square">Square</option>
                            <option value="Rectangle">Rectangle</option>
                            <option value="Triangle">Triangle</option>
                            <option value="Circle">Circle</option>
                            <option value="Trapezoid">Trapezoid</option>
                            <option value="Parallelogram">Parallelogram</option>
                            <option value="Rhombus">Rhombus</option>
                            </select>
                            <input type="submit" value="Calculate!" id="shapeSubmit" />
                            </form>
                        </div>
                        <div className="pictShape">
                            <img id="changeShape" src={Square}/>
                        </div>
                        <div className="input_wrap">
                                <p id="demo"></p>
                                <p id="result"></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    export default Main;


    


    
        
        



