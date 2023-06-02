package com.dsi22.examen.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dsi22.examen.models.articleModel;
import com.dsi22.examen.models.detailCmdModel;
import com.dsi22.examen.repository.articleRepository;

@Service
public class articleService {
    
    @Autowired
    articleRepository rep;

    @Autowired
    detailCmdService servicedet;
    public List<articleModel> getAll(){
        return rep.findAll();
    }

    public articleModel getarticle(Long id){
        Optional<articleModel> oarticle;
        oarticle =rep.findById(id);
        if(oarticle.isPresent()) return oarticle.get();
        else return null;
    }

    public articleModel addarticle(articleModel article){
        return rep.save(article);
     }
 
    public articleModel updatearticle(articleModel article){
        Optional<articleModel> existingarticle;
        existingarticle =rep.findById(article.getId());
        if(existingarticle.isPresent()){
        articleModel updatedarticle=existingarticle.get();
        updatedarticle.setCode(article.getCode());
        updatedarticle.setLibelle(article.getLibelle());
        updatedarticle.setQteStock(article.getQteStock());

        // Step 2: Retrieve existing associated commande entities
        Set<detailCmdModel> existingDetails = updatedarticle.getDetailCmds();

        // Step 3: Update foreign key reference in each commande entity
        for (detailCmdModel detail : existingDetails) {
            detail.setArticle(updatedarticle);
        }

        // Step 4: Save the updated article and modified commande entities
        articleModel savedarticle = rep.save(updatedarticle);
        // commandeRepository.saveAll(existingCommandes);

        return savedarticle;
        //  return rep.save(article);
    }else{
        return article;
    }
    }


    public void deletearticle(long id){
        rep.deleteById(id);
    }
}
