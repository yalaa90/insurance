package com.insurance.service;

// here where the business logic is handling so the reason why i have service bean is loosely coupling 
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.insurance.dao.InsuranceDAO;
import com.insurance.entites.InsuranceEntity;

import junit.framework.Assert;

@Service
public class InsuranceService {

	@Autowired
	InsuranceDAO insuranceDAO;

	public void save(InsuranceEntity entity) {
		insuranceDAO.save(entity);
	}

	public InsuranceEntity get(String id) {
		return insuranceDAO.get(id);
	}

	public List<InsuranceEntity> getAll() {
		return insuranceDAO.getAll();
	}
}
