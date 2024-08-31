# CTF Writeup for Fawn on HTB platform

### Briefing:
This is a CTF writeup done in a sandbox provided by HTB platform. The vulnerable VM is provided by HTB.

The flag was captured using nmap for recon, and ftp exploit for fetching the flag from the server.

### Phase 01 Reconnaissance
nmap for host recon & scanning.

Determine which port is open using : ```nmap -sC -v``` 

As we can see port 21 is open & anonymous login is available.

![image](https://github.com/user-attachments/assets/4982e43b-f364-49e9-b3cc-0f17ae964433)

### Phase 02 Identifying weaknesses and attack vectors
A simple Google search about ftp protocol tells us all we need to know about the anonymous login feature.

Another Google search about common ftp credentials gives us the 2nd nodge we need to make our breakthrough.

### Phase 03 Establishing a connection with the Fawn VM over FTP
Using ```ftp <target IP>``` + Inserting the common credentials we found.

And voila, login successful and we can retrieve the flag using ```ftp get flag.txt```, the downloaded file can be found into the directory from which we started the ftp service.

![image](https://github.com/user-attachments/assets/a8f4d6bc-882a-41a5-8420-4f787429f028)

![image](https://github.com/user-attachments/assets/9ec9d74e-4cc7-4969-a870-9ae4f3b41fa7)
