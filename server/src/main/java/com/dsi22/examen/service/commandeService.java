package com.dsi22.examen.service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dsi22.examen.models.articleModel;
import com.dsi22.examen.models.commandeModel;
import com.dsi22.examen.models.detailCmdModel;
import com.dsi22.examen.repository.commandeRepository;
import com.dsi22.examen.repository.detailCmdRepository;

@Service
public class commandeService {
    
    @Autowired
    commandeRepository rep;

    @Autowired
    detailCmdService serviceDet;

    @Autowired
    articleService serviceArt;

    public List<commandeModel> getAll(){
        return rep.findAll();
    }

    public commandeModel getcommande(Long id){
        Optional<commandeModel> ocommande;
        ocommande =rep.findById(id);
        if(ocommande.isPresent()) return ocommande.get();
        else return null;
    }

    public commandeModel addcommande(commandeModel commande){
        commandeModel cmd=new commandeModel();
        cmd =rep.save(commande);
        // articleModel art=new articleModel();

        for(detailCmdModel i : commande.getDetailCmds()){
            // art =serviceArt.getarticle(i.getArticle().getId());
            i.setCommande(cmd);
            serviceDet.adddetailCmd(i);
        }
        return cmd;
    }
 
    public commandeModel updatecommande(commandeModel commande) {
        commandeModel cmd=new commandeModel();
        cmd =rep.save(commande);
        // articleModel art=new articleModel();

        for(detailCmdModel i : commande.getDetailCmds()){
            // art =serviceArt.getarticle(i.getArticle().getId());
            i.setCommande(cmd);
            serviceDet.adddetailCmd(i);
        }
        return cmd;
    }
      
    
    public void deletecommande(long id){
        rep.deleteById(id);
    }
}
