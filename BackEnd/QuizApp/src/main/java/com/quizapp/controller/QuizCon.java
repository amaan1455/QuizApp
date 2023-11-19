package com.quizapp.controller;
import com.quizapp.model.Question;
import com.quizapp.model.Response;
import com.quizapp.model.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.quizapp.repository.QR;
import com.quizapp.repository.RR;
import java.util.Arrays;
import java.util.List;
@RestController
@CrossOrigin("http://localhost:3000")
public class QuizCon {
    @Autowired
    private QR qr;
    @Autowired
    private RR rr;
    @GetMapping("/cat")
    public List<String> getCat() {
        return qr.getCat();
    }
    @PostMapping("/question")
    public void saveQue(@RequestBody String[][] que) {
        for (String[] arr : que) System.out.println(Arrays.toString(arr));
        String title = "";
        for (String[] arr : que) {
            if (arr.length == 1) title = arr[0];
            else qr.save(new Question(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], title));
        }
    }
    @GetMapping("/questions/{cat}")
    public List<Question> getQuesCat(@PathVariable String cat) {
        return qr.findBycat(cat);
    }
    @GetMapping("/results")
    public List<Result> getResults() {
        return rr.findAll();
    }
    @PostMapping("/results")
    public Result getResult(@RequestBody Response res) {
        int score = 0;
        int total = 0;
        for (String[] arr : res.ans) {
            int qid = Integer.parseInt(arr[0]);
            String ansc = rr.findAnsc(qid);
            if (ansc.equals(arr[1])) score++;
            total++;
        }
        Result temp = new Result(res.cat, res.name, score, total);
        rr.save(temp);
        System.out.println(temp);
        return temp;
    }
}