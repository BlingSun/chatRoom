/**
* jPList - jQuery Data Grid Controls 5.2.0.9 - http://jplist.com 
* Copyright 2016 Miriam Zusin
*/
(function(){var d=function(b){b.params={scopeObserver:null,dataSource:null,view:null,autocompleteParams:{dataPath:b.$control.attr("data-path"),ignore:b.$control.attr("data-ignore")||"[~!@#$%^&*()+=`'\"/\\_ ]+",minChars:Number(b.$control.attr("data-minchars"))||0,maxItems:Number(b.$control.attr("data-maxitems"))||5,render:b.$control.attr("data-render"),onSuggest:b.$control.attr("data-onsuggest")}};var h=b.params,e=jQuery({});e.$root=b.$control;e.events={inputValueChanged:"1",DOMDataLoaded:"2",ServerDataLoaded:"3",
onSelect:"4"};h.scopeObserver=e;b.params.dataSource=new jQuery.fn.jplist.controls.AutocompleteDataSource(b.params.scopeObserver,b.$root,b.options,b.params.autocompleteParams);b.params.view=new jQuery.fn.jplist.controls.AutocompleteView(b.$control,b.params.scopeObserver,b.params.autocompleteParams);return jQuery.extend(this,b)};d.prototype.getPaths=function(b){var h=null,h=new jQuery.fn.jplist.PathModel(this.params.autocompleteParams.dataPath,null);b.push(h)};jQuery.fn.jplist.controls.Autocomplete=
function(b){return new d(b)};jQuery.fn.jplist.controlTypes.autocomplete={className:"Autocomplete",options:{}}})();(function(){var d=function(b){b.scopeObserver.on(b.scopeObserver.events.inputValueChanged,function(e,d){var g=null,f=[],g=b.$root.jplist({command:"getDataItems",commandData:{}});jQuery.trim(d)&&g&&(f=new jQuery.fn.jplist.PathModel(b.params.dataPath,null),(f=jQuery.fn.jplist.FiltersService.textFilter(d,f,g,b.params.ignore,"contains"))&&f.length>b.params.maxItems&&f.splice(b.params.maxItems,f.length-b.params.maxItems));f||(f=[]);b.scopeObserver.trigger(b.scopeObserver.events.DOMDataLoaded,[f])})},b=
function(b,e,k,g){b={scopeObserver:b,$root:e,options:k,params:g};d(b);return jQuery.extend(this,b)};jQuery.fn.jplist.controls.AutocompleteDataSource=function(d,e,k,g){return new b(d,e,k,g)}})();(function(){var d=function(a){var b=null;a=a.$placeholder.children();0<a.length&&(b=a.filter(".autocomplete-active"));b&&((a=b.attr("href"))?window.location.href=a:b.trigger("click"))},b=function(a,b){var c,e,d;a.$placeholder.is(":visible")&&(c=a.$placeholder.children(),0<c.length&&(d=-1,c.each(function(a,b){var c=jQuery(b);c.hasClass("autocomplete-active")&&(d=a,e=c)}),c.removeClass("autocomplete-active"),"up"===b?-1!==d&&(0<=d-1?(c=c.eq(d-1),c.addClass("autocomplete-active")):e.addClass("autocomplete-active")):
-1===d?c.eq(0).addClass("autocomplete-active"):d+1<c.length?(c=c.eq(d+1),c.addClass("autocomplete-active")):e.addClass("autocomplete-active")))},h=function(a){jQuery('[data-control-type="autocomplete"] [data-type="placeholder"]').each(function(){var a=jQuery(this);!0===a.data("autocomplete-placeholder")&&a.hide()})},e=function(a){0<(Number(a.$placeholder.attr("data-length"))||0)?a.$placeholder.show(0):h(a)},k=function(a,b,c){var d="";a.$placeholder.empty();jQuery.each(b,function(a,b){d+=b.html});
a.$placeholder.html(d);a.$placeholder.attr("data-length",b.length);e(a);a.$control.removeClass("autocomplete-loading");if(a.params.onSuggest&&jQuery.isFunction(jQuery.fn.jplist.settings[a.params.onSuggest]))jQuery.fn.jplist.settings[a.params.onSuggest](a,b,c)},g=function(a){a.$input.on("keyup",function(e){var c;e.stopPropagation();c=jQuery.trim(jQuery(this).val());switch(e.keyCode){case a.askii.UP:b(a,"up");break;case a.askii.DOWN:b(a,"down");break;case a.askii.ENTER:d(a);break;case a.askii.RETURN:d(a);
break;default:if(c.length>=a.params.minChars||0===c.length)a.$control.addClass("autocomplete-loading"),a.scopeObserver.trigger(a.scopeObserver.events.inputValueChanged,[c])}})},f=function(a){a.scopeObserver.on(a.scopeObserver.events.DOMDataLoaded,function(b,c,d){k(a,c,d)});a.scopeObserver.on(a.scopeObserver.events.ServerDataLoaded,function(b,c,d){b="";c?(b=a.params.render&&jQuery.isFunction(jQuery.fn.jplist.settings[a.params.render])?jQuery.fn.jplist.settings[a.params.render](c):c.content,a.$placeholder.html(b),
a.$placeholder.attr("data-length",c.count)):(a.$placeholder.empty(),a.$placeholder.attr("data-length",0));e(a);a.$control.removeClass("autocomplete-loading");if(a.params.onSuggest&&jQuery.isFunction(jQuery.fn.jplist.settings[a.params.onSuggest]))jQuery.fn.jplist.settings[a.params.onSuggest](a,c,d)});g(a);a.$input.on("click",function(b){b.stopPropagation();h(a);e(a)});jQuery(document).on("click",function(){h(a)});a.$placeholder.on("click",function(a){a.stopPropagation()});a.$btn.on("click",function(b){d(a)})},
l=function(a,b,c){a={$control:a,scopeObserver:b,$input:a.find('input[type="text"]'),$btn:a.find("button"),$actions:null,$placeholder:null,params:c,askii:{LEFT:37,UP:38,RIGHT:39,DOWN:40,ENTER:13,RETURN:3}};a.$input.val("");a.$control.wrapInner('<div data-type="actions" class="jplist-autocomplete-actions"></div>');a.$actions=a.$control.find('[data-type="actions"]');0>=a.$input.next('[data-type="placeholder"]').length&&(a.$actions.after('<div class="jplist-autocomplete-placeholder"><div class="autocomplete-box" data-type="placeholder"></div></div>'),
a.$placeholder=a.$control.find('[data-type="placeholder"]:first'));a.$placeholder.data("autocomplete-placeholder",!0);e(a);f(a);return jQuery.extend(this,a)};jQuery.fn.jplist.controls.AutocompleteView=function(a,b,c){return new l(a,b,c)}})();
