# udpclient
This repository contains a UdpServer.java program and a UdpClient.java program.
The Client prompts the user to type sentences and get responses from the server until the user types "Goodbye". It then waits for the server to send the "GOODBYE" message before closing the socket and exiting the program. 

Before testing the program, we made sure that it passed the checkstyle audit.

The program runs with manual input, and by running it with "java MyUdpClient < udp.input". 

## Identifying Information

* Name: Madi Tansy / Marissa Estramonte
* Student ID: 2407282 / 2405291
* Email: tansy@chapman.edu / estramonte@chapman.edu
* Course: CPSC 353
* Assignment: PA02 Udp Client

## Source Files  
* UdpServer.java
* MyUdpClient.java

## References

* Class Notes

## Known Errors

* Server must be manually shut down by typing ^C

## Build Insructions
* javac *.java

## Execution Instructions
* java UdpServer in one terminal
* java MyUdpClient in a second terminal (under a subdirectory)