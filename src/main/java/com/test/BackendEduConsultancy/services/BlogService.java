package com.test.BackendEduConsultancy.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.BackendEduConsultancy.model.Blog;
import com.test.BackendEduConsultancy.repository.BlogRepository;


@Service
public class BlogService {
	@Autowired 
	BlogRepository repo ;
	
	public Blog saveComment(Blog blog) {
		return repo.save(blog);
	}

}
