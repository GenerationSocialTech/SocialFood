package com.socialTech.socialFood.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.socialTech.socialFood.model.Tema;

public interface TemaRepository extends JpaRepository<Tema, Long> {

	public List<Tema> findAllByTemaContainingIgnoreCase(String tema);

	public List<Tema> findAllByAtivoTrue();
}
