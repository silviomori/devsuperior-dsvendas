package com.technomori.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.technomori.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
