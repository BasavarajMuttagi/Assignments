let ContactDetailID = 3000
let contactID = 2000
let userID  = 1000
let allUsers = []

class ContactDetail{
    constructor(phone,email,company,Worklocation) {
        this.ContactDetailID = ContactDetailID++
        this.phone = phone
        this.email = email
        this.company = company
        this.Worklocation = Worklocation
    }
}

class Contact{
    constructor(firstName,lastName,active) {
        this.contactID = contactID++
        this.firstName = firstName
        this.lastName = lastName
        this.active = active
        this.contactDetails = {}
    }
}

class User{
    constructor(firstName,lastName,active,role) {
        this.role = role
        this.userID = userID++
        this.firstName = firstName
        this.lastName = lastName
        this.active = active
        this.contacts = []
    }

    findContact(firstName,lastName){
        for (let index = 0; index < this.contacts.length; index++) {
            const contact = this.contacts[index];
            if(contact.firstName == firstName && contact.lastName == lastName){
                return [true,contact.active,index]
            }
        }
        return [false,false,null]
    }
    

    createContacts(firstName,lastName,active){
        let newContact = new Contact(firstName,lastName,active)
        this.contacts.push(newContact)
    }

    createContactDetail(firstName,lastName,phone,email,company,Worklocation){
        let [message,active,index] = this.findContact(firstName,lastName)
        if(!message){
            console.log(`${firstName} ${lastName} is not a Contact!!!`);
            return [false]
        }
        if(!active){
            console.log(`${firstName} ${lastName} is not a Contact!!! [Was deleted]`);
            return [false]
        }
        let newContactdetail = new ContactDetail(phone,email,company,Worklocation);
        this.contacts[index].contactDetails = Object.assign({},newContactdetail)
    }

    displayContact(){
        this.contacts.forEach(contact => {
            if(contact.active != false){
                console.log(contact)
            }
        });
    }

    deleteContact(firstName,lastName){
        let [message,active,index] = this.findContact(firstName,lastName)
        if(!message){
            console.log(`${firstName} ${lastName} is not a Contact!!!`);
            return [false]
        }
        this.contacts[index].active = false
    }

    findUser(firstName,lastName){
        if(this.role!='admin'){
            console.log("no authorization to access service")
            return [false]
        }

        for (let index = 0; index < allUsers.length; index++) {
            const contact = allUsers[index];
            if(contact.firstName == firstName && contact.lastName == lastName){
                return [true,contact.active,index]
            }
        }
        return [false,false,null]
    }

    createUser(firstName,lastName,active){
        if(this.role!='admin'){
            console.log("no authorization to access service")
            return [false]
        }
        let newUser = new User(firstName,lastName,active,'user')
        allUsers.push(newUser)
        return newUser
    }

    deleteUser(firstName,lastName){
        if(this.role!='admin'){
            console.log("no authorization to access service")
            return [false]
        }

        let [message,active,index] = this.findUser(firstName,lastName)
        if(!message){
            console.log(`${firstName} ${lastName} is not a User!!!`);
            return [false]
        }
        allUsers[index].active = false
    }

    displayUsers(){
        if(this.role!='admin'){
            console.log("no authorization to access service")
            return [false]
        }
        allUsers.forEach(user=> {
            if(user.active != false){
                console.log(user)
            }
        });
    }
}


let admin = new User('Lewis','Hamilton',true,'admin')
admin.createContacts('George','Russell','true')
admin.createContacts('Aurther','Russell','true')
admin.createContactDetail('Aurther','Russell',7676791722,'abc@gmail.com','Monocept','HYD')
admin.createContactDetail('George','Russell',7676791722,'abc@gmail.com','Monocept','NYC')





let post = admin.createUser('Post','Malone',true)
post.createContacts('Dua','Lipa',true)
post.createContacts('Enrique','Iglesias',true)
post.createContactDetail('Dua','Lipa',7676791722,'abc@gmail.com','Monocept','NYC')
post.createContactDetail('Enrique','Iglesias',7676791722,'abc@gmail.com','Monocept','NYC')


let micheal = admin.createUser('micheal','jackson',true)
micheal.createContacts('Dua','Lipa',true)
micheal.createContacts('Enrique','Iglesias',true)
micheal.createContactDetail('Dua','Lipa',7676791722,'abc@gmail.com','Monocept','NYC')
micheal.createContactDetail('Enrique','Iglesias',7676791722,'abc@gmail.com','Monocept','NYC')

admin.deleteUser('micheal','jackson')
admin.displayUsers()



