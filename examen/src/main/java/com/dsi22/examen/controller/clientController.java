package com.dsi22.examen.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dsi22.examen.models.clientModel;
import com.dsi22.examen.models.commandeModel;
import com.dsi22.examen.service.clientService;

@RestController
@CrossOrigin("http://localhost:3000")
public class clientController {
    

    @Autowired
    clientService service;

    // @RequestMapping("/clients")
    @RequestMapping(value = "/client/clients", method = RequestMethod.GET)
    List<clientModel> getAll() {
        return service.getAll();
    }

    // @RequestMapping(value="/users/{id}",method= RequestMethod.GET)
    // userModel getuserbyid(@PathVariable Long id){
    // return service.getuser(id);
    // }

    @RequestMapping(value = "/client/getclient", method = RequestMethod.GET)
    clientModel getclientbyid(@RequestParam Long id) {
        return service.getclient(id);
    }

    @RequestMapping(value = "/client/getcmdClient", method = RequestMethod.GET)
    private Set<commandeModel>  getCmdOfClient(@RequestParam Long id) {
        clientModel clt=service.getclient(id);
        return clt.getCommandes();
    }

    @RequestMapping(value = "/client/addclient", method = RequestMethod.POST)
    clientModel addclient(@RequestBody clientModel client) {
        // user.setFirstName("oumayma");
        // user.setLastName("zayet");
        // service.adduser(user);
        // System.out.print("user added succesfuly");
        return service.addclient(client);
    }

    @RequestMapping(value = "/client/updateclient", method = RequestMethod.POST)
    clientModel updateclient(@RequestBody clientModel client) {
        return service.updateclient(client);
    }

    @RequestMapping(value = "/client/deleteclient", method = RequestMethod.DELETE)
    String deleteclient(@RequestParam Long id) {
        service.deleteclient(id);
        return "delete succeeded";
    }
}
