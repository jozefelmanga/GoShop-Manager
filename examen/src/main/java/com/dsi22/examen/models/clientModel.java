package com.dsi22.examen.models;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;


@Entity
@Table(name = "Client")
// @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
public class clientModel {
    

    @jakarta.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String Nom;
    private String Prenom;
    private String Adresse;
    @Column(unique = true)
    private Long Telephone;

    @OneToMany(cascade =CascadeType.ALL, mappedBy="client")
    @JsonIgnore
    private Set<commandeModel> commandes;

    public Set<commandeModel> getCommandes() {
        return this.commandes;
    }

    public void setCommandes(Set<commandeModel> commandes) {
        this.commandes = commandes;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return this.Nom;
    }

    public void setNom(String Nom) {
        this.Nom = Nom;
    }

    public String getPrenom() {
        return this.Prenom;
    }

    public void setPrenom(String Prenom) {
        this.Prenom = Prenom;
    }

    public String getAdresse() {
        return this.Adresse;
    }

    public void setAdresse(String Adresse) {
        this.Adresse = Adresse;
    }

    public Long getTelephone() {
        return this.Telephone;
    }

    public void setTelephone(Long Telephone) {
        this.Telephone = Telephone;
    }

}
