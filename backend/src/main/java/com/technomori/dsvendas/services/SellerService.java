package com.technomori.dsvendas.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.technomori.dsvendas.dto.SellerDTO;
import com.technomori.dsvendas.entities.Seller;
import com.technomori.dsvendas.repositories.SellerRepository;

@Service
public class SellerService {

	@Autowired
	private SellerRepository repository;

	public List<SellerDTO> findAll() {
		List<Seller> result = repository.findAll();
		return result.stream().map(seller -> new SellerDTO(seller))
			.collect(Collectors.toList());
	}

}
