package com.buildurskill.buildurskillbackend.InstituteServiceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.buildurskill.buildurskillbackend.InstituteService.StudentDetailsService;
import com.buildurskill.buildurskillbackend.bean.ConvertionAdminData;
import com.buildurskill.buildurskillbackend.bean.LeadsAdminData;
import com.buildurskill.buildurskillbackend.bean.OurStudentsAdminData;
import com.buildurskill.buildurskillbackend.entities.StudentsDetail;
import com.buildurskill.buildurskillbackend.repositories.InstituteRepository;

@Service
public class StudentDetailsServiceImplementation implements StudentDetailsService{

	@Autowired
	public InstituteRepository instituteRepository;
	
	@Override
	public String saveStudentsDetails(String name, String phone, String email, String course, String defines, String lookingForDemo) {
        
		StudentsDetail studentsDetail = new StudentsDetail();
		studentsDetail.setStudentsName(name);
		studentsDetail.setStudentsMobileNo(phone);
		studentsDetail.setStudentsEmail(email);
		studentsDetail.setStudentsSelectedCourse(course);
		studentsDetail.setStudentsDefineWell(defines);
		studentsDetail.setStudentsLookingForDemo(lookingForDemo);
        
        
		instituteRepository.saveAndFlush(studentsDetail);
		
		return "Student details saved successfully";
	}

	@Override
	public List<StudentsDetail> getAllLeads() {
		return instituteRepository.findAll();
	}

	@Override
	public List<OurStudentsAdminData> updateOurStudentsDetails(List<OurStudentsAdminData> adminDataList) {
	    List<OurStudentsAdminData> updatedList = new ArrayList<>();

	    for (OurStudentsAdminData adminData : adminDataList) {
	        StudentsDetail existingStudent = instituteRepository.findById(adminData.getStudentsId())
	            .orElseThrow(() -> new RuntimeException("Student not found with ID: " + adminData.getStudentsId()));

	        existingStudent.setStudentsFeesPaid(adminData.getStudentsFeesPaid());
	        existingStudent.setStudentsFeesDue(adminData.getStudentsFeesDue());
	        existingStudent.setStudentsCourseDuration(adminData.getStudentsCourseDuration());

	        StudentsDetail updatedStudent = instituteRepository.save(existingStudent);

	        OurStudentsAdminData updatedAdminData = new OurStudentsAdminData();
	        updatedAdminData.setStudentsId(updatedStudent.getStudentsId());
	        updatedAdminData.setStudentsFeesPaid(updatedStudent.getStudentsFeesPaid());
	        updatedAdminData.setStudentsFeesDue(updatedStudent.getStudentsFeesDue());
	        updatedAdminData.setStudentsCourseDuration(updatedStudent.getStudentsCourseDuration());
	        updatedList.add(updatedAdminData);
	    }

	    return updatedList;
	}

	@Override
	public List<ConvertionAdminData> updateConvertionStudentsDetails(List<ConvertionAdminData> convertionData) {
	    List<ConvertionAdminData> updatedList = new ArrayList<>();

	    for (ConvertionAdminData data : convertionData) {
	        StudentsDetail existingStudent = instituteRepository.findById(data.getStudentId())
	            .orElseThrow(() -> new RuntimeException("Student not found with ID: " + data.getStudentId()));

	        if (data.getDemoStatus() != null) {
	            System.out.println("Updating demo status for ID " + data.getStudentId() + ": " + data.getDemoStatus());
	            existingStudent.setStudentsLookingForDemo(data.getDemoStatus());
	        }
	        if (data.getStatusDemo() != null) {
	            System.out.println("Updating status for ID " + data.getStudentId() + ": " + data.getStatusDemo());
	            existingStudent.setStudentsDemoStatus(data.getStatusDemo());
	        }
	        System.out.println("data.getFeesInformed():: "+data.getFeesInformed());
	        if (data.getFeesInformed() != null) {
	            System.out.println("Updating status for ID " + data.getStudentId() + ": " + data.getFeesInformed());
	            existingStudent.setStudentsFeesInformed(data.getFeesInformed());
	        }

	        StudentsDetail updatedStudent = instituteRepository.save(existingStudent);

	        ConvertionAdminData updatedConvertionData = new ConvertionAdminData();
	        updatedConvertionData.setStudentId(updatedStudent.getStudentsId());
	        updatedConvertionData.setDemoStatus(updatedStudent.getStudentsDemoStatus());
	        updatedConvertionData.setStatusDemo(updatedStudent.getStudentsStatus());
	        updatedConvertionData.setFeesInformed(updatedStudent.getStudentsFeesInformed());

	        updatedList.add(updatedConvertionData);
	    }

	    return updatedList;
	}

	@Override
	public List<LeadsAdminData> updateLeadDetails(List<LeadsAdminData> updatedData) {
		List<LeadsAdminData> updatedList = new ArrayList<>();

	    for (LeadsAdminData data : updatedData) {
	        StudentsDetail existingStudent = instituteRepository.findById(data.getStudentId())
	            .orElseThrow(() -> new RuntimeException("Student not found with ID: " + data.getStudentId()));

	        if (data.getStatus() != null) {
	            System.out.println("Updating status for ID " + data.getStudentId() + ": " + data.getStatus());
	            existingStudent.setStudentsStatus(data.getStatus());
	        }

	        StudentsDetail updatedStudent = instituteRepository.save(existingStudent);

	        LeadsAdminData updatedConvertionData = new LeadsAdminData();
	        updatedConvertionData.setStudentId(updatedStudent.getStudentsId());
	        updatedConvertionData.setStatus(updatedStudent.getStudentsStatus());

	        updatedList.add(updatedConvertionData);
	    }

	    return updatedList;
	}



	
}