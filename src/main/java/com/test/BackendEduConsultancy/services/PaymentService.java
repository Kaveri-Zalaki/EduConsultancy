package com.test.BackendEduConsultancy.services;

import org.springframework.stereotype.Service;

import com.test.BackendEduConsultancy.model.PaymentCallback;
import com.test.BackendEduConsultancy.model.PaymentDetail;

@Service
public interface PaymentService {
	public PaymentDetail proceedPayment(PaymentDetail paymentDetail);
	public 	String payuCallback(PaymentCallback paymentResponse);	
}
