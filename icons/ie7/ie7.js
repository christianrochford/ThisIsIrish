/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'thisisirish\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-mail': '&#xe600;',
		'icon-share': '&#xe601;',
		'icon-info': '&#xe602;',
		'icon-arrow-left': '&#xe604;',
		'icon-arrow-down': '&#xe605;',
		'icon-arrow-up': '&#xe606;',
		'icon-arrow-right': '&#xe608;',
		'icon-twitter': '&#xe609;',
		'icon-facebook': '&#xe60c;',
		'icon-googleplus': '&#xe60d;',
		'icon-cycle': '&#xe603;',
		'icon-menu': '&#xe607;',
		'icon-exclamation': '&#xe60a;',
		'icon-exclamation-round': '&#xe60b;',
		'icon-close-modal': '&#xe60f;',
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
