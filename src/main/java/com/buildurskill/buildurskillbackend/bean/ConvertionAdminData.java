package com.buildurskill.buildurskillbackend.bean;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConvertionAdminData {

	private Integer studentId;

    @JsonProperty("studentsDemo")
    private String demoStatus;

    @JsonProperty("studentsDemoStatus")
    private String statusDemo;

    @JsonProperty("studentsFeesInformed")
    private String feesInformed;
	
	public Integer getStudentId() {
		return studentId;
	}
	public void setStudentId(Integer StudentId) {
		this.studentId = StudentId;
	}
	public String getDemoStatus() {
		return demoStatus;
	}
	public void setDemoStatus(String demoStatus) {
		this.demoStatus = demoStatus;
	}
	public String getStatusDemo() {
		return statusDemo;
	}
	public void setStatusDemo(String status) {
		this.statusDemo = status;
	}
	public String getFeesInformed() {
		return feesInformed;
	}
	public void setFeesInformed(String feesInformed) {
		this.feesInformed = feesInformed;
	}
	
	
}
