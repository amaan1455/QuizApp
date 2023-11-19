import React, { useState, useEffect } from "react";
import axios from "axios";
const Results = () => {
    const [data, setData] = useState([]);
    const loadData = async () => {
        const response = await axios.get("http://localhost:8080/results");
        console.log(response);
        setData(response.data);
    }
    useEffect(() => {
        loadData();
    }, []);
    const renderQuizList = data.map(
        (quizName) => {
            return (
                <tr>
                    <th scope="row">{quizName.name}</th>
                    <td>{quizName.cat}</td>
                    <td>{quizName.score}</td>
                    <td>{quizName.total}</td>
                </tr>
            )
        }
    );
    return (
        <div className="card">
            <h3>Results</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Quiz</th>
                        <th scope="col">Score</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {renderQuizList}
                </tbody>
            </table>
        </div>
    );
};
export default Results;