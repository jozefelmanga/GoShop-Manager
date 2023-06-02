package com.dsi22.examen.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "detailCmd")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
public class detailCmdModel {
    
    @jakarta.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int quantite;

    @ManyToOne
    commandeModel commande;

    @ManyToOne
    articleModel article;


    public commandeModel getCommande() {
        return this.commande;
    }

    public void setCommande(commandeModel commande) {
        this.commande = commande;
    }

    public articleModel getArticle() {
        return this.article;
    }

    public void setArticle(articleModel article) {
        this.article = article;
    }

    
    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getQuantite() {
        return this.quantite;
    }

    public void setQuantite(int quantite) {
        this.quantite = quantite;
    }
    
}
