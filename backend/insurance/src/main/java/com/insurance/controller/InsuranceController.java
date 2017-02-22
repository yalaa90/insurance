package com.insurance.controller;

// handling routing 
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.insurance.dao.InsuranceDAO;
import com.insurance.entites.InsuranceEntity;
import com.insurance.response.SuccessResponse;

@RestController // make it just api not mvc
@RequestMapping
public class InsuranceController {

	@Autowired
	InsuranceDAO insuranceDAO;

	@RequestMapping(value = "save", method = RequestMethod.POST)
	public SuccessResponse save(@RequestBody InsuranceEntity entity) {

		insuranceDAO.save(entity); // save

		return new SuccessResponse(true);
	}

	@RequestMapping(value = "all", method = RequestMethod.GET)
	public SuccessResponse<List<InsuranceEntity>> getAll() {
		// get
		return new SuccessResponse(insuranceDAO.getAll());
	}
}