package com.dsi22.examen.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dsi22.examen.models.articleModel;
import com.dsi22.examen.service.articleService;

@RestController
@CrossOrigin("http://localhost:3000")
public class articleController {
    

    @Autowired
    articleService service;

    // @RequestMapping("/articles")
    @RequestMapping(value = "/article/articles", method = RequestMethod.GET)
    List<articleModel> getAll() {
        return service.getAll();
    }

    // @RequestMapping(value="/users/{id}",method= RequestMethod.GET)
    // userModel getuserbyid(@PathVariable Long id){
    // return service.getuser(id);
    // }

    @RequestMapping(value = "/article/getarticle", method = RequestMethod.GET)
    articleModel getarticlebyid(@RequestParam Long id) {
        return service.getarticle(id);
    }
 
    @RequestMapping(value = "/article/addarticle", method = RequestMethod.POST)
    articleModel addarticle(@RequestBody articleModel article) {
        // user.setFirstName("oumayma");
        // user.setLastName("zayet");
        // service.adduser(user);
        // System.out.print("user added succesfuly");
        return service.addarticle(article);
    }

    @RequestMapping(value = "/article/updatearticle", method = RequestMethod.POST)
    articleModel updatearticle(@RequestBody articleModel article) {
        return service.updatearticle(article);
    }

    @RequestMapping(value = "/article/deletearticle", method = RequestMethod.DELETE)
    String deletearticle(@RequestParam Long id) {
        service.deletearticle(id);
        return "delete succeeded";
    }
}
