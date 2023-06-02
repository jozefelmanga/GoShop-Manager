package com.dsi22.examen.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dsi22.examen.models.detailCmdModel;

public interface detailCmdRepository  extends JpaRepository<detailCmdModel , Long>{
    
}
