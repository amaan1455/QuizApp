package com.quizapp.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
@Entity
public class Question {
    @Id
    @GeneratedValue
    private int id;
    private String title;
    private String ans1;
    private String ans2;
    private String ans3;
    private String ans4;
    private String ansc;
    private String cat;
    public Question() {
    }
    public Question(String title, String ans1, String ans2, String ans3, String ans4, String ansc, String cat) {
        this.title = title;
        this.ans1 = ans1;
        this.ans2 = ans2;
        this.ans3 = ans3;
        this.ans4 = ans4;
        this.ansc = ansc;
        this.cat = cat;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getAns1() {
        return ans1;
    }
    public void setAns1(String ans1) {
        this.ans1 = ans1;
    }
    public String getAns2() {
        return ans2;
    }
    public void setAns2(String ans2) {
        this.ans2 = ans2;
    }
    public String getAns3() {
        return ans3;
    }
    public void setAns3(String ans3) {
        this.ans3 = ans3;
    }
    public String getAns4() {
        return ans4;
    }
    public void setAns4(String ans4) {
        this.ans4 = ans4;
    }
    public String getAnsc() {
        return ansc;
    }
    public void setAnsc(String ansc) {
        this.ansc = ansc;
    }
    public String getCat() {
        return cat;
    }
    public void setCat(String cat) {
        this.cat = cat;
    }
}