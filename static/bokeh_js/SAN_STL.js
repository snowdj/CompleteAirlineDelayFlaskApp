document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("8ef87725-a89b-436e-afb0-0c329f9ff2ad");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8ef87725-a89b-436e-afb0-0c329f9ff2ad' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"2c6c1096-a65a-4b33-964e-8c65a7f55fbf":{"roots":{"references":[{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a88b4beb-c6eb-4a2b-9184-657c40c666f3","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[3.7,4.6,4.95,3.5,3.8,3.7,5.0,5.514285714285714,4.25,4.6],"x":[8,16,8,15,8,8,9,9,14,8],"y":["Monday","Monday","Wednesday","Wednesday","Thursday","Friday","Friday","Saturday","Saturday","Sunday"]}},"id":"8af04863-c8ed-467c-bb8b-3b34ebd74b63","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[22.583333333333332,20.5,23.0],"x":[13,14,16],"y":["Monday","Tuesday","Friday"]}},"id":"2ef0a3d1-c86d-4dbe-ace6-43d71f73cfd8","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"ad738cb1-16da-4ca3-828d-a3928672b009","subtype":"Chart","type":"Plot"}},"id":"97de691b-f3ce-4427-b30f-8d7c3b398cf0","type":"SaveTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"dfd232f5-231a-4e2e-9ff1-8291a339681c","type":"Rect"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"b355a98e-56f3-44fe-aca1-1a96bf79489f","type":"Title"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0def77d8-82fc-4dbb-82ae-65facc50e870","type":"Rect"},{"attributes":{"plot":{"id":"ad738cb1-16da-4ca3-828d-a3928672b009","subtype":"Chart","type":"Plot"}},"id":"a8712daf-1250-4fb2-a2e2-44ff5a3f8b33","type":"ResetTool"},{"attributes":{},"id":"f5be4424-cfa7-4bcb-b2ad-8f9afdae4c2f","type":"BasicTicker"},{"attributes":{},"id":"41ddaad9-7a52-4a69-9669-469386e7f5b7","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,0.0,0.0,0.0,0.0,0.0,2.0,2.2,0.09090909090909091,1.3333333333333333,0.0,0.0,0.0],"x":[9,14,15,16,9,14,9,16,8,10,17,18,7],"y":["Monday","Monday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Thursday","Saturday","Saturday","Saturday","Saturday","Sunday"]}},"id":"cc7589bc-3fce-439c-9430-09d36ee16874","type":"ColumnDataSource"},{"attributes":{"child":{"id":"80918db0-e1cb-4a8d-b7ad-f265c57b681a","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"56123ad8-c187-4b09-83da-b8cb15cc9d66","type":"Panel"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"a05cdf81-7553-481d-8490-99aae6c4f814","type":"LinearColorMapper"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c6843f88-ac01-4871-956a-2d84c3421772","type":"Rect"},{"attributes":{"data_source":{"id":"2ef0a3d1-c86d-4dbe-ace6-43d71f73cfd8","type":"ColumnDataSource"},"glyph":{"id":"33ffae72-3388-4cd1-b50a-57c42f0ad008","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dde1c2ff-83d5-4b4c-bba9-ba7c958196af","type":"GlyphRenderer"},{"attributes":{},"id":"d061cd67-5b4f-4601-b49d-3d8d3e518e88","type":"BasicTicker"},{"attributes":{"data_source":{"id":"25398eba-9a8b-4f98-b2ad-06008e5cb9a2","type":"ColumnDataSource"},"glyph":{"id":"88e64ba0-4e25-4edf-9bc6-a8771e1014c5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"45186624-820c-4325-81df-c68d0451346d","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[14.535714285714286,13.371428571428572],"x":[11,13],"y":["Saturday","Sunday"]}},"id":"4638e4b2-3924-4569-bdbb-e3cb6708c10f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"8af04863-c8ed-467c-bb8b-3b34ebd74b63","type":"ColumnDataSource"},"glyph":{"id":"7339efd9-9c7d-4d1d-9831-13c00406502b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b6bb9245-f3f5-4327-a90d-7e5d0a1a776f","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e5cd6ed8-b489-4b9e-8dc3-495c6130935e","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[11.333333333333334,10.243243243243244,12.157894736842104,12.694444444444445,11.076923076923077],"x":[8,13,13,13,13],"y":["Tuesday","Tuesday","Wednesday","Thursday","Friday"]}},"id":"3ab6cb6f-5f63-4f09-85ba-b61276f61dc3","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"bcca7ebc-4243-4eb7-84d3-2a860e77e22a","type":"Rect"},{"attributes":{"data_source":{"id":"cd923bf9-fff2-4be7-a405-2538fcdef086","type":"ColumnDataSource"},"glyph":{"id":"a88b4beb-c6eb-4a2b-9184-657c40c666f3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"85fceaf3-6ddc-40f1-a4b8-179dd04d025f","type":"GlyphRenderer"},{"attributes":{"child":{"id":"ad738cb1-16da-4ca3-828d-a3928672b009","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"ae08297d-cd6f-420e-b580-0f66bb483b41","type":"Panel"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"67713ac6-1de1-4069-8001-8f47e0dda440","type":"Rect"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"05f8888b-ac4e-412e-b932-9c81ce583808","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"ad738cb1-16da-4ca3-828d-a3928672b009","subtype":"Chart","type":"Plot"},"ticker":{"id":"b8d3a466-301d-496b-9d76-a0c4c58d940d","type":"CategoricalTicker"}},"id":"3bf0acd1-f440-4529-b1bf-d5d67dd9a019","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[11.333333333333334,10.243243243243244,12.157894736842104,12.694444444444445,11.076923076923077],"x":[8,13,13,13,13],"y":["Tuesday","Tuesday","Wednesday","Thursday","Friday"]}},"id":"c6c67a6b-747d-461e-9a98-691895814008","type":"ColumnDataSource"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"ac4aa542-eb12-4f5d-8265-7db83bffc79e","type":"LinearColorMapper"},{"attributes":{"plot":{"id":"80918db0-e1cb-4a8d-b7ad-f265c57b681a","subtype":"Chart","type":"Plot"}},"id":"394d3363-9911-4339-b354-46a377e6b6c8","type":"PanTool"},{"attributes":{"plot":{"id":"80918db0-e1cb-4a8d-b7ad-f265c57b681a","subtype":"Chart","type":"Plot"}},"id":"660e9274-23d2-4976-ac58-41de0c7a3539","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d019947c-bcd8-4344-9847-8c50d64f33e5","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"a4841f08-c007-415c-9a0f-4b84938bdbe7","type":"ColumnDataSource"},"glyph":{"id":"c6843f88-ac01-4871-956a-2d84c3421772","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0b8f17d5-73fa-4745-b8b1-0d4ca28b48ef","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7339efd9-9c7d-4d1d-9831-13c00406502b","type":"Rect"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"70b8a671-009b-43ad-b7b7-767b0a888ac9","type":"Title"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4ae6e135-ffb5-4870-88c2-6fafa2afc7f8","type":"Rect"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"30938df2-d5f0-4c3c-8a43-b854808c7725","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[17.0,18.0625],"x":[9,15],"y":["Tuesday","Saturday"]}},"id":"bf5445e4-d00e-4c0f-b1ca-6a1531efb04a","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,28.0,30.0,30.0],"x":[15,15,16,15,16],"y":["Monday","Friday","Saturday","Sunday","Sunday"]}},"id":"25398eba-9a8b-4f98-b2ad-06008e5cb9a2","type":"ColumnDataSource"},{"attributes":{"callback":null,"tabs":[{"id":"ae08297d-cd6f-420e-b580-0f66bb483b41","type":"Panel"},{"id":"56123ad8-c187-4b09-83da-b8cb15cc9d66","type":"Panel"}]},"id":"06c3bfab-7cfa-42dd-8222-7a660fb5cbed","type":"Tabs"},{"attributes":{"data_source":{"id":"c6c67a6b-747d-461e-9a98-691895814008","type":"ColumnDataSource"},"glyph":{"id":"09389d4d-ae46-43f7-b32d-fed0011a6a4f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2cc89b85-e6c0-4f36-9936-dac25d60aa29","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"80918db0-e1cb-4a8d-b7ad-f265c57b681a","subtype":"Chart","type":"Plot"}},"id":"c0b49fc3-0cca-4886-8147-1a1c24e2d3a5","type":"HelpTool"},{"attributes":{},"id":"05f8888b-ac4e-412e-b932-9c81ce583808","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[22.583333333333332,20.5,23.0],"x":[13,14,16],"y":["Monday","Tuesday","Friday"]}},"id":"b0ea4af8-980f-4d4e-843f-b55e996058f2","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4638e4b2-3924-4569-bdbb-e3cb6708c10f","type":"ColumnDataSource"},"glyph":{"id":"4ae6e135-ffb5-4870-88c2-6fafa2afc7f8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"eeb6e5b7-a5b3-44a7-83a6-4f6a522e0713","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"d5896b10-0a22-487a-804a-05da2911c065","type":"ColumnDataSource"},"glyph":{"id":"dfd232f5-231a-4e2e-9ff1-8291a339681c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d60c17aa-96d7-4061-b1e9-8bed2c688c77","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[17.0,18.0625],"x":[9,15],"y":["Tuesday","Saturday"]}},"id":"cd923bf9-fff2-4be7-a405-2538fcdef086","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6171f19f-9717-4ee7-8453-11b9faf431b9","type":"PanTool"},{"id":"759e7547-93db-4cc0-a5d8-9ffd9f964a4b","type":"WheelZoomTool"},{"id":"48258cfe-1591-4039-8463-2676d9ca1e64","type":"BoxZoomTool"},{"id":"97de691b-f3ce-4427-b30f-8d7c3b398cf0","type":"SaveTool"},{"id":"a8712daf-1250-4fb2-a2e2-44ff5a3f8b33","type":"ResetTool"},{"id":"c2c76fc1-c343-4b4c-8cb3-c81476c53aae","type":"HelpTool"}]},"id":"9b48b1ca-16c8-4e99-a801-96d91f12e09e","type":"Toolbar"},{"attributes":{},"id":"4a38b18c-4c7b-46c5-b3bd-69d0c6556f1c","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"691349b7-583d-4155-beb1-57f0fe082300","type":"BasicTickFormatter"},"plot":{"id":"80918db0-e1cb-4a8d-b7ad-f265c57b681a","subtype":"Chart","type":"Plot"},"ticker":{"id":"939d23c8-c57b-4799-a5e5-32289d157487","type":"BasicTicker"}},"id":"bb06a8e4-e735-44bc-b356-00c191721716","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,0.0,0.0,0.0,0.0,0.0,2.0,2.2,0.09090909090909091,1.3333333333333333,0.0,0.0,0.0],"x":[9,14,15,16,9,14,9,16,8,10,17,18,7],"y":["Monday","Monday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Thursday","Saturday","Saturday","Saturday","Saturday","Sunday"]}},"id":"2cd8e6cf-fb6f-4612-8f8a-aecb6b3325e8","type":"ColumnDataSource"},{"attributes":{},"id":"4437b65e-a33c-429e-a20f-0c24ca266d75","type":"CategoricalTickFormatter"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"e1ab1e2f-b448-4d2d-bfaa-667d80ae75db","type":"LinearAxis"}],"left":[{"id":"3bf0acd1-f440-4529-b1bf-d5d67dd9a019","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"d019947c-bcd8-4344-9847-8c50d64f33e5","type":"BoxAnnotation"},{"id":"0b8f17d5-73fa-4745-b8b1-0d4ca28b48ef","type":"GlyphRenderer"},{"id":"a5ec14b5-f51f-4cdc-9edb-8e81fd6cb4b2","type":"GlyphRenderer"},{"id":"28d25e37-7b78-468b-a8e5-a427ff68e89b","type":"GlyphRenderer"},{"id":"eeb6e5b7-a5b3-44a7-83a6-4f6a522e0713","type":"GlyphRenderer"},{"id":"40f4511d-f91f-42f0-a300-6609a1d3bab3","type":"GlyphRenderer"},{"id":"7fc9b00e-76e4-4925-8539-457c959a7a14","type":"GlyphRenderer"},{"id":"b6bb9245-f3f5-4327-a90d-7e5d0a1a776f","type":"GlyphRenderer"},{"id":"f17e0f9c-7d60-477f-ab30-cafea7d550f3","type":"GlyphRenderer"},{"id":"e1ab1e2f-b448-4d2d-bfaa-667d80ae75db","type":"LinearAxis"},{"id":"3bf0acd1-f440-4529-b1bf-d5d67dd9a019","type":"CategoricalAxis"},{"id":"7e94971e-74f1-40d2-963e-8f70cb0d07b6","type":"ColorBar"}],"right":[{"id":"7e94971e-74f1-40d2-963e-8f70cb0d07b6","type":"ColorBar"}],"title":{"id":"b355a98e-56f3-44fe-aca1-1a96bf79489f","type":"Title"},"tool_events":{"id":"8643eb7f-e9b4-4c29-b37d-1061f57951c5","type":"ToolEvents"},"toolbar":{"id":"9b48b1ca-16c8-4e99-a801-96d91f12e09e","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"a9dd91ff-394b-4a49-900c-c21129aeba82","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"48053569-f040-4d06-9484-f0d37e08a38e","type":"FactorRange"}},"id":"ad738cb1-16da-4ca3-828d-a3928672b009","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"ad738cb1-16da-4ca3-828d-a3928672b009","subtype":"Chart","type":"Plot"}},"id":"c2c76fc1-c343-4b4c-8cb3-c81476c53aae","type":"HelpTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"88e64ba0-4e25-4edf-9bc6-a8771e1014c5","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[9.25,9.0,9.0],"x":[16,15,14],"y":["Wednesday","Thursday","Sunday"]}},"id":"700eca10-af8f-4cf7-914c-3e42dc041e22","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2cd8e6cf-fb6f-4612-8f8a-aecb6b3325e8","type":"ColumnDataSource"},"glyph":{"id":"2730c842-95ac-418e-9bf4-49368e140390","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8caea647-ae61-494e-bfe8-8cd1c34bc51f","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"bf5445e4-d00e-4c0f-b1ca-6a1531efb04a","type":"ColumnDataSource"},"glyph":{"id":"70282bcf-02e2-4576-9293-45bdd1173852","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"28d25e37-7b78-468b-a8e5-a427ff68e89b","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"80918db0-e1cb-4a8d-b7ad-f265c57b681a","subtype":"Chart","type":"Plot"}},"id":"b4bd5c2c-c78f-4622-9243-9513993ed5e5","type":"SaveTool"},{"attributes":{"data_source":{"id":"1250460b-0155-430f-ada6-f0bdcd7b2aaf","type":"ColumnDataSource"},"glyph":{"id":"0def77d8-82fc-4dbb-82ae-65facc50e870","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7fc9b00e-76e4-4925-8539-457c959a7a14","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"09389d4d-ae46-43f7-b32d-fed0011a6a4f","type":"Rect"},{"attributes":{"data_source":{"id":"b0ea4af8-980f-4d4e-843f-b55e996058f2","type":"ColumnDataSource"},"glyph":{"id":"eda1945d-f1da-493b-81a8-f95e7bce1207","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a5ec14b5-f51f-4cdc-9edb-8e81fd6cb4b2","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"eda1945d-f1da-493b-81a8-f95e7bce1207","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"394d3363-9911-4339-b354-46a377e6b6c8","type":"PanTool"},{"id":"660e9274-23d2-4976-ac58-41de0c7a3539","type":"WheelZoomTool"},{"id":"2b648bc7-a297-4f05-b64c-c11f4ffa3d00","type":"BoxZoomTool"},{"id":"b4bd5c2c-c78f-4622-9243-9513993ed5e5","type":"SaveTool"},{"id":"a40ccbd3-d728-4e05-a6d7-0aa5e3d60699","type":"ResetTool"},{"id":"c0b49fc3-0cca-4886-8147-1a1c24e2d3a5","type":"HelpTool"}]},"id":"751f8e57-d105-4a66-8494-6ef30488f5a0","type":"Toolbar"},{"attributes":{"callback":null,"end":23},"id":"1e346005-3f04-4fa7-a7ce-a3c59194732d","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[3.7,4.6,4.95,3.5,3.8,3.7,5.0,5.514285714285714,4.25,4.6],"x":[8,16,8,15,8,8,9,9,14,8],"y":["Monday","Monday","Wednesday","Wednesday","Thursday","Friday","Friday","Saturday","Saturday","Sunday"]}},"id":"0ed1741b-33e4-421f-a40a-a90663461f30","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2730c842-95ac-418e-9bf4-49368e140390","type":"Rect"},{"attributes":{},"id":"e15a8455-a82d-48d8-bf6f-47aaa115c607","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[14.535714285714286,13.371428571428572],"x":[11,13],"y":["Saturday","Sunday"]}},"id":"d5896b10-0a22-487a-804a-05da2911c065","type":"ColumnDataSource"},{"attributes":{},"id":"78c2c579-6f14-4e1d-9cb1-592195139aa0","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"cc7589bc-3fce-439c-9430-09d36ee16874","type":"ColumnDataSource"},"glyph":{"id":"67713ac6-1de1-4069-8001-8f47e0dda440","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f17e0f9c-7d60-477f-ab30-cafea7d550f3","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"33ffae72-3388-4cd1-b50a-57c42f0ad008","type":"Rect"},{"attributes":{"overlay":{"id":"383f6661-7c88-443c-8d55-18f1f6ed39e9","type":"BoxAnnotation"},"plot":{"id":"80918db0-e1cb-4a8d-b7ad-f265c57b681a","subtype":"Chart","type":"Plot"}},"id":"2b648bc7-a297-4f05-b64c-c11f4ffa3d00","type":"BoxZoomTool"},{"attributes":{},"id":"efec183b-cc2c-4214-955f-4d453180a4a7","type":"ToolEvents"},{"attributes":{"data_source":{"id":"0ed1741b-33e4-421f-a40a-a90663461f30","type":"ColumnDataSource"},"glyph":{"id":"cd1950bf-1e35-4689-978d-b20718f41b6f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"807ee9e6-e43a-4c39-b81c-ee0572bf6985","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,28.0,30.0,30.0],"x":[15,15,16,15,16],"y":["Monday","Friday","Saturday","Sunday","Sunday"]}},"id":"a4841f08-c007-415c-9a0f-4b84938bdbe7","type":"ColumnDataSource"},{"attributes":{},"id":"939d23c8-c57b-4799-a5e5-32289d157487","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"70282bcf-02e2-4576-9293-45bdd1173852","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"383f6661-7c88-443c-8d55-18f1f6ed39e9","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"d019947c-bcd8-4344-9847-8c50d64f33e5","type":"BoxAnnotation"},"plot":{"id":"ad738cb1-16da-4ca3-828d-a3928672b009","subtype":"Chart","type":"Plot"}},"id":"48258cfe-1591-4039-8463-2676d9ca1e64","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"80918db0-e1cb-4a8d-b7ad-f265c57b681a","subtype":"Chart","type":"Plot"}},"id":"a40ccbd3-d728-4e05-a6d7-0aa5e3d60699","type":"ResetTool"},{"attributes":{"plot":{"id":"ad738cb1-16da-4ca3-828d-a3928672b009","subtype":"Chart","type":"Plot"}},"id":"6171f19f-9717-4ee7-8453-11b9faf431b9","type":"PanTool"},{"attributes":{"data_source":{"id":"700eca10-af8f-4cf7-914c-3e42dc041e22","type":"ColumnDataSource"},"glyph":{"id":"e5cd6ed8-b489-4b9e-8dc3-495c6130935e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"df9e337e-58d1-4c63-bc50-15301c3c4aa1","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[9.25,9.0,9.0],"x":[16,15,14],"y":["Wednesday","Thursday","Sunday"]}},"id":"1250460b-0155-430f-ada6-f0bdcd7b2aaf","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"ad738cb1-16da-4ca3-828d-a3928672b009","subtype":"Chart","type":"Plot"}},"id":"759e7547-93db-4cc0-a5d8-9ffd9f964a4b","type":"WheelZoomTool"},{"attributes":{"color_mapper":{"id":"a05cdf81-7553-481d-8490-99aae6c4f814","type":"LinearColorMapper"},"formatter":{"id":"4a38b18c-4c7b-46c5-b3bd-69d0c6556f1c","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"ad738cb1-16da-4ca3-828d-a3928672b009","subtype":"Chart","type":"Plot"},"ticker":{"id":"d061cd67-5b4f-4601-b49d-3d8d3e518e88","type":"BasicTicker"}},"id":"7e94971e-74f1-40d2-963e-8f70cb0d07b6","type":"ColorBar"},{"attributes":{"callback":null,"end":23},"id":"a9dd91ff-394b-4a49-900c-c21129aeba82","type":"Range1d"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"78c2c579-6f14-4e1d-9cb1-592195139aa0","type":"BasicTickFormatter"},"plot":{"id":"ad738cb1-16da-4ca3-828d-a3928672b009","subtype":"Chart","type":"Plot"},"ticker":{"id":"f5be4424-cfa7-4bcb-b2ad-8f9afdae4c2f","type":"BasicTicker"}},"id":"e1ab1e2f-b448-4d2d-bfaa-667d80ae75db","type":"LinearAxis"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"bb06a8e4-e735-44bc-b356-00c191721716","type":"LinearAxis"}],"left":[{"id":"36bcf194-048c-4dc4-93b8-d72c1995abf6","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"383f6661-7c88-443c-8d55-18f1f6ed39e9","type":"BoxAnnotation"},{"id":"45186624-820c-4325-81df-c68d0451346d","type":"GlyphRenderer"},{"id":"dde1c2ff-83d5-4b4c-bba9-ba7c958196af","type":"GlyphRenderer"},{"id":"85fceaf3-6ddc-40f1-a4b8-179dd04d025f","type":"GlyphRenderer"},{"id":"d60c17aa-96d7-4061-b1e9-8bed2c688c77","type":"GlyphRenderer"},{"id":"2cc89b85-e6c0-4f36-9936-dac25d60aa29","type":"GlyphRenderer"},{"id":"df9e337e-58d1-4c63-bc50-15301c3c4aa1","type":"GlyphRenderer"},{"id":"807ee9e6-e43a-4c39-b81c-ee0572bf6985","type":"GlyphRenderer"},{"id":"8caea647-ae61-494e-bfe8-8cd1c34bc51f","type":"GlyphRenderer"},{"id":"bb06a8e4-e735-44bc-b356-00c191721716","type":"LinearAxis"},{"id":"36bcf194-048c-4dc4-93b8-d72c1995abf6","type":"CategoricalAxis"},{"id":"1970e511-17b2-4c33-b944-20b51627e788","type":"ColorBar"}],"right":[{"id":"1970e511-17b2-4c33-b944-20b51627e788","type":"ColorBar"}],"title":{"id":"70b8a671-009b-43ad-b7b7-767b0a888ac9","type":"Title"},"tool_events":{"id":"efec183b-cc2c-4214-955f-4d453180a4a7","type":"ToolEvents"},"toolbar":{"id":"751f8e57-d105-4a66-8494-6ef30488f5a0","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"1e346005-3f04-4fa7-a7ce-a3c59194732d","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"30938df2-d5f0-4c3c-8a43-b854808c7725","type":"FactorRange"}},"id":"80918db0-e1cb-4a8d-b7ad-f265c57b681a","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"3ab6cb6f-5f63-4f09-85ba-b61276f61dc3","type":"ColumnDataSource"},"glyph":{"id":"bcca7ebc-4243-4eb7-84d3-2a860e77e22a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"40f4511d-f91f-42f0-a300-6609a1d3bab3","type":"GlyphRenderer"},{"attributes":{},"id":"691349b7-583d-4155-beb1-57f0fe082300","type":"BasicTickFormatter"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"48053569-f040-4d06-9484-f0d37e08a38e","type":"FactorRange"},{"attributes":{},"id":"c6ae2e3f-1608-4a12-aca0-0f2af7e05f2e","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"cd1950bf-1e35-4689-978d-b20718f41b6f","type":"Rect"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"4437b65e-a33c-429e-a20f-0c24ca266d75","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"80918db0-e1cb-4a8d-b7ad-f265c57b681a","subtype":"Chart","type":"Plot"},"ticker":{"id":"41ddaad9-7a52-4a69-9669-469386e7f5b7","type":"CategoricalTicker"}},"id":"36bcf194-048c-4dc4-93b8-d72c1995abf6","type":"CategoricalAxis"},{"attributes":{"color_mapper":{"id":"ac4aa542-eb12-4f5d-8265-7db83bffc79e","type":"LinearColorMapper"},"formatter":{"id":"c6ae2e3f-1608-4a12-aca0-0f2af7e05f2e","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"80918db0-e1cb-4a8d-b7ad-f265c57b681a","subtype":"Chart","type":"Plot"},"ticker":{"id":"e15a8455-a82d-48d8-bf6f-47aaa115c607","type":"BasicTicker"}},"id":"1970e511-17b2-4c33-b944-20b51627e788","type":"ColorBar"},{"attributes":{},"id":"8643eb7f-e9b4-4c29-b37d-1061f57951c5","type":"ToolEvents"},{"attributes":{},"id":"b8d3a466-301d-496b-9d76-a0c4c58d940d","type":"CategoricalTicker"}],"root_ids":["06c3bfab-7cfa-42dd-8222-7a660fb5cbed"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"2c6c1096-a65a-4b33-964e-8c65a7f55fbf","elementid":"8ef87725-a89b-436e-afb0-0c329f9ff2ad","modelid":"06c3bfab-7cfa-42dd-8222-7a660fb5cbed"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});