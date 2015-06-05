/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'sa-digital-number\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-minus': '&#x2d;',
		'icon-zero': '&#x30;',
		'icon-one': '&#x31;',
		'icon-two': '&#x32;',
		'icon-three': '&#x33;',
		'icon-four': '&#x34;',
		'icon-five': '&#x35;',
		'icon-six': '&#x36;',
		'icon-seven': '&#x37;',
		'icon-eight': '&#x38;',
		'icon-nine': '&#x39;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
