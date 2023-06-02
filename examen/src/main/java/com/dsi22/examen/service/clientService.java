package com.dsi22.examen.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import com.dsi22.examen.models.clientModel;
import com.dsi22.examen.models.commandeModel;
import com.dsi22.examen.repository.clientRepository;

@Service
public class clientService {
    
    @Autowired
    clientRepository rep;
    public List<clientModel> getAll(){
        return rep.findAll();
    }

    public clientModel getclient(Long id){
        Optional<clientModel> oClient;
        oClient =rep.findById(id);
        if(oClient.isPresent()) return oClient.get();
        else return null;
    }

    public clientModel addclient(clientModel client){
        return rep.save(client);
     }
 
     public clientModel updateclient(clientModel client){
        Optional<clientModel> existingClient;
        existingClient =rep.findById(client.getId());
        if(existingClient.isPresent()){
        clientModel updatedclient=existingClient.get();
        updatedclient.setNom(client.getNom());
        updatedclient.setPrenom(client.getPrenom());
        updatedclient.setAdresse(client.getAdresse());
        updatedclient.setTelephone(client.getTelephone());

        Set<commandeModel> existingCommandes = updatedclient.getCommandes();

        for (commandeModel commande : existingCommandes) {
            commande.setClient(updatedclient);
        }

      
        clientModel savedClient = rep.save(updatedclient);
        // commandeRepository.saveAll(existingCommandes);

        return savedClient;
        //  return rep.save(client);
    }else{
        return client;
    }
      }
      public void deleteclient(long id){
         rep.deleteById(id);
      }
}
