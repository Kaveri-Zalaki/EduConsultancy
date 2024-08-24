package com.test.BackendEduConsultancy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.test.BackendEduConsultancy.model.Contact;



public interface ContactRepository extends JpaRepository<Contact, Long>{
	

}
