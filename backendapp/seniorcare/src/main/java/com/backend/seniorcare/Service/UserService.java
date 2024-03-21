package com.backend.seniorcare.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.seniorcare.Model.User;
import com.backend.seniorcare.Repository.UserRepo;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;


    public List<User> getAllUsers(){
        return userRepo.findAll();
    }

    public Optional<User> getUserById(Long id){
        return userRepo.findById(id);
    }

    public User createUser(User user){
        return userRepo.save(user);
    }

    public void deleteAll(){
        userRepo.deleteAll();
    }

    public void deleteUser(Long id){
        userRepo.deleteById(id);
    }

    
    
    
}
