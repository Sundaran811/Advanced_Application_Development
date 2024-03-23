package com.backend.seniorcare.Repository;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.seniorcare.Model.User;


public interface UserRepo extends JpaRepository<User,Long>{

    Optional<User> findByEmail(String username);
    
    


    
}
