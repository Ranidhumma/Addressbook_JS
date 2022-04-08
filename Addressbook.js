console.log ("Welcome to Addressbook program");
class Contact {
firstName;
lastName;
address;
city;
state;
zip;
phoneNumber;
email;

constructor(firstName, lastName, address, city, state, zip, phoneNumber, email){
this.firstName = firstName;
this.lastName = lastName;
this.address = address;
this.city = city;
this.state = state;
this.zip = zip;
this.phoneNumber = phoneNumber;
this.email = email;
}



toString() {
return "First name: " + this.firstName + "\nLast name: " + this.lastName +
"\nAddress: " + this.address +  "\nCity: " + this.city +
"\nState: " + this.state + "\nZip: " + this.zip +
"\nPhone number: " + this.phoneNumber + "\nEmail: " + this.email;
}}


let contact = new Contact("Rani","Dhumma","Shelgi","Solapur","Maharashtra",12345,9999922222,"rd@gmail.com");

console.log(contact.toString());





