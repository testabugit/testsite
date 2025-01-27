package com.buildurskill.buildurskillbackend.bean;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LeadsAdminData {
	
    @JsonProperty("studentId")
    private Integer studentId;

    @JsonProperty("studentsStatus")
    private String status;

    public Integer getStudentId() {
        return studentId;
    }

    public void setStudentId(Integer studentId) {
        this.studentId = studentId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
