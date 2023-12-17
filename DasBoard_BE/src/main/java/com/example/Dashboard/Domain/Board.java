package com.example.Dashboard.Domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="cpd")
public class Board {
    @Id
    private int id;
    private int endYear;
    private int intensity;
    private int relevance;
    private int likelihood;
    private String topic;
    private String region;
    private String city;
    private String country;

    private String citylng ;
    private String citylat ;
    private String sector;
    private String insight ;
    private String  swot ;
    private String url;
    private int start_year ;
    private String impact ;
    private String added ;
    private String published;
    private String pestle ;
    private String source ;
    private String title;
}
