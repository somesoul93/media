(function($){
  $(function(){
  	$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	    $('.modal-trigger').leanModal();
	});
    $('.button-collapse').sideNav();
    // Initialize collapse button
	// Initialize collapsible
	$('.collapsible').collapsible();
    $('.scrollspy').scrollSpy();
    $('select').material_select();
    $('.dropdown-button').dropdown({
	      inDuration: 300,
	      outDuration: 225,
	      constrain_width: true, // Does not change width of dropdown to that of the activator
	      hover: false, // Activate on click
	      alignment: 'left', // Aligns dropdown to left or right edge (works with constrain_width)
	      gutter: 0 // Spacing from edge
	    }
	);

    $(".animsition").animsition({
	    inClass               :   'fade-in',
	    outClass              :   'fade-out',
	    inDuration            :    350,
	    outDuration           :    250,
	    linkElement           :   'a:not([target="_blank"]):not([href^=#])',
	    // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'    '.animsition-link'
	    loading               :    true,
	    loadingParentElement  :   'body', //animsition wrapper element
	    loadingClass          :   'animsition-loading',
	    unSupportCss          : [ 'animation-duration',
	                              '-webkit-animation-duration',
	                              '-o-animation-duration'
	                            ],
	    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
	    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
	    overlay               :   false,
	    overlayClass          :   'animsition-overlay-slide',
	    overlayParentElement  :   'body'
	});

  }); // end of document ready
})(jQuery); // end of jQuery name space

function keluar() {
    navigator.app.exitApp();
}