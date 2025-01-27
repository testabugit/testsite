package com.buildurskill.buildurskillbackend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.buildurskill.buildurskillbackend.entities.StudentsDetail;

@Repository
public interface InstituteRepository extends JpaRepository<StudentsDetail, Integer> {
    
	
	@Query(value = "SELECT a FROM StudentsDetail a ORDER BY 1 ASC")
	List<StudentsDetail>findAll();
}
