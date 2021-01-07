package com.socialTech.socialFood.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.socialTech.socialFood.model.Postagem;


public interface PostagemRepository extends JpaRepository<Postagem, Long>{
	public List<Postagem> findAllByTituloContainingIgnoreCase(String titulo);
	public List<Postagem> findAllByStatusTrue();
	

}