package com.dsi22.examen.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dsi22.examen.models.commandeModel;
import com.dsi22.examen.service.commandeService;

@RestController
@CrossOrigin("http://localhost:3000")
public class commandeController {
    

    @Autowired
    commandeService service;

    // @RequestMapping("/commandes")
    @RequestMapping(value = "/commande/commandes", method = RequestMethod.GET)
    List<commandeModel> getAll() {
        return service.getAll();
    }

    // @RequestMapping(value="/users/{id}",method= RequestMethod.GET)
    // userModel getuserbyid(@PathVariable Long id){
    // return service.getuser(id);
    // }

    @RequestMapping(value = "/commande/getcommande", method = RequestMethod.GET)
    commandeModel getcommandebyid(@RequestParam Long id) {
        return service.getcommande(id);
    }

    @RequestMapping(value = "/commande/addcommande", method = RequestMethod.POST)
    commandeModel addcommande(@RequestBody commandeModel commande) {
        // user.setFirstName("oumayma");
        // user.setLastName("zayet");
        // service.adduser(user);
        // System.out.print("user added succesfuly");
        return service.addcommande(commande);
    }

    @RequestMapping(value = "/commande/updatecommande", method = RequestMethod.POST)
    commandeModel updatecommande(@RequestBody commandeModel commande) {
        return service.updatecommande(commande);
    }

    @RequestMapping(value = "/commande/deletecommande", method = RequestMethod.DELETE)
    String deletecommande(@RequestParam Long id) {
        service.deletecommande(id);
        return "delete succeeded";
    }
}
