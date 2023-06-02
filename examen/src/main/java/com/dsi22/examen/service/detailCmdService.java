package com.dsi22.examen.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dsi22.examen.models.detailCmdModel;
import com.dsi22.examen.repository.detailCmdRepository;

@Service
public class detailCmdService {
    
    @Autowired
    detailCmdRepository rep;
    public List<detailCmdModel> getAll(){
        return rep.findAll();
    }

    public detailCmdModel getdetailCmd(Long id){
        Optional<detailCmdModel> odetailCmd;
        odetailCmd =rep.findById(id);
        if(odetailCmd.isPresent()) return odetailCmd.get();
        else return null;
    }

    public detailCmdModel adddetailCmd(detailCmdModel detailCmd){
        return rep.save(detailCmd);
    }
 
    public detailCmdModel updatedetailCmd(detailCmdModel detailCmd){
        return rep.save(detailCmd);
    }
    
    public void deletedetailCmd(long id){
        rep.deleteById(id);
    }

}
