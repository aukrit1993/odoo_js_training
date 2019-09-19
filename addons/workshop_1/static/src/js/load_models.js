odoo.define('workshop_1.load_models', function (require) {
    "use strict";

    var models = require('point_of_sale.models');

    //We want to load the data for the model dogs to the frontend
    models.load_models([{
        model: 'dogs',
        fields: [],
        loaded: function(self, dog_records){
            console.log('Loaded Dogs!')
            self.dogs_by_id = {};
            //loop through each record and set it on the front-end
            $.each(dog_records, function(idx, dog){
                self.dogs_by_id[dog.id] = dog;
            });      
        },
    }]);

});