import $ from 'jquery';
import 'bootstrap';
import Counter from './model/Counter';

$(function() {
  // Handler for .ready() called.
  $("p").text( "The DOM is now loaded and can be manipulated." );
});

//$('<div>Hello World, I\'m using JQuery!</div>').appendTo('body');

let counter = new Counter();
