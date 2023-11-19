package com.quizapp.repository;
import com.quizapp.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
public interface QR extends JpaRepository<Question, Integer> {
    @Query(value = "select distinct cat from Question", nativeQuery = true)
    public List<String> getCat();
    List<Question> findBycat(String cat);
}