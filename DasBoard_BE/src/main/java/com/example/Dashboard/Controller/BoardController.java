package com.example.Dashboard.Controller;

import com.example.Dashboard.Domain.Board;
import com.example.Dashboard.Service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins= {"*"}, maxAge = 4800, allowCredentials = "false" )
@RestController
@RequestMapping("/api")
public class BoardController {

@Autowired
    private BoardService boardService;


@PostMapping("/addData")
    public Board postDetails(@RequestBody Board board){
    return boardService.saveDetails(board);
}
@GetMapping("/getData")
    public List<Board> GetDetails(){
    return boardService.getDetails();
}

@GetMapping("/Year/{endYear}")
public  List<Board>GetYearDetails(@PathVariable int endYear){
    return  boardService.getYearDetails(endYear);
}

    @GetMapping("/getCompanyDetailsByid/{id}")
    public Optional<Board> GetDetails(@PathVariable int id){
        return boardService.getCompanyDetailsByid(id);
    }
}
