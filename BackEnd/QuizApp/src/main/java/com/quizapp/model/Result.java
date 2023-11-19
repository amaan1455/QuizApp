package com.quizapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
@Entity
public class Result {
    @Id
    @GeneratedValue
    private int id;
    private String cat;
    private String name;
    private int score;
    private int total;
    public Result(String cat, String name, int score, int total) {
        this.cat = cat;
        this.name = name;
        this.score = score;
        this.total = total;
    }
    public Result() {
    }
    public String getCat() {
        return cat;
    }
    public void setCat(String cat) {
        this.cat = cat;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getScore() {
        return score;
    }
    public void setScore(int score) {
        this.score = score;
    }
    public int getTotal() {
        return total;
    }
    public void setTotal(int total) {
        this.total = total;
    }
}