package com.roundtriproundtable;
import static spark.Spark.*; 

/**
 * Hello world!
 */
public class App {
    public static void main(String[] args) {
        port(8080);
        get("/status", (req, res) -> "Backend is alive!");
        System.out.println("Server started at http://localhost:8080/status");
    }
}
