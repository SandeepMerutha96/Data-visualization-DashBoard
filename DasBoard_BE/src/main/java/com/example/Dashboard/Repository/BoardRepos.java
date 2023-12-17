package com.example.Dashboard.Repository;

import com.example.Dashboard.Domain.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface BoardRepos extends JpaRepository<Board,Integer> {
//
public List<Board> findByendYear(Integer endYear );
}
