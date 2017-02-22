package com.insurance.dao;
// here to handling curd opertion based hibernate
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.insurance.entites.InsuranceEntity;

import junit.framework.Assert;

@Repository
@Transactional
public class InsuranceDAO {

	@Autowired
	private SessionFactory sessionFactory; // look at hibernate-contexnt.xml in config file

	protected Session session;// look at hibernate-contexnt.xml in config file

	public Session getSession() {
		return sessionFactory.getCurrentSession();
	}

	public void save(final InsuranceEntity entity) {
		getSession().save(entity); // save

	}

	public InsuranceEntity get(String id) {

		return getSession().get(InsuranceEntity.class, id); // get 1 row
	}

	public List<InsuranceEntity> getAll() { // get all recrods in database
		return getSession().createCriteria(InsuranceEntity.class).list();
	}

}
