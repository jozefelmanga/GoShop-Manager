package com.dsi22.examen.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dsi22.examen.models.commandeModel;

public interface commandeRepository  extends JpaRepository<commandeModel , Long>{
    
}
