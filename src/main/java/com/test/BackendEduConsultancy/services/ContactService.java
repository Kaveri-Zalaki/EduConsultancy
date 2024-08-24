package com.test.BackendEduConsultancy.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.BackendEduConsultancy.model.Contact;
import com.test.BackendEduConsultancy.repository.ContactRepository;

@Service
public class ContactService {
	@Autowired 
	ContactRepository repo ;
	
	public Contact saveResponse(Contact contact) {
		return repo.save(contact);
	}

}
