       /*function  valueObject(AppNameSVC) {
            var value={};
            value.name=AppNameSVC;
            value.author="Yasham";
            return value;
        }*/

(function (){
    var app=angular.module("contactsApp");
        function  valueObjectCons(AppNameSVC) {
                    //var value={};
                    this.name=AppNameSVC;
                    this.author="Yasham";
                    //return value;
                }
        //app.factory("AppDataFactorySVC",valueObject);

        //for constructor mode of running the function.
        app.factory("AppDataServiceSVC",valueObjectCons);
})();