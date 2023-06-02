package com.dsi22.examen.models;

import java.util.Date;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "commande")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
public class commandeModel {
    
    @jakarta.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String NumCmd;
    private Date dateCmd;

    @ManyToOne
    // @JsonBackReference
    clientModel client;

    @OneToMany(cascade =CascadeType.ALL, mappedBy="commande")
    private Set<detailCmdModel> detailCmds;


    public Set<detailCmdModel> getDetailCmds() {
        return this.detailCmds;
    }

    public void setDetailCmds(Set<detailCmdModel> detailCmds) {
        this.detailCmds = detailCmds;
    }
    
    public clientModel getClient() {
        return this.client;
    }

    public void setClient(clientModel client) {
        this.client = client;
    }
    
    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNumCmd() {
        return this.NumCmd;
    }

    public void setNumCmd(String NumCmd) {
        this.NumCmd = NumCmd;
    }

    public Date getDateCmd() {
        return this.dateCmd;
    }

    public void setDateCmd(Date dateCmd) {
        this.dateCmd = dateCmd;
    }
    

}
