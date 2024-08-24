package com.test.BackendEduConsultancy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.test.BackendEduConsultancy.model.Feedback;

public interface FeedbackRepo extends JpaRepository<Feedback, Long>{

}
