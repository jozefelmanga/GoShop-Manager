package com.dsi22.examen.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dsi22.examen.models.clientModel;

public interface clientRepository extends JpaRepository<clientModel , Long>{
    
}
