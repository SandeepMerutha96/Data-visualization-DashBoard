package com.example.Dashboard.Service;

import com.example.Dashboard.Domain.Board;
import com.example.Dashboard.Repository.BoardRepos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Year;
import java.util.List;
import java.util.Optional;

@Service
public class BoardService {

    @Autowired
    private BoardRepos boardRepos;

    public Board saveDetails(Board board){
        return boardRepos.save(board);
    }

    public List<Board> getDetails(){
        return boardRepos.findAll();
    }

    public Optional<Board> getCompanyDetailsByid(int id){
        return boardRepos.findById(id);
    }

    public List<Board> getYearDetails(int endYear){
        return boardRepos.findByendYear(endYear);
    }
}