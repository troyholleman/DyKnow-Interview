/**
 * @author Troy Holleman
 */

/**------------ d3 Pie Chart ----------------------------**/
var width = $("#pieGraph").width();
var height = ( $(window).height() - 50);

var pie = new d3pie("pieGraph", {
	"header": {
		"title": {
			"fontSize": 12,
			"font": "roboto"
		},
		"subtitle": {
			"color": "#ffffff",
			"fontSize": 12,
			"font": "roboto"
		},
		"titleSubtitlePadding": 9
	},
	"footer": {
		"color": "#999999",
		"fontSize": 12,
		"font": "roboto",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": width,
		"canvasHeight": height,
		"pieInnerRadius": "45%",
		"pieOuterRadius": "50%"
	},
	"data": {
		"sortOrder": "value-desc",
		"content": [
			{
				"label": "mathlab.com",
				"value": 32.04,
				"color": "#2CA6DD"
			},
			{
				"label": "GeometryApp",
				"value": 10.54,
				"color": "#99CC00"
			},
			{
				"label": "wikipedia.org",
				"value": 5.36,
				"color": "#AA66CC"
			},
			{
				"label": "espn.com",
				"value": 2.14,
				"color": "#FFBA33"
			}
		]
	},
	"labels": {
		"outer": {
			"pieDistance": 25
		},
		"inner": {
			"hideWhenLessThanPercentage": 3
		},
		"mainLabel": {
			"fontSize": 12,
			"color": "#ffffff"
		},
		"percentage": {
			"color": "#ffffff",
			"decimalPlaces": 0
		},
		"value": {
			"color": "#ffffff",
			"fontSize": 12
		},
		"lines": {
			"enabled": true,
			"style": "straight"
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "back",
			"speed": 200,
			"size": "20%"
		}
	},
	"misc": {
		"colors": {
			"background": "#6C6B6A"
		}
	}
})
.attr("preserveAspectRatio", "xMidYMin meet")
.attr("viewBox", "0 0 " + width + " " + height)
	.attr("width", width)
	.attr("height", height);

/** ----------------- Responsive SVG --------------------- **/

$(window).resize(function() {
  var width = $("#pieGraph").width();
  pieGraph.attr("width", width);
  pieGraph.attr("height", height);
});