 (function (){
        var app=angular.module("contactsApp");

app.controller("ContactsCtrl",ContactsCtrl);

function ContactsCtrl(ContactDataSvc){
    //this.contacts=ContactDataSvc.contacts;
    var self=this;
    
    self.editMode=false;
    self.addMode=false;
    ContactDataSvc.getContacts().then(function(data){
      self.contacts=data;  
    });

    this.selectContact=function(index){
        this.selectedContact=this.contacts[index];
        self.successMessage=undefined;
        self.errorMessage=undefined;
    }

    this.toggleEditMode=function(){
        this.editMode=!this.editMode;
    }
    this.saveUser=function(){
        this.toggleEditMode();
        var userData=this.selectedContact;
        if (self.addMode) {
            ContactDataSvc.createUser(userData)
                .then(function () {
                    self.successMessage = "Data Successfully Updated";
                },
                function () {
                    self.errorMessage = "Server Not found";
                });
                self.addMode=false;
        }
        else
        {
            ContactDataSvc.saveUser(userData)
                .then(function () {
                    self.successMessage = "Data Successfully Updated";
                },
                function () {
                    self.errorMessage = "Server Not found";
                });
        }
       
    }

    this.addContact=function(){    
        self.addMode=true;
        this.selectedContact={
            "id":new Date().toTimeString()
        };
        this.editMode=true;
    }


}
 })();