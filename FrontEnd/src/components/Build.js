import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const initialState = {
    title: "",
    q1: "",
    ans11: "",
    ans12: "",
    ans13: "",
    ans14: "",
    a1: "",
    q2: "",
    ans21: "",
    ans22: "",
    ans23: "",
    ans24: "",
    a2: "",
    q3: "",
    ans31: "",
    ans32: "",
    ans33: "",
    ans34: "",
    a3: "",
    q4: "",
    ans41: "",
    ans42: "",
    ans43: "",
    ans44: "",
    a4: "",
    qid1: "",
    qid2: "",
    qid3: "",
    qid4: "",
    Name: ""
};
const Build = () => {
    const [state, setState] = useState(initialState);
    const { title, q1, ans11, ans12, ans13, ans14, a1, q2, ans21, ans22, ans23, ans24, a2, q3, ans31, ans32, ans33, ans34, a3, q4, ans41, ans42, ans43, ans44, a4, qid1, qid2, qid3, qid4, Name } = state;
    const { id } = useParams();
    useEffect(() => {
        if (id) axios.get(`http://localhost:8080/questions/${id}`).then((resp) => {
            console.log(resp);
            document.getElementById("name").classList.remove("visually-hidden");
            document.getElementById("title").classList.add("visually-hidden");
            setState({
                ...state, title: id,
                q1: resp.data[0].title,
                qid1: resp.data[0].id,
                ans11: resp.data[0].ans1,
                ans12: resp.data[0].ans2,
                ans13: resp.data[0].ans3,
                ans14: resp.data[0].ans4,
                q2: resp.data[1].title,
                qid2: resp.data[1].id,
                ans21: resp.data[1].ans1,
                ans22: resp.data[1].ans2,
                ans23: resp.data[1].ans3,
                ans24: resp.data[1].ans4,
                q3: resp.data[2].title,
                qid3: resp.data[2].id,
                ans31: resp.data[2].ans1,
                ans32: resp.data[2].ans2,
                ans33: resp.data[2].ans3,
                ans34: resp.data[2].ans4,
                q4: resp.data[3].title,
                qid4: resp.data[3].id,
                ans41: resp.data[3].ans1,
                ans42: resp.data[3].ans2,
                ans43: resp.data[3].ans3,
                ans44: resp.data[3].ans4
            });
            document.getElementById("head").innerHTML = title;
        });
    }, []);
    const handlechange = (e) => {

        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!id) {
            axios.post("http://localhost:8080/question", [[title], [q1, ans11, ans12, ans13, ans14, a1], [q2, ans21, ans22, ans23, ans24, a2], [q3, ans31, ans32, ans33, ans34, a3], [q4, ans41, ans42, ans43, ans44, a4]])
                .then(() => {
                    setState({ title: "", q1: "", ans11: "", ans12: "", ans13: "", ans14: "", a1: "", q2: "", ans21: "", ans22: "", ans23: "", ans24: "", a2: "", q3: "", ans31: "", ans32: "", ans33: "", ans34: "", a3: "", q4: "", ans41: "", ans42: "", ans43: "", ans44: "", a4: "" });
                })
                .catch((err) => {
                    alert("Error");
                });
        } else {
            axios.post(`http://localhost:8080/results`, { "cat": title, "name": Name, ans: [[qid1, a1], [qid2, a2], [qid3, a3], [qid4, a4]] })
                .then((response) => {
                    alert("Name:" + response.data.name + " Your Score:" + response.data.score + "/" + response.data.total);
                })
                .catch((err) => {
                    alert("Error");
                });
        }
        setTimeout(() => { window.location.href = "/" }, 500);
    }
    return (
        <div className="card addContact">
            <form onSubmit={handleSubmit}>
                <h3 className="heading" id="head">Build your own Quiz</h3>
                <div id="name" className="mb-3 forminput visually-hidden">
                    <label for="Name" className="form-label">Name</label>
                    <input type="text" className="form-control" name="Name"
                        placeholder="Name"
                        value={Name || ""}
                        onChange={handlechange}
                    />
                </div>
                <div id="title" className="mb-3 forminput">
                    <label for="title" className="form-label">Title</label>
                    <input type="text" className="form-control" name="title"
                        placeholder="title"
                        value={title || ""}
                        onChange={handlechange}
                    />
                </div>
                <div class="card">
                    <div className="mb-3 forminput">
                        <label for="q1" className="form-label">Q1</label>
                        <input type="text" className="form-control" name="q1"
                            value={q1 || ""}
                            onChange={handlechange} />
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" onChange={handlechange} name="a1" value={ans11 || ""} />
                        <input type="text" className="form-control" name="ans11"
                            value={ans11 || ""}
                            onChange={handlechange} />
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" onChange={handlechange} name="a1" value={ans12 || ""} />
                        <input type="text" className="form-control" name="ans12"
                            value={ans12 || ""}
                            onChange={handlechange} />
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" onChange={handlechange} name="a1" value={ans13 || ""} />
                        <input type="text" className="form-control" name="ans13"
                            value={ans13 || ""}
                            onChange={handlechange} />
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" onChange={handlechange} name="a1" value={ans14 || ""} />
                        <input type="text" className="form-control" name="ans14"
                            value={ans14 || ""}
                            onChange={handlechange} />
                    </div>
                </div>
                <div class="card">
                    <div className="mb-3 forminput">
                        <label for="q2" className="form-label">Q2</label>
                        <input type="text" className="form-control" name="q2"
                            value={q2 || ""}
                            onChange={handlechange} />
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" onChange={handlechange} name="a2" value={ans21 || ""} />
                        <input type="text" className="form-control" name="ans21"
                            value={ans21 || ""}
                            onChange={handlechange} />
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" onChange={handlechange} name="a2" value={ans22 || ""} />
                        <input type="text" className="form-control" name="ans22"
                            value={ans22 || ""}
                            onChange={handlechange} />
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" onChange={handlechange} name="a2" value={ans23 || ""} />
                        <input type="text" className="form-control" name="ans23"
                            value={ans23 || ""}
                            onChange={handlechange} />
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" onChange={handlechange} name="a2" value={ans24 || ""} />
                        <input type="text" className="form-control" name="ans24"
                            value={ans24 || ""}
                            onChange={handlechange} />
                    </div>
                </div>
                <div class="card">
                    <div className="mb-3 forminput">
                        <label for="q3" className="form-label">Q3</label>
                        <input type="text" className="form-control" name="q3"
                            value={q3 || ""}
                            onChange={handlechange} />
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" onChange={handlechange} name="a3" value={ans31 || ""} />
                        <input type="text" className="form-control" name="ans31"
                            value={ans31 || ""}
                            onChange={handlechange} />
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" onChange={handlechange} name="a3" value={ans32 || ""} />
                        <input type="text" className="form-control" name="ans32"
                            value={ans32 || ""}
                            onChange={handlechange} />
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" onChange={handlechange} name="a3" value={ans33 || ""} />
                        <input type="text" className="form-control" name="ans33"
                            value={ans33 || ""}
                            onChange={handlechange} />
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" onChange={handlechange} name="a3" value={ans34 || ""} />
                        <input type="text" className="form-control" name="ans34"
                            value={ans34 || ""}
                            onChange={handlechange} />
                    </div>
                </div>
                <div class="card">
                    <div className="mb-3 forminput">
                        <label for="q4" className="form-label">Q4</label>
                        <input type="text" className="form-control" name="q4"
                            value={q4 || ""}
                            onChange={handlechange} />
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" onChange={handlechange} name="a4" value={ans41 || ""} />
                        <input type="text" className="form-control" name="ans41"
                            value={ans41 || ""}
                            onChange={handlechange} />
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" onChange={handlechange} name="a4" value={ans42 || ""} />
                        <input type="text" className="form-control" name="ans42"
                            value={ans42 || ""}
                            onChange={handlechange} />
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" onChange={handlechange} name="a4" value={ans43 || ""} />
                        <input type="text" className="form-control" name="ans43"
                            value={ans43 || ""}
                            onChange={handlechange} />
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" onChange={handlechange} name="a4" value={ans44 || ""} />
                        <input type="text" className="form-control" name="ans44"
                            value={ans44 || ""}
                            onChange={handlechange} />
                    </div>
                </div>
                <input type="submit" className="forminput btn btn-outline-dark" value={id ? "Submit" : "Add"} />
            </form>
        </div>
    );
}
export default Build;