import { computed } from '@ember/object';
import Mixin from '@ember/object/mixin';
import { addObserver, removeObserver } from '@ember/object/observers';

var ionProperties = {
    type               : 'single',
    values             : [],
    min                : 10,
    max                : 100,
    step               : 1,
    min_interval       : null,
    max_interval       : null,
    drag_interval      : false,

    from_fixed         : false,
    from_min           : 10,
    from_max           : 100,
    from_shadow        : false,
    to_fixed           : false,
    to_min             : 10,
    to_max             : 100,
    to_shadow          : false,

    prettify_enabled   : true,
    prettify_separator : ' ',
    prettify           : null,

    force_edges        : false,
    keyboard           : false,
    keyboard_step      : 5,

    grid               : false,
    grid_margin        : true,
    grid_num           : 4,
    grid_snap          : false,
    hide_min_max       : false,
    hide_from_to       : false,

    prefix             : '',
    postfix            : '',
    max_postfix        : '',
    decorate_both      : true,
    values_separator   : ' - ',
    disabled           : false
};

export default Mixin.create({

  ionReadOnlyOptions: computed(function(){
    var ionOptions = {};
    for (var pName in ionProperties){
      ionOptions[pName] = this.getWithDefault(pName, ionProperties[pName]);
    }
    return ionOptions;
  }).readOnly(),

  didInsertElement(){
    var options = this.get('ionReadOnlyOptions');
    for (var optName in options){
      addObserver(this, optName, this, '_readOnlyPropertiesChanged');
    }
  },

  willDestroyElement() {
    var options = this.get('ionReadOnlyOptions');
    for (var optName in options){
      removeObserver(this, optName, this, '_readOnlyPropertiesChanged');
    }
  }

});
