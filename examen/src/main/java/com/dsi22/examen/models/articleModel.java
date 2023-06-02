package com.dsi22.examen.models;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "article")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
public class articleModel {
    
    @jakarta.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String Code;
    private String Libelle;
    private int qteStock;

    @OneToMany(cascade =CascadeType.ALL, mappedBy="article")
    @JsonIgnore
    private Set<detailCmdModel> detailCmds;


    public Set<detailCmdModel> getDetailCmds() {
        return this.detailCmds;
    }

    public void setDetailCmds(Set<detailCmdModel> detailCmds) {
        this.detailCmds = detailCmds;
    }
    
    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return this.Code;
    }

    public void setCode(String Code) {
        this.Code = Code;
    }

    public String getLibelle() {
        return this.Libelle;
    }

    public void setLibelle(String Libelle) {
        this.Libelle = Libelle;
    }

    public int getQteStock() {
        return this.qteStock;
    }

    public void setQteStock(int qteStock) {
        this.qteStock = qteStock;
    }

}
