package com.dsi22.examen.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dsi22.examen.models.detailCmdModel;
import com.dsi22.examen.service.detailCmdService;

@RestController
@CrossOrigin("http://localhost:3000")
public class detailCmdController {
    

    @Autowired
    detailCmdService service;

    // @RequestMapping("/detailCmds")
    @RequestMapping(value = "/detailCmd/detailCmds", method = RequestMethod.GET)
    List<detailCmdModel> getAll() {
        return service.getAll();
    }

    // @RequestMapping(value="/users/{id}",method= RequestMethod.GET)
    // userModel getuserbyid(@PathVariable Long id){
    // return service.getuser(id);
    // }

    @RequestMapping(value = "/detailCmd/getdetailCmd", method = RequestMethod.GET)
    detailCmdModel getdetailCmdbyid(@RequestParam Long id) {
        return service.getdetailCmd(id);
    }

    @RequestMapping(value = "/detailCmd/adddetailCmd", method = RequestMethod.POST)
    detailCmdModel adddetailCmd(@RequestBody detailCmdModel detailCmd) {
        return service.adddetailCmd(detailCmd);
    }

    @RequestMapping(value = "/detailCmd/updatedetailCmd", method = RequestMethod.POST)
    detailCmdModel updatedetailCmd(@RequestBody detailCmdModel detailCmd) {
        return service.updatedetailCmd(detailCmd);
    }

    @RequestMapping(value = "/detailCmd/deletedetailCmd", method = RequestMethod.DELETE)
    String deletedetailCmd(@RequestParam Long id) {
        service.deletedetailCmd(id);
        return "delete succeeded";
    }
}
