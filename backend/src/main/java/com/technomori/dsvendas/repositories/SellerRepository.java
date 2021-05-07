package com.technomori.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.technomori.dsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
