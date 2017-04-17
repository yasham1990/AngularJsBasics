var app=angular.module("contactsApp",[]);
        app.controller("ContactsCtrl",ContactsCtrl);
        app.controller("HeaderCtrl",HeaderCtrl);
        app.controller("FooterCtrl",FooterCtrl);

        app.value("AppNameSVC","New Contact App");

       function  valueObject(AppNameSVC) {
            var value={};
            value.name=AppNameSVC;
            value.author="Yasham";
            return value;
        }


        function  valueObjectCons(AppNameSVC) {
                    //var value={};
                    this.name=AppNameSVC;
                    this.author="Yasham";
                    //return value;
                }
        app.factory("AppDataFactorySVC",valueObject);

        //app.factory("AppDataServiceSVC",valueObjectCons);//for constructor mode of running the function.

        

function HeaderCtrl(AppDataFactorySVC){
    this.appTitle=AppDataFactorySVC.name;
}

function FooterCtrl(AppDataFactorySVC){
    this.appTitle=AppDataFactorySVC.name;
}


function ContactsCtrl(){
    console.log("here");
    this.contacts=[
        {"gender":"male","name":{"title":"mr","first":"evelácio","last":"silveira"},"location":{"street":"3095 rua rio de janeiro ","city":"guarulhos","state":"roraima","postcode":91070},"email":"evelácio.silveira@example.com","login":{"username":"brownfrog730","password":"kenshin","salt":"d7VTKJkc","md5":"7c0ce6fc57bf8bf7d8edeceb7086f8a4","sha1":"5b8431abce398ba072109ffbaf103b7c47b2437e","sha256":"82356b084938c19ce60f0ce35b3cf7a8ba87d459fa8940adb8b1d682b6385d16"},"dob":"1955-09-11 23:30:47","registered":"2008-12-18 01:49:11","phone":"(01) 9120-3826","cell":"(45) 1422-1106","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/51.jpg","medium":"https://randomuser.me/api/portraits/med/men/51.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/51.jpg"},"nat":"BR"},
        {"gender":"male","name":{"title":"mr","first":"frankie","last":"nelson"},"location":{"street":"4028 green lane","city":"inverness","state":"merseyside","postcode":"X13 9GB"},"email":"frankie.nelson@example.com","login":{"username":"bluebird186","password":"deadpool","salt":"VZ6nKVwx","md5":"c211418954247a08f87775a2c708b0ae","sha1":"446cf05bea34c9ee9ce735e686bc1ad19fb805a2","sha256":"baee18c5854675a3bf91cd0a880d1a806c8d4609a4b028786612bad6da19c475"},"dob":"1970-07-04 14:24:40","registered":"2009-06-15 15:24:28","phone":"013873 20933","cell":"0749-874-837","id":{"name":"NINO","value":"SP 54 38 99 O"},"picture":{"large":"https://randomuser.me/api/portraits/men/77.jpg","medium":"https://randomuser.me/api/portraits/med/men/77.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/77.jpg"},"nat":"GB"},
        {"gender":"male","name":{"title":"mr","first":"alexis","last":"carpentier"},"location":{"street":"2660 rue de l'abbé-grégoire","city":"roubaix","state":"vosges","postcode":84912},"email":"alexis.carpentier@example.com","login":{"username":"bluefrog693","password":"dirty","salt":"WGjrcWzc","md5":"50590e51d19539eeec2f36b94817b99a","sha1":"152f36edba122aa91f5b0065dda9b26eb775bf81","sha256":"5d52a0ac585389e55fc6ff978ec88999e8d5889b247c085a51a4f9b233cd6cf9"},"dob":"1964-03-27 02:14:11","registered":"2014-03-10 17:57:31","phone":"01-27-26-42-20","cell":"06-01-90-71-23","id":{"name":"INSEE","value":"164297410960 16"},"picture":{"large":"https://randomuser.me/api/portraits/men/27.jpg","medium":"https://randomuser.me/api/portraits/med/men/27.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/27.jpg"},"nat":"AU"},
        {"gender":"female","name":{"title":"ms","first":"lucia","last":"garrido"},"location":{"street":"3082 avenida de salamanca","city":"sevilla","state":"extremadura","postcode":94194},"email":"lucia.garrido@example.com","login":{"username":"brownleopard421","password":"golfer","salt":"jqzrts3F","md5":"7274687acee0084ab7d7988e5f62b7d9","sha1":"dd17de45b93dbe1f7509da2c567b339062ccaf94","sha256":"3baf907104fb19297577b79f1f0c2f1e0ba639204cdaab42153a7ee664eec91a"},"dob":"1948-09-01 16:00:34","registered":"2007-09-12 05:17:22","phone":"910-599-509","cell":"651-848-594","id":{"name":"DNI","value":"14735229-Q"},"picture":{"large":"https://randomuser.me/api/portraits/women/61.jpg","medium":"https://randomuser.me/api/portraits/med/women/61.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/61.jpg"},"nat":"AU"},
        {"gender":"female","name":{"title":"miss","first":"lorraine","last":"lee"},"location":{"street":"2194 green rd","city":"sydney","state":"south australia","postcode":8018},"email":"lorraine.lee@example.com","login":{"username":"tinygoose402","password":"hope","salt":"EyE0oc2R","md5":"ade9fe7cf9b7e80996f227f71691ce87","sha1":"8ea5c3fa390fbd236e202e0727e9dbb64a030a01","sha256":"487b0dae40c82c68bdb37f8b8e3208638df929f1e1362ef1c304e8ec0adc045d"},"dob":"1982-02-19 10:23:33","registered":"2011-09-13 21:06:50","phone":"00-6290-3800","cell":"0461-997-857","id":{"name":"TFN","value":"940247625"},"picture":{"large":"https://randomuser.me/api/portraits/women/53.jpg","medium":"https://randomuser.me/api/portraits/med/women/53.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/53.jpg"},"nat":"AU"},
        {"gender":"male","name":{"title":"mr","first":"phillip","last":"white"},"location":{"street":"4581 avondale ave","city":"murfreesboro","state":"north dakota","postcode":75061},"email":"phillip.white@example.com","login":{"username":"tinyduck153","password":"1234567890","salt":"PuRtkTgR","md5":"e2d55c30f99d4f0bb0062758bdb7a203","sha1":"46a7bb45a6381bc56baed160b72620ed544e6911","sha256":"89dbcecc15b5f8c4a1bcbc53c354c8e62182f4b4ab4766c2462f18252d3fc301"},"dob":"1991-06-27 17:22:33","registered":"2011-06-14 21:05:12","phone":"(907)-637-3171","cell":"(302)-680-4971","id":{"name":"SSN","value":"083-86-3507"},"picture":{"large":"https://randomuser.me/api/portraits/men/20.jpg","medium":"https://randomuser.me/api/portraits/med/men/20.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/20.jpg"},"nat":"US"}
    ];

    this.selectedContact=this.contacts[0];

    this.selectContact=function(index){
        this.selectedContact=this.contacts[index];
    }

    }
