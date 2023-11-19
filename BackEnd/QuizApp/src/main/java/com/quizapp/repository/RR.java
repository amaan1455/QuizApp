package com.quizapp.repository;
import com.quizapp.model.Result;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
public interface RR extends JpaRepository<Result, Integer> {
    @Query(value = "select ansc from Question where id=?1", nativeQuery = true)
    String findAnsc(int qid);
}