package com.test.BackendEduConsultancy.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.BackendEduConsultancy.model.Feedback;
import com.test.BackendEduConsultancy.repository.FeedbackRepo;



@Service
public class FeedbackService {
	
	@Autowired 
	FeedbackRepo repo ;
	
	public Feedback saveFeedback(Feedback feedback) {
		return repo.save(feedback);
	}

}
