package com.buildurskill.buildurskillbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.buildurskill.buildurskillbackend.InstituteService.StudentDetailsService;
import com.buildurskill.buildurskillbackend.bean.ConvertionAdminData;
import com.buildurskill.buildurskillbackend.bean.LeadsAdminData;
import com.buildurskill.buildurskillbackend.bean.OurStudentsAdminData;
import com.buildurskill.buildurskillbackend.entities.StudentsDetail;

@RestController
@RequestMapping("/api/institute")
public class InstituteController {

	@Autowired
	StudentDetailsService studentDetailsService;
	
	
	
	@GetMapping("/")
    public String loadDefaultPage() {
        return "forward:/main.html";
    }
	
	@PostMapping("/studentinformation")
	public String saveStudentDetails(@RequestParam String studentName, @RequestParam String studentPhone, @RequestParam String studentEmail, @RequestParam String studentCourse,
			@RequestParam String studentsDefineWell, @RequestParam String studentsLookingForDemo) {
		System.out.println("Students Detail ::::: "+studentName + " , " +studentPhone+ " , "+studentEmail+ " , "+studentCourse+ " , "+ studentsDefineWell +", "+studentsLookingForDemo);
		
		try {
            String instituteDetails = studentDetailsService.saveStudentsDetails(studentName,studentPhone,studentEmail,studentCourse,studentsDefineWell,studentsLookingForDemo);
            return instituteDetails;
        } catch (Exception e) {return  e.getMessage();}
        
	}
	
	@GetMapping("/getleads")
    public List<StudentsDetail> getLeadsOfStudents() {
        return studentDetailsService.getAllLeads();
    }
	
	@PostMapping("/updateOurStudentsDetails")
	public String updateStudentDetails(@RequestBody List<OurStudentsAdminData> adminData) {
		try {
			List<OurStudentsAdminData> admin = studentDetailsService.updateOurStudentsDetails(adminData);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return "Our Students Data Updated Successfully!!!";
	}
	
	@PostMapping("/updateAllConversionDetails")
	public String updateAllConversionDetails(@RequestBody List<ConvertionAdminData> updatedData) {
	    try {
	    	List<ConvertionAdminData> admin = studentDetailsService.updateConvertionStudentsDetails(updatedData);
	    } catch (Exception e) {
	        e.printStackTrace();
	    }
	    return "Conversion details updated successfully!";
	}

	@PostMapping("/updateLeadDetails")
	public String updateLeadDetails(@RequestBody List<LeadsAdminData> updatedData) {
	    try {
	    	List<LeadsAdminData> admin = studentDetailsService.updateLeadDetails(updatedData);
	    } catch (Exception e) {
	        e.printStackTrace();
	    }
	    return "Conversion details updated successfully!";
	}

}
