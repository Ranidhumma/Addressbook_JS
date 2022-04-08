console.log ("Welcome to Addressbook program");
/*Here we used Regex pattern for name , address, state , city, zip, phoneNum and email*/
const nameRegex = RegExp("[A-Z][a-zA-Z]{2,}");
const addressRegex = RegExp('^[a-zA-z0-9#,]{4,}$');
const cityStateRegex = RegExp('^[a-zA-z]{4,}$');
const zipRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
const phoneNumRegex = RegExp("^[0-9]{2}[-]{1}[0-9]{10}$");
const emailRegex = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");

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

get firstName(){
    return this._firstName;
    }
    
    get lastName(){
    return this._lastName;
    }
    
    get address(){
    return this._address;
    }
    
    get city(){
    return this._city;
    }
    

get state(){
return this._state;
}

get zip(){
return this._zip;
}

get phoneNumber(){
return this._phoneNumber;
}

get email(){
return this._email;
}

set firstName(firstName){
if (nameRegex.test(firstName))
this._firstName = firstName;
else
throw "invalid firstname";
}

set lastName(lastName){
if (nameRegex.test(lastName))
this._lastName = lastName;
else
throw "invalid lastName";
}

set address(address){
if (addressRegex.test(address))
this._address = address;
else
throw "invalid Address";
}

set city(city){
if (cityStateRegex.test(city))
this._city = city;
else
throw " invalid city";
}

set state(state){
if (cityStateRegex.test(state))
this._state = state;
else
throw " invalid state";
}

set zip(zip){
if (zipRegex.test(zip))
this._zip = zip;
else
throw "invalid Zip Code";
}

set phoneNumber(phoneNumber){
if (phoneNumRegex.test(phoneNumber))
this._phoneNumber = phoneNumber;
else
throw "invalid Address";
}

set email(email){
if (emailRegex.test(email))
this._email = email;
else
throw "invalid emailid";
}


toString() {
return "First name: " + this.firstName + "\nLast name: " + this.lastName +
"\nAddress: " + this.address +  "\nCity: " + this.city +
"\nState: " + this.state + "\nZip: " + this.zip +
"\nPhone number: " + this.phoneNumber + "\nEmail: " + this.email;
}}

/* Here we are using the push method to add the contact into the array
*/
let addressbookArray = new Array();
try{
    addressbookArray.push(new Contact("Rani","Dhumma","Shelgi","Solapur","Maharashtra","12345", "9999922222","rd@gmail.com"));
}
catch(e){
    console.error(e);
}

try{
    addressbookArray.push(new Contact("Kavya","Kamra","Xyz","Solapur","Maharashtra","415012","9995551420","sk@gmail.com"));
}catch(e){
    console.error(e);
}


    console.log(addressbookArray);

    

