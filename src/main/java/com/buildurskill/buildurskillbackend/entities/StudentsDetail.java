package com.buildurskill.buildurskillbackend.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "students_detail", schema = "public")  // Ensure the schema is specified
public class StudentsDetail {
	
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "students_detail_students_id_seq")
    @SequenceGenerator(name = "students_detail_students_id_seq", sequenceName = "students_detail_students_id_seq", allocationSize = 1)
    @Column(name = "students_id")
    private Integer studentsId;

    @Column(name = "students_name", nullable = false, length = 200)
    private String studentsName;

    @Column(name = "students_email")
    private String studentsEmail;

    @Column(name = "students_mobileno")
    private String studentsMobileNo;

    @Column(name = "students_selected_course")
    private String studentsSelectedCourse;

    @Column(name = "students_definewell")
    private String studentsDefineWell;

    @Column(name = "students_demo")
    private String studentsLookingForDemo;
    
    @Column(name = "students_status")
    private String studentsLeadsStatus;
    
    public String getStudentsStatus() {
		return studentsLeadsStatus;
	}

	public void setStudentsStatus(String studentsStatus) {
		this.studentsLeadsStatus = studentsStatus;
	}

	public String getStudentsDemoStatus() {
		return studentsDemoStatus;
	}

	public void setStudentsDemoStatus(String studentsDemoStatus) {
		this.studentsDemoStatus = studentsDemoStatus;
	}

	public String getStudentsFeesInformed() {
		return studentsFeesInformed;
	}

	public void setStudentsFeesInformed(String studentsFeesInformed) {
		this.studentsFeesInformed = studentsFeesInformed;
	}

	public Integer getStudentsFeesDue() {
		return studentsFeesDue;
	}

	public void setStudentsFeesDue(Integer studentsFeesDue) {
		this.studentsFeesDue = studentsFeesDue;
	}

	public Integer getStudentsFeesPaid() {
		return studentsFeesPaid;
	}

	public void setStudentsFeesPaid(Integer studentsFeesPaid) {
		this.studentsFeesPaid = studentsFeesPaid;
	}

	public String getStudentsCourseDuration() {
		return studentsCourseDuration;
	}

	public void setStudentsCourseDuration(String studentsCourseDuration) {
		this.studentsCourseDuration = studentsCourseDuration;
	}

	@Column(name = "students_demo_status")
    private String studentsDemoStatus;
    
    @Column(name = "students_feesinformed")
    private String studentsFeesInformed;
    
    @Column(name = "students_fees_due")
    private Integer studentsFeesDue;
    
    @Column(name = "students_fees_paid")
    private Integer studentsFeesPaid;
    
    @Column(name = "students_course_duration")
    private String studentsCourseDuration;
    

    // Getters and Setters
    public Integer getStudentsId() {
        return studentsId;
    }

    public void setStudentsId(Integer studentsId) {
        this.studentsId = studentsId;
    }

    public String getStudentsName() {
        return studentsName;
    }

    public void setStudentsName(String studentsName) {
        this.studentsName = studentsName;
    }

    public String getStudentsEmail() {
        return studentsEmail;
    }

    public void setStudentsEmail(String studentsEmail) {
        this.studentsEmail = studentsEmail;
    }

    public String getStudentsMobileNo() {
        return studentsMobileNo;
    }

    public void setStudentsMobileNo(String studentsMobileNo) {
        this.studentsMobileNo = studentsMobileNo;
    }

    public String getStudentsSelectedCourse() {
        return studentsSelectedCourse;
    }

    public void setStudentsSelectedCourse(String studentsSelectedCourse) {
        this.studentsSelectedCourse = studentsSelectedCourse;
    }

    public String getStudentsDefineWell() {
        return studentsDefineWell;
    }

    public void setStudentsDefineWell(String studentsDefineWell) {
        this.studentsDefineWell = studentsDefineWell;
    }

    public String getStudentsLookingForDemo() {
        return studentsLookingForDemo;
    }

    public void setStudentsLookingForDemo(String studentsDemo) {
        this.studentsLookingForDemo = studentsDemo;
    }
}
