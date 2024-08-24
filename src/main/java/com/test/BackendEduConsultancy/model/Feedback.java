package com.test.BackendEduConsultancy.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(	name = "feedback")
public class Feedback {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	@Size(max = 20)
	private String name;
	
	@NotBlank
	@Size(max = 50)
	private String emailId;
	@NotBlank
	@Size(max = 50)
	private String phoneNumber;
	
	@NotBlank
	@Size(max = 1000)
	private String feedback;
	
	
	
	
	public Feedback(){
		
	}

	
	
	
	
	public Feedback(Long id,  String name,  String emailId,
			 String phoneNumber,  String feedback) {
		super();
		this.id = id;
		this.name = name;
		this.emailId = emailId;
		this.phoneNumber = phoneNumber;
		this.feedback = feedback;
	}





	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}
	
	

}
