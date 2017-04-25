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
      };var element = document.getElementById("aa00deac-8e0f-4d5d-8b7a-64c2ebe2ab38");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'aa00deac-8e0f-4d5d-8b7a-64c2ebe2ab38' but no matching script tag was found. ")
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
                  var docs_json = {"3b0d5a2b-1ea1-421b-912b-ad8126f4d712":{"roots":{"references":[{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"66ed65d1-4357-4a37-a546-f6e2a5db6ff6","type":"Rect"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"a65ea88e-2b64-43f1-9ddb-7f5a91bfbc9b","type":"BasicTickFormatter"},"plot":{"id":"595069e4-7841-4f74-bb54-329728845f89","subtype":"Chart","type":"Plot"},"ticker":{"id":"3ffac60d-de7a-425a-9840-f057edee425e","type":"BasicTicker"}},"id":"02b14f9a-6841-4376-8c20-2bd315cfb8e0","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[26.5,23.5,24.666666666666668],"x":[13,21,22],"y":["Thursday","Thursday","Sunday"]}},"id":"dc7124e4-ec54-4703-901e-25b038ac018f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"c842eb25-fa59-4e78-a473-fc8609ce77fc","type":"ColumnDataSource"},"glyph":{"id":"4548312f-0735-4766-b272-e7fc2d97b5b6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"58a6341d-01b2-4b75-9bbc-d8387a6826d4","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1393c52e-6047-4020-8909-c541734a00d3","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[17.75,19.066666666666666,19.125,17.375],"x":[14,21,14,14],"y":["Tuesday","Tuesday","Wednesday","Friday"]}},"id":"c842eb25-fa59-4e78-a473-fc8609ce77fc","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4548312f-0735-4766-b272-e7fc2d97b5b6","type":"Rect"},{"attributes":{},"id":"3ffac60d-de7a-425a-9840-f057edee425e","type":"BasicTicker"},{"attributes":{},"id":"d84ee535-03fc-499b-90c1-66390157b422","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"cc037b37-54e2-4f6b-bfbd-09b2e54e08d4","type":"ColumnDataSource"},"glyph":{"id":"48ca232e-6afb-44bd-ac8a-d3eb1d72a4c9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2e598807-cc2f-4596-8245-319456cf9b55","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[26.5,23.5,24.666666666666668],"x":[13,21,22],"y":["Thursday","Thursday","Sunday"]}},"id":"332fec91-25aa-4a3f-b80a-789caa8a1284","type":"ColumnDataSource"},{"attributes":{},"id":"3724fc5f-4d8a-4fd4-8fc5-0fbead04483b","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[15.8,14.5,15.875,16.6],"x":[21,11,14,11],"y":["Monday","Wednesday","Thursday","Friday"]}},"id":"ae2e5b97-d939-4a2c-bce1-634112ae9ac2","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[23.307692307692307,23.333333333333332],"x":[13,21],"y":["Monday","Saturday"]}},"id":"65d0c67c-56ff-4fba-a3f2-c188922731fd","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"36308f02-6593-46b5-ad6a-b96dec91847d","type":"Title"},{"attributes":{"data_source":{"id":"b8b86f4e-453a-4b6b-b189-1c2b43735c3b","type":"ColumnDataSource"},"glyph":{"id":"1d400415-33c4-43b1-9b72-eeba8134ddfa","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0527c295-22a6-4c92-a865-dd4f5544f0f4","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"d7ee482f-c31a-4681-8d9f-ca65a661dd8e","type":"BoxAnnotation"},"plot":{"id":"595069e4-7841-4f74-bb54-329728845f89","subtype":"Chart","type":"Plot"}},"id":"0ca09fa4-3a63-4e0d-b424-ddae8b202862","type":"BoxZoomTool"},{"attributes":{"child":{"id":"595069e4-7841-4f74-bb54-329728845f89","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"8738ae26-bbe5-452c-86ee-01209deb8924","type":"Panel"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"ab7a7087-66bc-4780-8aad-06d5c465f773","type":"BasicTickFormatter"},"plot":{"id":"cb27a980-f25f-430c-8a71-c85fe8286e5c","subtype":"Chart","type":"Plot"},"ticker":{"id":"5456d0ed-d6d0-43f5-8a38-8867ac8108d5","type":"BasicTicker"}},"id":"4b2836ff-e0d0-498a-8630-71eae95a7a8e","type":"LinearAxis"},{"attributes":{"data_source":{"id":"00e1fc12-1839-43e3-b57a-ad32f7abbeb6","type":"ColumnDataSource"},"glyph":{"id":"1a6d13af-5f81-4940-8129-998449f2164c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5dc7b361-5264-45f8-a7cd-dadf41be15f1","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"7e61781d-262c-45ef-9222-d0428b26ead2","type":"ColumnDataSource"},"glyph":{"id":"32a943bb-4aad-4a2b-9317-309aaa0a3491","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6ec8af2a-b3fc-4dcf-8ab4-5c69f080369d","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"595069e4-7841-4f74-bb54-329728845f89","subtype":"Chart","type":"Plot"}},"id":"feb31734-4fd7-468b-8362-1be9a9b53ada","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[23.307692307692307,23.333333333333332],"x":[13,21],"y":["Monday","Saturday"]}},"id":"55ec00d4-0808-46b1-9fbe-cebe614879c5","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"cb27a980-f25f-430c-8a71-c85fe8286e5c","subtype":"Chart","type":"Plot"}},"id":"0967d7fe-29e2-4785-9151-05d2a47a2fb6","type":"HelpTool"},{"attributes":{},"id":"a65ea88e-2b64-43f1-9ddb-7f5a91bfbc9b","type":"BasicTickFormatter"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"08d14c77-a8b3-44fc-a227-7b4935886573","type":"FactorRange"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"b39ab00d-3c85-44d0-a5aa-be94b8f78b04","type":"FactorRange"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"32a943bb-4aad-4a2b-9317-309aaa0a3491","type":"Rect"},{"attributes":{"data_source":{"id":"65d0c67c-56ff-4fba-a3f2-c188922731fd","type":"ColumnDataSource"},"glyph":{"id":"507a47d8-9e08-49ea-b3d7-b9ff4275b8e8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"64e8a4ce-54ff-43a2-814f-0bbe52e66969","type":"GlyphRenderer"},{"attributes":{},"id":"5456d0ed-d6d0-43f5-8a38-8867ac8108d5","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"33797fc9-31b1-4117-81ff-dc43b33ed720","type":"PanTool"},{"id":"fcc4f91e-b5ba-4feb-96e9-063024affd0c","type":"WheelZoomTool"},{"id":"0776bb57-24b7-41d0-9859-4c697fc1efbf","type":"BoxZoomTool"},{"id":"462945ad-3229-47f8-ac23-f59d5d74d30e","type":"SaveTool"},{"id":"2fe4e06c-1189-472e-9787-61940a5171d0","type":"ResetTool"},{"id":"0967d7fe-29e2-4785-9151-05d2a47a2fb6","type":"HelpTool"}]},"id":"19d3832b-b357-4b00-a653-4da4274babf3","type":"Toolbar"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"c4d9fc1d-6837-4ae1-a0f3-d1349d1e6ede","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"cb27a980-f25f-430c-8a71-c85fe8286e5c","subtype":"Chart","type":"Plot"},"ticker":{"id":"d359e578-606a-4ced-8f98-14925397f7b3","type":"CategoricalTicker"}},"id":"54ecffe8-2f40-4d28-8fc3-fb01253af075","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"595069e4-7841-4f74-bb54-329728845f89","subtype":"Chart","type":"Plot"}},"id":"7fbf2478-5b51-4f43-9674-da70f9190eca","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[6.0,5.0,4.833333333333333,4.916666666666667,6.241379310344827,4.125,4.714285714285714,6.666666666666667,5.962962962962963],"x":[14,16,16,13,21,10,14,16,21],"y":["Monday","Tuesday","Wednesday","Friday","Friday","Saturday","Sunday","Sunday","Sunday"]}},"id":"b8b86f4e-453a-4b6b-b189-1c2b43735c3b","type":"ColumnDataSource"},{"attributes":{},"id":"ab7a7087-66bc-4780-8aad-06d5c465f773","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d8e640c5-ea2d-44cc-bd36-335f4b530913","type":"BoxAnnotation"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"48ca232e-6afb-44bd-ac8a-d3eb1d72a4c9","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"507a47d8-9e08-49ea-b3d7-b9ff4275b8e8","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[17.75,19.066666666666666,19.125,17.375],"x":[14,21,14,14],"y":["Tuesday","Tuesday","Wednesday","Friday"]}},"id":"4a9cc00c-22a0-42e7-9c7f-b6af9622151d","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,0.5,0.0,0.0,0.0,0.0,0.0,2.5,0.0,0.0,1.6666666666666667,3.3333333333333335,3.0,0.0,0.0,0.0],"x":[10,16,22,10,22,10,22,16,17,20,13,17,20,10,11,17],"y":["Monday","Monday","Monday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Saturday","Saturday","Saturday","Sunday","Sunday","Sunday"]}},"id":"3ddc54d5-ccd1-4640-a71a-64c1347b0781","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"cb27a980-f25f-430c-8a71-c85fe8286e5c","subtype":"Chart","type":"Plot"}},"id":"33797fc9-31b1-4117-81ff-dc43b33ed720","type":"PanTool"},{"attributes":{"color_mapper":{"id":"05d43b92-192d-4cf6-9ae8-57d60e7e556b","type":"LinearColorMapper"},"formatter":{"id":"2b1cc323-78c2-4cad-9fe5-1470f0c29e3b","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"595069e4-7841-4f74-bb54-329728845f89","subtype":"Chart","type":"Plot"},"ticker":{"id":"3724fc5f-4d8a-4fd4-8fc5-0fbead04483b","type":"BasicTicker"}},"id":"51da3ce1-3411-4ab7-8811-29fe1c6333ab","type":"ColorBar"},{"attributes":{"data_source":{"id":"dc7124e4-ec54-4703-901e-25b038ac018f","type":"ColumnDataSource"},"glyph":{"id":"4c823f39-38cd-4f5d-a3bc-78870c109c14","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2343f989-1aff-4b6e-a872-bb996b0fc32e","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"ae2e5b97-d939-4a2c-bce1-634112ae9ac2","type":"ColumnDataSource"},"glyph":{"id":"0b00fb2c-5145-4826-a77b-8551524d6240","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a9f806c4-77a1-487d-8bf5-6f6ac592f1c8","type":"GlyphRenderer"},{"attributes":{},"id":"c4d9fc1d-6837-4ae1-a0f3-d1349d1e6ede","type":"CategoricalTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c831339c-9f24-4a73-b99f-7e2d1a8276bd","type":"Rect"},{"attributes":{"data_source":{"id":"97aa04ea-2153-480e-86d3-389c3629b41f","type":"ColumnDataSource"},"glyph":{"id":"4b4bd27e-1a7b-4c6e-af85-64bb8f9602a4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f12437cd-4910-4804-a9bd-4222bde93ba2","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3b786e8b-6ba5-4819-80db-46a5f9e0a501","type":"Rect"},{"attributes":{"plot":{"id":"595069e4-7841-4f74-bb54-329728845f89","subtype":"Chart","type":"Plot"}},"id":"c02acd0c-ef03-4db2-976d-c3170f19d76d","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.2,8.0,9.214285714285714,9.4,7.5,9.916666666666666,7.0,8.384615384615385],"x":[11,11,21,11,16,9,16,13],"y":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Saturday","Sunday"]}},"id":"781421ad-44d4-4c62-b2ea-1cd95ce5b6d9","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"302d2490-970a-4a03-badb-4f9577fe80b4","type":"PanTool"},{"id":"c02acd0c-ef03-4db2-976d-c3170f19d76d","type":"WheelZoomTool"},{"id":"0ca09fa4-3a63-4e0d-b424-ddae8b202862","type":"BoxZoomTool"},{"id":"1796a34b-d641-45ab-84d1-dc043a449f5d","type":"SaveTool"},{"id":"feb31734-4fd7-468b-8362-1be9a9b53ada","type":"ResetTool"},{"id":"7fbf2478-5b51-4f43-9674-da70f9190eca","type":"HelpTool"}]},"id":"dee5c799-bee7-4df2-af2d-df17b4f60486","type":"Toolbar"},{"attributes":{"callback":null,"end":23},"id":"9e94911d-7437-459c-87b9-59a5993ea8ac","type":"Range1d"},{"attributes":{"callback":null,"tabs":[{"id":"b7ad5081-20fa-4c98-95a0-2c01843bf5fc","type":"Panel"},{"id":"8738ae26-bbe5-452c-86ee-01209deb8924","type":"Panel"}]},"id":"83ef61af-62a7-4a3d-b9f4-c4222c6571a4","type":"Tabs"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"4b913071-5e8d-4962-8fc7-9ec9934dffb8","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d7ee482f-c31a-4681-8d9f-ca65a661dd8e","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"cb27a980-f25f-430c-8a71-c85fe8286e5c","subtype":"Chart","type":"Plot"}},"id":"462945ad-3229-47f8-ac23-f59d5d74d30e","type":"SaveTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"02b14f9a-6841-4376-8c20-2bd315cfb8e0","type":"LinearAxis"}],"left":[{"id":"a50b3bec-dcd7-45f9-8ef6-7fc3a235b881","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"d7ee482f-c31a-4681-8d9f-ca65a661dd8e","type":"BoxAnnotation"},{"id":"6ec8af2a-b3fc-4dcf-8ab4-5c69f080369d","type":"GlyphRenderer"},{"id":"122a4ed5-b296-489e-bd36-5080556fb348","type":"GlyphRenderer"},{"id":"458858a0-3d56-4385-8450-0360fa42203c","type":"GlyphRenderer"},{"id":"b9890a0e-4568-47a1-9035-4f82a813c26a","type":"GlyphRenderer"},{"id":"6cf02311-6665-4e6a-a29d-8e72d1fd9e8c","type":"GlyphRenderer"},{"id":"5dc7b361-5264-45f8-a7cd-dadf41be15f1","type":"GlyphRenderer"},{"id":"f12437cd-4910-4804-a9bd-4222bde93ba2","type":"GlyphRenderer"},{"id":"5daad691-8ec0-4442-94b3-c6d43e858a39","type":"GlyphRenderer"},{"id":"2e598807-cc2f-4596-8245-319456cf9b55","type":"GlyphRenderer"},{"id":"02b14f9a-6841-4376-8c20-2bd315cfb8e0","type":"LinearAxis"},{"id":"a50b3bec-dcd7-45f9-8ef6-7fc3a235b881","type":"CategoricalAxis"},{"id":"51da3ce1-3411-4ab7-8811-29fe1c6333ab","type":"ColorBar"}],"right":[{"id":"51da3ce1-3411-4ab7-8811-29fe1c6333ab","type":"ColorBar"}],"title":{"id":"4b913071-5e8d-4962-8fc7-9ec9934dffb8","type":"Title"},"tool_events":{"id":"a831de00-20f2-4e32-a1d7-042f49b656f0","type":"ToolEvents"},"toolbar":{"id":"dee5c799-bee7-4df2-af2d-df17b4f60486","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"a9893445-b25c-472a-b3fe-ece40f072708","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"08d14c77-a8b3-44fc-a227-7b4935886573","type":"FactorRange"}},"id":"595069e4-7841-4f74-bb54-329728845f89","subtype":"Chart","type":"Plot"},{"attributes":{"child":{"id":"cb27a980-f25f-430c-8a71-c85fe8286e5c","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"b7ad5081-20fa-4c98-95a0-2c01843bf5fc","type":"Panel"},{"attributes":{"color_mapper":{"id":"9a6c4eed-9cbc-4daa-9387-3ecb0f02247a","type":"LinearColorMapper"},"formatter":{"id":"7b273145-1c7c-4fc1-9538-fc5127efc2bc","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"cb27a980-f25f-430c-8a71-c85fe8286e5c","subtype":"Chart","type":"Plot"},"ticker":{"id":"2b24f55f-5f08-4d1a-b241-2c7134bde2c9","type":"BasicTicker"}},"id":"1d62ba30-b713-4e38-bae2-1b05aa956cc6","type":"ColorBar"},{"attributes":{},"id":"7b273145-1c7c-4fc1-9538-fc5127efc2bc","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4c823f39-38cd-4f5d-a3bc-78870c109c14","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1a6d13af-5f81-4940-8129-998449f2164c","type":"Rect"},{"attributes":{"data_source":{"id":"3ddc54d5-ccd1-4640-a71a-64c1347b0781","type":"ColumnDataSource"},"glyph":{"id":"c831339c-9f24-4a73-b99f-7e2d1a8276bd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"62b6c412-034a-4efd-9701-89b23078072f","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"003d654f-02a8-4a73-ae88-c3ad13b13d8f","type":"ColumnDataSource"},"glyph":{"id":"3b786e8b-6ba5-4819-80db-46a5f9e0a501","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4d149eae-7d29-4d70-b9c0-3cfd0b22a84d","type":"GlyphRenderer"},{"attributes":{},"id":"d359e578-606a-4ced-8f98-14925397f7b3","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[15.8,14.5,15.875,16.6],"x":[21,11,14,11],"y":["Monday","Wednesday","Thursday","Friday"]}},"id":"d782516a-8359-4a92-b5f2-369cae341f98","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4b4bd27e-1a7b-4c6e-af85-64bb8f9602a4","type":"Rect"},{"attributes":{"data_source":{"id":"4a9cc00c-22a0-42e7-9c7f-b6af9622151d","type":"ColumnDataSource"},"glyph":{"id":"b5a3c1f4-211e-4ec1-89a0-90669f9075bc","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b9890a0e-4568-47a1-9035-4f82a813c26a","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6203c18e-9b48-453f-91fd-b7fa2a33bbef","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b5a3c1f4-211e-4ec1-89a0-90669f9075bc","type":"Rect"},{"attributes":{"plot":{"id":"cb27a980-f25f-430c-8a71-c85fe8286e5c","subtype":"Chart","type":"Plot"}},"id":"fcc4f91e-b5ba-4feb-96e9-063024affd0c","type":"WheelZoomTool"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"05d43b92-192d-4cf6-9ae8-57d60e7e556b","type":"LinearColorMapper"},{"attributes":{"overlay":{"id":"d8e640c5-ea2d-44cc-bd36-335f4b530913","type":"BoxAnnotation"},"plot":{"id":"cb27a980-f25f-430c-8a71-c85fe8286e5c","subtype":"Chart","type":"Plot"}},"id":"0776bb57-24b7-41d0-9859-4c697fc1efbf","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"595069e4-7841-4f74-bb54-329728845f89","subtype":"Chart","type":"Plot"}},"id":"302d2490-970a-4a03-badb-4f9577fe80b4","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0],"x":[13],"y":["Wednesday"]}},"id":"0edb2872-4073-458f-b9d8-e532fea27700","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"89035eca-cfb5-4f82-86e6-dbff92d6d513","type":"ColumnDataSource"},"glyph":{"id":"1393c52e-6047-4020-8909-c541734a00d3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5daad691-8ec0-4442-94b3-c6d43e858a39","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"332fec91-25aa-4a3f-b80a-789caa8a1284","type":"ColumnDataSource"},"glyph":{"id":"9093a70f-2f86-4774-a7d0-3a0048c00b54","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"122a4ed5-b296-489e-bd36-5080556fb348","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"cb27a980-f25f-430c-8a71-c85fe8286e5c","subtype":"Chart","type":"Plot"}},"id":"2fe4e06c-1189-472e-9787-61940a5171d0","type":"ResetTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"4b2836ff-e0d0-498a-8630-71eae95a7a8e","type":"LinearAxis"}],"left":[{"id":"54ecffe8-2f40-4d28-8fc3-fb01253af075","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"d8e640c5-ea2d-44cc-bd36-335f4b530913","type":"BoxAnnotation"},{"id":"78eb4491-d4d7-4a59-b9c5-4467f3d4e19c","type":"GlyphRenderer"},{"id":"2343f989-1aff-4b6e-a872-bb996b0fc32e","type":"GlyphRenderer"},{"id":"64e8a4ce-54ff-43a2-814f-0bbe52e66969","type":"GlyphRenderer"},{"id":"58a6341d-01b2-4b75-9bbc-d8387a6826d4","type":"GlyphRenderer"},{"id":"a9f806c4-77a1-487d-8bf5-6f6ac592f1c8","type":"GlyphRenderer"},{"id":"4d149eae-7d29-4d70-b9c0-3cfd0b22a84d","type":"GlyphRenderer"},{"id":"6088aa43-f519-4397-8199-f00533f6310a","type":"GlyphRenderer"},{"id":"0527c295-22a6-4c92-a865-dd4f5544f0f4","type":"GlyphRenderer"},{"id":"62b6c412-034a-4efd-9701-89b23078072f","type":"GlyphRenderer"},{"id":"4b2836ff-e0d0-498a-8630-71eae95a7a8e","type":"LinearAxis"},{"id":"54ecffe8-2f40-4d28-8fc3-fb01253af075","type":"CategoricalAxis"},{"id":"1d62ba30-b713-4e38-bae2-1b05aa956cc6","type":"ColorBar"}],"right":[{"id":"1d62ba30-b713-4e38-bae2-1b05aa956cc6","type":"ColorBar"}],"title":{"id":"36308f02-6593-46b5-ad6a-b96dec91847d","type":"Title"},"tool_events":{"id":"674a4439-a873-4668-82a7-ca7955073191","type":"ToolEvents"},"toolbar":{"id":"19d3832b-b357-4b00-a653-4da4274babf3","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"9e94911d-7437-459c-87b9-59a5993ea8ac","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"b39ab00d-3c85-44d0-a5aa-be94b8f78b04","type":"FactorRange"}},"id":"cb27a980-f25f-430c-8a71-c85fe8286e5c","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"d782516a-8359-4a92-b5f2-369cae341f98","type":"ColumnDataSource"},"glyph":{"id":"daf9eb27-b56d-4b82-8886-a1ef2c49a43f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6cf02311-6665-4e6a-a29d-8e72d1fd9e8c","type":"GlyphRenderer"},{"attributes":{},"id":"a831de00-20f2-4e32-a1d7-042f49b656f0","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[6.0,5.0,4.833333333333333,4.916666666666667,6.241379310344827,4.125,4.714285714285714,6.666666666666667,5.962962962962963],"x":[14,16,16,13,21,10,14,16,21],"y":["Monday","Tuesday","Wednesday","Friday","Friday","Saturday","Sunday","Sunday","Sunday"]}},"id":"89035eca-cfb5-4f82-86e6-dbff92d6d513","type":"ColumnDataSource"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"c510e70a-cc84-4d43-8688-92c71127507b","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"595069e4-7841-4f74-bb54-329728845f89","subtype":"Chart","type":"Plot"},"ticker":{"id":"d84ee535-03fc-499b-90c1-66390157b422","type":"CategoricalTicker"}},"id":"a50b3bec-dcd7-45f9-8ef6-7fc3a235b881","type":"CategoricalAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0b00fb2c-5145-4826-a77b-8551524d6240","type":"Rect"},{"attributes":{},"id":"c510e70a-cc84-4d43-8688-92c71127507b","type":"CategoricalTickFormatter"},{"attributes":{},"id":"2b1cc323-78c2-4cad-9fe5-1470f0c29e3b","type":"BasicTickFormatter"},{"attributes":{},"id":"2b24f55f-5f08-4d1a-b241-2c7134bde2c9","type":"BasicTicker"},{"attributes":{"data_source":{"id":"55ec00d4-0808-46b1-9fbe-cebe614879c5","type":"ColumnDataSource"},"glyph":{"id":"6203c18e-9b48-453f-91fd-b7fa2a33bbef","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"458858a0-3d56-4385-8450-0360fa42203c","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,0.5,0.0,0.0,0.0,0.0,0.0,2.5,0.0,0.0,1.6666666666666667,3.3333333333333335,3.0,0.0,0.0,0.0],"x":[10,16,22,10,22,10,22,16,17,20,13,17,20,10,11,17],"y":["Monday","Monday","Monday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Saturday","Saturday","Saturday","Sunday","Sunday","Sunday"]}},"id":"cc037b37-54e2-4f6b-bfbd-09b2e54e08d4","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[12.846153846153847],"x":[13],"y":["Tuesday"]}},"id":"003d654f-02a8-4a73-ae88-c3ad13b13d8f","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"daf9eb27-b56d-4b82-8886-a1ef2c49a43f","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[12.846153846153847],"x":[13],"y":["Tuesday"]}},"id":"00e1fc12-1839-43e3-b57a-ad32f7abbeb6","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"dd18d51a-d5cb-48bc-8820-4615a84072ff","type":"Rect"},{"attributes":{"plot":{"id":"595069e4-7841-4f74-bb54-329728845f89","subtype":"Chart","type":"Plot"}},"id":"1796a34b-d641-45ab-84d1-dc043a449f5d","type":"SaveTool"},{"attributes":{},"id":"674a4439-a873-4668-82a7-ca7955073191","type":"ToolEvents"},{"attributes":{"data_source":{"id":"0edb2872-4073-458f-b9d8-e532fea27700","type":"ColumnDataSource"},"glyph":{"id":"66ed65d1-4357-4a37-a546-f6e2a5db6ff6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"78eb4491-d4d7-4a59-b9c5-4467f3d4e19c","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.2,8.0,9.214285714285714,9.4,7.5,9.916666666666666,7.0,8.384615384615385],"x":[11,11,21,11,16,9,16,13],"y":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Saturday","Sunday"]}},"id":"97aa04ea-2153-480e-86d3-389c3629b41f","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1d400415-33c4-43b1-9b72-eeba8134ddfa","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0],"x":[13],"y":["Wednesday"]}},"id":"7e61781d-262c-45ef-9222-d0428b26ead2","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"781421ad-44d4-4c62-b2ea-1cd95ce5b6d9","type":"ColumnDataSource"},"glyph":{"id":"dd18d51a-d5cb-48bc-8820-4615a84072ff","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6088aa43-f519-4397-8199-f00533f6310a","type":"GlyphRenderer"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"9a6c4eed-9cbc-4daa-9387-3ecb0f02247a","type":"LinearColorMapper"},{"attributes":{"callback":null,"end":23},"id":"a9893445-b25c-472a-b3fe-ece40f072708","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9093a70f-2f86-4774-a7d0-3a0048c00b54","type":"Rect"}],"root_ids":["83ef61af-62a7-4a3d-b9f4-c4222c6571a4"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"3b0d5a2b-1ea1-421b-912b-ad8126f4d712","elementid":"aa00deac-8e0f-4d5d-8b7a-64c2ebe2ab38","modelid":"83ef61af-62a7-4a3d-b9f4-c4222c6571a4"}];
                  
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