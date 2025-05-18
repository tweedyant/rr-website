package com.roundtriproundtable;
import static spark.Spark.*; 

/**
 * Hello world!
 */
public class App {
    public static void main(String[] args) {
        port(8000)
        get("/status", (req, res) -> "backend is alive!")
        System.out.println("Hello World!");
    }
}
