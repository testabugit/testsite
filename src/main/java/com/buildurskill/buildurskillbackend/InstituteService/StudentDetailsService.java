package com.buildurskill.buildurskillbackend.InstituteService;

import java.util.List;

import com.buildurskill.buildurskillbackend.bean.ConvertionAdminData;
import com.buildurskill.buildurskillbackend.bean.LeadsAdminData;
import com.buildurskill.buildurskillbackend.bean.OurStudentsAdminData;
import com.buildurskill.buildurskillbackend.entities.StudentsDetail;

public interface StudentDetailsService {
	
    String saveStudentsDetails(String name, String phone, String email, String course, String Defines, String LookingForDemo);

    List<StudentsDetail> getAllLeads();
    
    List<OurStudentsAdminData> updateOurStudentsDetails(List<OurStudentsAdminData> adminData);
    
    List<ConvertionAdminData> updateConvertionStudentsDetails(List<ConvertionAdminData> convertionData);

	List<LeadsAdminData> updateLeadDetails(List<LeadsAdminData> updatedData);
}
