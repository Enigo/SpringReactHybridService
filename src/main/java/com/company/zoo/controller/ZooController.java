package com.company.zoo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping(path = "/zoo")
public class ZooController {

    @GetMapping(path = "/all")
    public Collection<String> getAnimals() {
        return List.of("Panda", "Koala", "Galago");
    }
}