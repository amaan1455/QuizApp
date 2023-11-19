import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Results from "./Results.js";
const Home = () => {
    const [data, setData] = useState([]);
    const loadData = async () => {
        const response = await axios.get("http://localhost:8080/cat");
        console.log(response);
        setData(response.data);
    }
    useEffect(() => {
        loadData();
    }, []);
    const renderQuizList = data.map(
        (quizName) => {
            return (
                <Link to={`/${quizName}`}><div className="item">
                    <div className="card" style={{ margin: 10 }}>
                        <ul className="list-group list-group-flush">

                            <li className="list-group-item">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-6"><strong>Title:</strong> {quizName}</div>
                                        <div class="col-6"><Link to={`/${quizName}`}><button type="button" style={{ marginRight: "5px" }} className="btn btn-outline-dark">Start</button></Link></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div></Link>)
        }
    );
    return (
        <div className="card contactList">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h3 className="heading">Quiz</h3>
                        <Link to={'/build'}><button type="button" style={{ marginLeft: '10px', marginRight: '10px' }} className="btn btn-outline-dark">Build your own Quiz</button></Link>
                        {renderQuizList}
                    </div>
                    <div className="col-6"><Results /></div>
                </div>
            </div>
            <h3>TechStack</h3>
            <h2>FrontEnd: React JS,BootStrap,HTML,CSS</h2>
            <h2>BackEnd: Java SpringBoot,Hibernate,JPA</h2>
            <h2>Server: Apache Tomcat</h2>
            <h2>DataBase: MySQL</h2>
            <h2>Tools: IntelliJ IDEA,MySQL WorkBench,PostMan</h2>
        </div>
    );
};
export default Home;