package com.test.controllers.core;

import java.io.Serializable;

/**
 * 
 * @author Yahia
 *
 */
public abstract class BaseResponse<H extends Serializable, D extends Object> implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -3584010602891575844L;

	private Boolean success;
	private H errorHeader ;
	private D errorDetails  ;
	
	/**
	 * @param success
	 */
	public BaseResponse(Boolean success) {
		super();
		this.success = success;
	}
	
	public BaseResponse(Boolean success , H errorHeader) {
		this(success);
		this.errorHeader = errorHeader ;
	}
	
	public BaseResponse(Boolean success , D errorDetails) {
		this(success);
		this.errorDetails = errorDetails ;
	}
	
	public BaseResponse(Boolean success , H errorHeader , D errorDetails) {
		this(success , errorHeader);
		this.errorDetails = errorDetails ;
	}

	public Boolean getSuccess() {
		return success;
	}

	public void setSuccess(Boolean success) {
		this.success = success;
	}

	public H getErrorHeader() {
		return errorHeader;
	}

	public D getErrorDetails() {
		return errorDetails;
	}

	public void setErrorHeader(H errorHeader) {
		this.errorHeader = errorHeader;
	}

	public void setErrorDetails(D errorDetails) {
		this.errorDetails = errorDetails;
	}


}
