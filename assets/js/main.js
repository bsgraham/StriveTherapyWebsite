/*
	Introspect by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/
const BYOP_LINK = "https://buy.stripe.com/cN29CN1UcdH0h1u3cc";

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1440px)',
		medium:	'(max-width: 1300px)',
		small:	'(max-width: 1300px)',
		xsmall:	'(max-width: 1300px)'
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

	let body = encodeURIComponent(`Name: ${name}\r\nPhone: ${phone}\r\n\r\nWhat brings you to therapy?\r\n${message}\r\n\r\n`);
	let action = `mailto:brittany@strivetherapywa.com?subject=Strive Therapy PLLC Client Inquiry&body=${body}`;

	let emailLink = document.createElement('a');
	emailLink.target = "_blank";
	emailLink.href = action;

	emailLink.click();
}

function smoothScroll(id) {
	document.getElementById(id).scrollIntoView({behavior: "smooth"});
}

function showModal(id) {
	document.getElementById(id).style.display = "block";
	document.body.style.overflow = "hidden";
}

function hideModal(id) {
	document.getElementById(id).style.display = "none";
	document.body.style.overflow = "auto";
}

function goToByop() {
	setTimeout( () => {
		window.open(BYOP_LINK, "_blank");
		hideModal('byop-modal');
		document.getElementById("byopAcknowledge").checked = false;
	}, 1000);
}

window.onclick = function(event) {
	if (event.target == document.getElementById("byop-modal")) {
		hideModal('byop-modal');
	}
	else if (event.target == document.getElementById("gfen-modal")) {
		hideModal('gfen-modal');
	}
}