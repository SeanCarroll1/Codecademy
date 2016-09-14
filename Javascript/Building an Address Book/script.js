var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

var add = function(firstName,lastName,email,phoneNumber)
{

this.firstName = firstName;
this.lastName = lastName;
this.email = email;
this.phoneNumber = phoneNumber;

};

contacts[contacts.length]= new add("Peter","Wang","tao@example.com","(650) 666-6666");

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}
function search(lastName){
    var cont=contacts.length;
    for(i=0; i<cont; i++)
    {
        if(contacts[i].lastName == lastName)
        {
            printPerson(contacts[i]);
        }
    }
}
search("Jones");
/*Create a search function
then call it passing "Jones"*/
list();
