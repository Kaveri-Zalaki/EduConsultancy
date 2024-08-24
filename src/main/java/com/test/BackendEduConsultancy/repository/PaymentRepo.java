package com.test.BackendEduConsultancy.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.test.BackendEduConsultancy.entity.Payment;

@Repository
public interface PaymentRepo extends CrudRepository<Payment, Integer> {

    Payment findByTxnId(String txnId);
}