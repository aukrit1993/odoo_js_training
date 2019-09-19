odoo.define('workshop_1.dogs', function (require) {
    "use strict";

    var PosBaseWidget = require('point_of_sale.BaseWidget');
    var models = require('point_of_sale.models');
    var PosDB = require('point_of_sale.DB');

    var gui = require('point_of_sale.gui');
    var screens = require('point_of_sale.screens');
    var core = require('web.core');
    var popups = require('point_of_sale.popups');
    var QWeb = core.qweb;
    var _t = core._t;
    var Model = require('web.DataModel');


    //Define the DogsPopupWidget
    var DogsPopupWidget = popups.extend({
        template: 'DogsPopupWidget',

        click_confirm: function(){
            var lines = $('.dogs_tr');
            $.each(lines, function(idx, line){
                let is_checked = $(line).find('input:checked');
                if (is_checked.length > 0) {
                    let name = $(line).attr('line-name')
                    console.log(name);
                }
            });
        }

    });
    gui.define_popup({name: 'dogs_popup', widget: DogsPopupWidget});


    //Modify the original Product Screen Widget adding an event listener
    //to the button with ID open_dogs so it will open the dogs popup widget
    screens.ProductScreenWidget.include({
        show: function(){
            var self = this;

            //call show from the parent
            self._super();

            //add an event listener
            $('#open_dogs').on('click', function(){

                //convert the object of dog records to an array of dog records
                let dog_array = Object.values(self.pos.dogs_by_id)

                //show popup and pass title and lines into the popup
                self.gui.show_popup('dogs_popup', {
                    'title': _t('Dogs'),
                    'lines': dog_array,
                });

            });
        }
    })

    
    return DogsPopupWidget;

});