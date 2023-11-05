#include <SoftwareSerial.h>

SoftwareSerial SIM900A(2,3);

void setup()
{
  SIM900A.begin(9600);   
  Serial.begin(9600);    
  Serial.println ("Text Messege Module Ready & Verified");
  delay(100);
  Serial.println ("Type s to send message or r to receive message");
}


void loop()
{
  if (Serial.available()>0)
   switch(Serial.read())
  {
    case 's':
      SendMessage();
      break;
    case 'r':
      RecieveMessage();
      break;
  }

 if (SIM900A.available()>0)
   Serial.write(SIM900A.read());
}


 void SendMessage()
{
  Serial.println ("Sending Message please wait....");
  SIM900A.println("AT+CMGF=1");    
  delay(1000);
  Serial.println ("Set SMS Number");
  SIM900A.println("AT+CMGS=\"+919125711922\"\r"); 
  delay(1000);
  Serial.println ("Set SMS Content");
  SIM900A.println("Caution:Driver Is Sleepy!! Please help");
  delay(100);
  Serial.println ("Done");
  SIM900A.println((char)26);
  Serial.println ("Message sent succesfully");
}


 void RecieveMessage()
{
  Serial.println ("Receiving Messeges");
  delay (1000);
  SIM900A.println("AT+CNMI=2,2,0,0,0"); 
  delay(1000);
  Serial.write ("Messege Received Sucessfully");
 }