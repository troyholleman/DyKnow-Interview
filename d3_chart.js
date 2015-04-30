/**
 * @author Troy Holleman
 */

var width = $("#pieChart").width();
var height = $("#pieChart").height();

var pie = new d3pie("pieChart", {
	"header": {
		"title": {
			"fontSize": 12,
			"font": "roboto"
		},
		"subtitle": {
			"color": "#ffffff",
			"fontSize": 10,
			"font": "roboto"
		},
		"titleSubtitlePadding": 9
	},
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": width,
		"canvasHeight": height,
		"pieInnerRadius": "50%",
		"pieOuterRadius": "100%"
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
			"fontSize": 11
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
			"speed": 250,
			"size": 12
		}
	},
	"misc": {
		"colors": {
			"background": "#6C6B6A"
		}
	}
});

// -------------------------------- Responsive SVG -------------------------------- //

$(window).resize(function() {
  var width = $("#pieChart").width();
  pieGraph.attr("width", width);
});