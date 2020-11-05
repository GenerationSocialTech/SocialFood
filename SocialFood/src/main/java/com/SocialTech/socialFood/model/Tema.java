package com.socialTech.socialFood.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.hibernate.annotations.Type;

import com.sun.istack.NotNull;

@Entity
@Table(name = "tema")
public class Tema {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY) //chave primária
		private long id;
	
		@NotNull 
		@Size(min = 5, max= 100) //tamanho 
		private String tema;

		@NotNull
		@Type(type="true_false")
	    @Column(name="ativo")
	    private boolean ativo;
		
		@NotNull
		@Type(type="true_false")
	    @Column(name="perecivel")
		private boolean perecivel;

		public long getId() {
			return id;
		}

		public void setId(long id) {
			this.id = id;
		}

		public String getTema() {
			return tema;
		}

		public void setTema(String tema) {
			this.tema = tema;
		}

		public boolean isAtivo() {
			return ativo;
		}

		public void setAtivo(boolean ativo) {
			this.ativo = ativo;
		}

		public boolean isPerecivel() {
			return perecivel;
		}

		public void setPerecivel(boolean perecivel) {
			this.perecivel = perecivel;
		}

}
