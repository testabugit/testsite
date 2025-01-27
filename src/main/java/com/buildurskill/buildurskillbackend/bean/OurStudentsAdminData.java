package com.buildurskill.buildurskillbackend.bean;

public class OurStudentsAdminData {

	private Integer studentsId;
    private Integer studentsFeesPaid;
    private Integer studentsFeesDue;
    private String studentsCourseDuration;

    // Getters and setters
    public Integer getStudentsId() {
        return studentsId;
    }

    public void setStudentsId(Integer studentsId) {
        this.studentsId = studentsId;
    }

    public Integer getStudentsFeesPaid() {
        return studentsFeesPaid;
    }

    public void setStudentsFeesPaid(Integer studentsFeesPaid) {
        this.studentsFeesPaid = studentsFeesPaid;
    }

    public Integer getStudentsFeesDue() {
        return studentsFeesDue;
    }

    public void setStudentsFeesDue(Integer studentsFeesDue) {
        this.studentsFeesDue = studentsFeesDue;
    }

    public String getStudentsCourseDuration() {
        return studentsCourseDuration;
    }

    public void setStudentsCourseDuration(String studentsCourseDuration) {
        this.studentsCourseDuration = studentsCourseDuration;
    }
	
}
