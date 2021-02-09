/*
	Introspect by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Off-Canvas Navigation.

			// Navigation Panel Toggle.
				$('<a href="#navPanel" class="navPanelToggle"></a>')
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						$('#nav').html() +
						'<a href="#navPanel" class="close"></a>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left'
					});

			// Fix: Remove transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#navPanel')
						.css('transition', 'none');

	});

})(jQuery);

function sendEmail() {
	// Validate form data
	var name = document.getElementById("emailName").value;
	var phone = document.getElementById("emailPhone").value;
	var message = document.getElementById("emailMessage").value;

	var problems = 0;

	if (!name) {
		document.getElementById("emailNameWarning").style.display = "inline";
		problems++;
	} else {
		document.getElementById("emailNameWarning").style.display = "none";
	}

	if (!phone) {
		document.getElementById("emailPhoneWarning").style.display = "inline";
		problems++;
	} else {
		document.getElementById("emailPhoneWarning").style.display = "none";
	}

	if (!message) {
		document.getElementById("emailMessageWarning").style.display = "inline";
		problems++;
	} else {
		document.getElementById("emailMessageWarning").style.display = "none";
	}

	if (problems > 0) {


		return;
	}

	var body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\n\nWhat brings you to therapy?\n${message}\n\n`);

	let form = document.getElementById('emailForm');
	form.action = `mailto:brittany@strivetherapywa.com?subject=Strive Therapy PLLC Client Inquiry&body=${body}`;

	form.submit();
}