    var gogolayer






    var projection = ol.proj.get('EPSG:3857');


    var base_map = new ol.layer.Tile({
        source: new ol.source.TileWMS({
          url: 'https://ahocevar.com/geoserver/wms',
          params: {
            'LAYERS': 'ne:NE1_HR_LC_SR_W_DR'
          }
        })
        });

        var baseLayer = new ol.layer.Tile({
    source: new ol.source.BingMaps({
        key: '5TC0yID7CYaqv3nVQLKe~xWVt4aXWMJq2Ed72cO4xsA~ApdeyQwHyH_btMjQS1NJ7OHKY8BK-W-EMQMrIavoQUMYXeZIQOUURnKGBOC7UCt4',
        imagerySet: 'AerialWithLabels' // Options 'Aerial', 'AerialWithLabels', 'Road'
        })
    });


    var Choctawhatchee_AL = new ol.layer.Vector({
      source: new ol.source.KML({
        projection: projection,
        url: '/static/my_first_app/kml/01042016_Choctawhatchee_River_near_Bellwood_AL.kml'
      })
    });


    var Holmes_FL = new ol.layer.Vector({
      source: new ol.source.KML({
        projection: projection,
        url: '/static/my_first_app/kml/01042016_Holmes_Creek_at_Vernon_FL.kml'
      })
    });

    var Pea_FL = new ol.layer.Vector({
      source: new ol.source.KML({
        projection: projection,
        url: '/static/my_first_app/kml/01042016_Pea_River_near_Samson_AL.kml'
      })
    });

    var Brazos_Hempstead_TX = new ol.layer.Vector({
      source: new ol.source.KML({
         projection: projection,
         url: '/static/my_first_app/kml/05282016_Brazos_River_near_Hempstead_TX.kml'
      })
     });


    var SpringCreek_TX = new ol.layer.Vector({
      source: new ol.source.KML({
         projection: projection,
         url: '/static/my_first_app/kml/05282016_Spring_Creek_near_Tomball_TX.kml'
      })
     });

    var WillowCreek_TX = new ol.layer.Vector({
      source: new ol.source.KML({
         projection: projection,
         url: '/static/my_first_app/kml/05282016_Willow_Creek_near_Tomball_TX.kml'
      })
     });

    var Washita_OK = new ol.layer.Vector({
      source: new ol.source.KML({
         projection: projection,
         url: '/static/my_first_app/kml/05292016_Washita_River_at Anadarko_OK.kml'
      })
     });

    var SanJacinto_TX = new ol.layer.Vector({
      source: new ol.source.KML({
         projection: projection,
         url: '/static/my_first_app/kml/05302016_San_Jacinto_River_at_Porter_TX.kml'
      })
     });

    var Brazos_Richmond_TX = new ol.layer.Vector({
      source: new ol.source.KML({
         projection: projection,
         url: '/static/my_first_app/kml/05302016_Brazos_River_at_Richmond_TX.kml'
      })
     });

    var Canadian_OK = new ol.layer.Vector({
      source: new ol.source.KML({
         projection: projection,
         url: '/static/my_first_app/kml/06172016_Canadian_River_at_Norman_OK.kml'
      })
     });

    var Cedar_IA = new ol.layer.Vector({
      source: new ol.source.KML({
         projection: projection,
         url: '/static/my_first_app/kml/09262016_Cedar_River_at_Vinton_IA.kml'
      })
     });

    var Iowa_IA = new ol.layer.Vector({
      source: new ol.source.KML({
         projection: projection,
         url: '/static/my_first_app/kml/09262016_Iowa_River_at_Belle_Plaine_IA.kml'
      })
     });

    var Maquoketa_IA = new ol.layer.Vector({
      source: new ol.source.KML({
         projection: projection,
         url: '/static/my_first_app/kml/09262016_Maquoketa_River_at_Manchester_IA.kml'
      })
     });

    var Mississippi_IA = new ol.layer.Vector({
      source: new ol.source.KML({
         projection: projection,
         url: '/static/my_first_app/kml/09262016_Mississippi_River_at_Clinton_IA.kml'
      })
     });

    var Wapsipinicon_IA = new ol.layer.Vector({
      source: new ol.source.KML({
         projection: projection,
         url: '/static/my_first_app/kml/09262016_Wapsipinicon_River_at_Independence_IA.kml'
      })
     });

    var Black_SC = new ol.layer.Vector({
      source: new ol.source.KML({
         projection: projection,
         url: '/static/my_first_app/kml/10132016_Black_River_at_Kingstree_SC.kml'
      })
     });

    var Lumber_NC = new ol.layer.Vector({
      source: new ol.source.KML({
         projection: projection,
         url: '/static/my_first_app/kml/10132016_Lumber_River_at_Lumberton_NC.kml'
      })
     });

    var map = new ol.Map({
      layers: [baseLayer, Choctawhatchee_AL, Holmes_FL, Pea_FL, Brazos_Hempstead_TX, SpringCreek_TX, WillowCreek_TX, Washita_OK, SanJacinto_TX, Brazos_Richmond_TX, Canadian_OK, Cedar_IA, Iowa_IA, Maquoketa_IA, Mississippi_IA, Wapsipinicon_IA, Black_SC, Lumber_NC ],
      target: document.getElementById('mymap'),
      view: new ol.View({
        center:[-9875919.990406, 4335749.769044],
        projection: projection,
        zoom: 5.9
      })
    });

    var element = document.getElementById('popup');

    var popup = new ol.Overlay({
      element: element,
      positioning: 'bottom-center',
      stopEvent: true
    });

    map.addOverlay(popup);


map.on('singleclick', function(evt) {
    $(element).popover('destroy');
        if (map.getTargetElement().style.cursor == "pointer"){

            var clickCoord = evt.coordinate;
            var pixel = map.getPixelFromCoordinate(clickCoord);
            popup.setPosition(clickCoord);

            var view = map.getView();
            var viewResolution = view.getResolution();

//            if (document.getElementById("ch_AHPS_Gauges").checked){
//                var AHPS_url = AHPS_Source.getGetFeatureInfoUrl(evt.coordinate, viewResolution, view.getProjection(),
//                  {'INFO_FORMAT': 'text/xml', 'FEATURE_COUNT': 50});
//            };
//
//            if (document.getElementById("ch_USGS_Gauges").checked){
//                var USGS_url = USGS_Source.getGetFeatureInfoUrl(evt.coordinate, viewResolution, view.getProjection(),
//                  {'INFO_FORMAT': 'text/xml', 'FEATURE_COUNT': 50});
//              };
            map.forEachFeatureAtPixel(pixel, function(feature) {
            var displayContent = "<h6>Flood Location: " + feature.get('Flood_Location') + "</h6>" + "<p>Flood Date: " + feature.get('Flood_Date') + "<br>" + "Affected Area: " + feature.get('Flood_Area') + "</p>";


          $(element).popover({
                'placement': 'top',
                'html': true,
                'content': displayContent
                  });

                $(element).popover('show');
                $(element).next().css('cursor','text');

        });
//            var displayContent = 'SUP';




//                console.log(displayContent);
            }
        });


  map.on('pointermove', function(evt) {
    if (evt.dragging) {
      return;
    }
    var pixel = map.getEventPixel(evt.originalEvent);
    var hit = map.forEachLayerAtPixel(pixel, function(layer) {
    if (layer != baseLayer){
      return true;}
    });
    map.getTargetElement().style.cursor = hit ? 'pointer' : '';
  });


gogolayer = function(i){
    map.getLayers().item(i).setVisible(false);
};

var app;
app = {gogolayer: gogolayer}