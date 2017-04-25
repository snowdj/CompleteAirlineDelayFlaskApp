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
      };var element = document.getElementById("fc658aa4-9c0a-43e2-a060-783152a8bb8d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fc658aa4-9c0a-43e2-a060-783152a8bb8d' but no matching script tag was found. ")
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
                  var docs_json = {"825245ef-bc74-40ec-916e-457e27cc2444":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,3.2,1.2,0.0,2.2857142857142856,0.0,2.3846153846153846,1.5,0.6,0.6923076923076923,0.0,2.8,2.2222222222222223,0.25,0.0,0.0,0.6,1.2142857142857142],"x":[11,15,17,15,19,11,19,11,17,19,9,10,11,17,18,11,15,19],"y":["Monday","Monday","Monday","Wednesday","Wednesday","Thursday","Thursday","Friday","Friday","Friday","Saturday","Saturday","Saturday","Saturday","Saturday","Sunday","Sunday","Sunday"]}},"id":"0165ba95-1c46-4a05-b810-a38fb2071b4d","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[20.0,17.928571428571427,19.6,20.0],"x":[15,18,8,12],"y":["Tuesday","Thursday","Saturday","Saturday"]}},"id":"3ae5c162-1f73-482a-952d-7f5d98884365","type":"ColumnDataSource"},{"attributes":{},"id":"2f84faff-09f0-41d4-a500-1445ecfaf161","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"a108301e-3e6d-415f-80fd-37c892bf83b7","type":"ColumnDataSource"},"glyph":{"id":"a19fafb0-c217-4b20-8dba-cab43632c78d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"75a18852-fd10-4bd1-bd08-1e0787f3d2ae","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"37218f05-7577-448d-b5c6-b3e0a7c1ff71","type":"ColumnDataSource"},"glyph":{"id":"b8a4af63-5e0f-49c2-ae08-29ca7edb3190","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ab6b9408-7537-409b-9b76-ada1e53d9d0d","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"c2825c3c-2891-46f3-92a9-9635e5d13620","subtype":"Chart","type":"Plot"}},"id":"ab87eb6c-4cb5-4110-88ea-9bae137c8d96","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"9c0d2d93-383d-4fd9-8b33-746d77b0fdef","type":"ColumnDataSource"},"glyph":{"id":"ee2ca5af-bc0b-4a62-806b-d71e185a350b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c5b8450e-cc62-4759-9641-b80568d69d38","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"0915e836-2b08-4346-ae51-2582ba1ed024","type":"ColumnDataSource"},"glyph":{"id":"5bd3fd75-d9c2-48fe-990b-9b73cc775a58","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0a4bac96-0a23-49b7-a002-cee2b2199c9d","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"c7d3e2d0-1886-4b38-bf00-2f42848561e1","subtype":"Chart","type":"Plot"}},"id":"ff4813a1-77cc-437a-9b8d-e2faf5530fa7","type":"HelpTool"},{"attributes":{"plot":{"id":"c7d3e2d0-1886-4b38-bf00-2f42848561e1","subtype":"Chart","type":"Plot"}},"id":"5843dfac-5436-4e66-988a-477b0f20eeed","type":"ResetTool"},{"attributes":{},"id":"185efe1a-a946-4567-8292-90db2009b34c","type":"CategoricalTicker"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"f35210e4-47d5-42e9-bd6b-349977159016","type":"LinearAxis"}],"left":[{"id":"0f2cae26-b22e-4823-a9cd-af13f3355ad5","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"ffd2003d-c7c9-4754-aa63-2b91601c1961","type":"BoxAnnotation"},{"id":"23d2a7e9-ab03-4ed2-b7bf-96144dc25fa1","type":"GlyphRenderer"},{"id":"9cbf4cc9-3ee8-4c96-886a-7bb9e60ac554","type":"GlyphRenderer"},{"id":"035f0c20-9059-4780-beab-dd9f5d5328f5","type":"GlyphRenderer"},{"id":"ab6b9408-7537-409b-9b76-ada1e53d9d0d","type":"GlyphRenderer"},{"id":"d9372f01-227e-4988-afc0-99f41eae9ed5","type":"GlyphRenderer"},{"id":"ef16950d-8eee-48ab-afac-46000c6657f2","type":"GlyphRenderer"},{"id":"75a18852-fd10-4bd1-bd08-1e0787f3d2ae","type":"GlyphRenderer"},{"id":"c5b8450e-cc62-4759-9641-b80568d69d38","type":"GlyphRenderer"},{"id":"478ebe12-cf18-4a03-b808-4258cc8b1013","type":"GlyphRenderer"},{"id":"f35210e4-47d5-42e9-bd6b-349977159016","type":"LinearAxis"},{"id":"0f2cae26-b22e-4823-a9cd-af13f3355ad5","type":"CategoricalAxis"},{"id":"f79e9ce3-0aa8-4d96-b482-d7ae5d0e9aff","type":"ColorBar"}],"right":[{"id":"f79e9ce3-0aa8-4d96-b482-d7ae5d0e9aff","type":"ColorBar"}],"title":{"id":"1ba74c54-a873-4813-8559-27efe25c7a61","type":"Title"},"tool_events":{"id":"470d4ede-364e-4d2c-a05f-539ed4351d63","type":"ToolEvents"},"toolbar":{"id":"0779e50c-0bd9-444d-a2c9-ac9230e3bf81","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"7b20ed9d-5e65-4f1f-b5ce-e32469a93652","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"cacd90a8-333c-431d-9287-9f6b08531411","type":"FactorRange"}},"id":"c2825c3c-2891-46f3-92a9-9635e5d13620","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"0ec0e6c4-2c3d-4c61-a177-be412df79962","type":"ColumnDataSource"},"glyph":{"id":"cb5166a9-8fd5-44c5-bbd1-245be22107d2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"478ebe12-cf18-4a03-b808-4258cc8b1013","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2694673c-ceb2-4e91-8838-e852f8b45f85","type":"ColumnDataSource"},"glyph":{"id":"2b4e0f30-569d-4de0-85ed-8037405f4c2c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9cbf4cc9-3ee8-4c96-886a-7bb9e60ac554","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[26.166666666666668],"x":[17],"y":["Wednesday"]}},"id":"793c08b9-5a4b-4bda-8d8a-5e79d74bb5da","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"843e647e-bf3f-46f0-9263-c33307435c38","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[28.2,30.0,30.0],"x":[15,19,17],"y":["Friday","Saturday","Sunday"]}},"id":"2b187f76-7556-432d-99c8-208ff7b100a6","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"0165ba95-1c46-4a05-b810-a38fb2071b4d","type":"ColumnDataSource"},"glyph":{"id":"44bd9b76-d937-4308-ba7d-4143e98e2653","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8a652d8d-1c72-4960-a9f4-52532a1c2226","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2b187f76-7556-432d-99c8-208ff7b100a6","type":"ColumnDataSource"},"glyph":{"id":"3a91eacc-0102-4065-81ec-3c710a188396","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"15e66d2d-94c6-4663-a1f6-0f7099fc1bf9","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a19fafb0-c217-4b20-8dba-cab43632c78d","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b8a4af63-5e0f-49c2-ae08-29ca7edb3190","type":"Rect"},{"attributes":{},"id":"3905968f-df8f-4ca4-a5a7-f5e9312dfc87","type":"BasicTicker"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"b574ccf2-9562-4a2a-98d6-ab9b840af8dc","type":"LinearColorMapper"},{"attributes":{},"id":"22924cc6-1110-4e5e-86d7-1ded4805c1f0","type":"CategoricalTicker"},{"attributes":{},"id":"0e96b5de-3272-4628-84ca-144c892986fd","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[15.538461538461538,15.666666666666666,14.333333333333334],"x":[18,17,11],"y":["Monday","Tuesday","Wednesday"]}},"id":"305771ec-2cdd-4776-98ea-f131db95a53f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"587046d8-c41a-455e-8565-b059751cc05b","type":"ColumnDataSource"},"glyph":{"id":"7adc5a0c-c4f1-43c6-a61b-829e55a594cb","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ef16950d-8eee-48ab-afac-46000c6657f2","type":"GlyphRenderer"},{"attributes":{},"id":"5641f2bc-cce1-4721-97a6-637a33aaad5b","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"c7d3e2d0-1886-4b38-bf00-2f42848561e1","subtype":"Chart","type":"Plot"}},"id":"1d7c8be5-065b-46be-b7a5-b8d8b4a9bd9e","type":"PanTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"a4fc137f-4e32-4f7a-954a-9f9be76e27d1","type":"LinearAxis"}],"left":[{"id":"933afb5c-1b34-4fbe-bd91-f9834131a935","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"474c5bad-acde-429b-91f6-2a2afd7a81e0","type":"BoxAnnotation"},{"id":"15e66d2d-94c6-4663-a1f6-0f7099fc1bf9","type":"GlyphRenderer"},{"id":"4d73c307-faef-4ae7-b6cb-ec5dc82e7b43","type":"GlyphRenderer"},{"id":"edb48bf2-1d9e-458d-8fd1-13fe7a098080","type":"GlyphRenderer"},{"id":"d8e4b5d3-c3a8-42f7-ad16-5064c046f94c","type":"GlyphRenderer"},{"id":"5c1d5940-5d99-4864-8aa8-3f39e6784c2d","type":"GlyphRenderer"},{"id":"0a4bac96-0a23-49b7-a002-cee2b2199c9d","type":"GlyphRenderer"},{"id":"c44f7954-6a3b-4ed1-aa32-c38953798d19","type":"GlyphRenderer"},{"id":"4d2d2684-a178-4fe9-abfc-aa16e9be67ff","type":"GlyphRenderer"},{"id":"8a652d8d-1c72-4960-a9f4-52532a1c2226","type":"GlyphRenderer"},{"id":"a4fc137f-4e32-4f7a-954a-9f9be76e27d1","type":"LinearAxis"},{"id":"933afb5c-1b34-4fbe-bd91-f9834131a935","type":"CategoricalAxis"},{"id":"79faeadb-1e47-4bb4-9d0a-2a847d1e54cd","type":"ColorBar"}],"right":[{"id":"79faeadb-1e47-4bb4-9d0a-2a847d1e54cd","type":"ColorBar"}],"title":{"id":"8cbb65d4-88c1-4de0-93fa-3565bcd49e20","type":"Title"},"tool_events":{"id":"0e96b5de-3272-4628-84ca-144c892986fd","type":"ToolEvents"},"toolbar":{"id":"092393cd-183f-4c56-8a13-dc9597ff8ad2","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"3097bb52-d02c-41fc-b31e-c8bcd707db9c","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"401f6c4e-eedb-45ef-aa28-ae64119f08bf","type":"FactorRange"}},"id":"c7d3e2d0-1886-4b38-bf00-2f42848561e1","subtype":"Chart","type":"Plot"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"8cbb65d4-88c1-4de0-93fa-3565bcd49e20","type":"Title"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"cb5166a9-8fd5-44c5-bbd1-245be22107d2","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[5.5,6.538461538461538,4.461538461538462],"x":[19,18,18],"y":["Monday","Tuesday","Wednesday"]}},"id":"a3814ed8-2d93-42fc-9ecd-6e5a60831a1a","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.071428571428571,10.23076923076923],"x":[19,18],"y":["Tuesday","Friday"]}},"id":"587046d8-c41a-455e-8565-b059751cc05b","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3ec35bb7-c018-4ae6-a624-b035512e3526","type":"Rect"},{"attributes":{"data_source":{"id":"892fa51b-10dd-469e-9bb7-b0f7cfee8585","type":"ColumnDataSource"},"glyph":{"id":"843e647e-bf3f-46f0-9263-c33307435c38","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"23d2a7e9-ab03-4ed2-b7bf-96144dc25fa1","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1d7c8be5-065b-46be-b7a5-b8d8b4a9bd9e","type":"PanTool"},{"id":"742c90a8-0c47-4866-95cb-4960b4271e04","type":"WheelZoomTool"},{"id":"0c38bdd8-6f37-40ea-93af-3d8bc0100a5e","type":"BoxZoomTool"},{"id":"7ec3540a-9b88-4d00-9472-a5337cc84c7e","type":"SaveTool"},{"id":"5843dfac-5436-4e66-988a-477b0f20eeed","type":"ResetTool"},{"id":"ff4813a1-77cc-437a-9b8d-e2faf5530fa7","type":"HelpTool"}]},"id":"092393cd-183f-4c56-8a13-dc9597ff8ad2","type":"Toolbar"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"cacd90a8-333c-431d-9287-9f6b08531411","type":"FactorRange"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5bd3fd75-d9c2-48fe-990b-9b73cc775a58","type":"Rect"},{"attributes":{},"id":"351ce295-da5c-40f6-91ed-ed7fd0c584c5","type":"CategoricalTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d458e142-7d01-4721-8248-25beff6e5585","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[20.363636363636363,23.23076923076923],"x":[15,16],"y":["Saturday","Saturday"]}},"id":"60402b62-2032-48e5-bb07-18160f4414b3","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.333333333333334,9.0,7.4,9.071428571428571],"x":[11,15,17,18],"y":["Tuesday","Thursday","Thursday","Sunday"]}},"id":"a108301e-3e6d-415f-80fd-37c892bf83b7","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"c7d3e2d0-1886-4b38-bf00-2f42848561e1","subtype":"Chart","type":"Plot"}},"id":"7ec3540a-9b88-4d00-9472-a5337cc84c7e","type":"SaveTool"},{"attributes":{},"id":"a4832df3-998b-41c3-a0c8-80190fd04f8c","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"44bd9b76-d937-4308-ba7d-4143e98e2653","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[20.0,17.928571428571427,19.6,20.0],"x":[15,18,8,12],"y":["Tuesday","Thursday","Saturday","Saturday"]}},"id":"37218f05-7577-448d-b5c6-b3e0a7c1ff71","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7adc5a0c-c4f1-43c6-a61b-829e55a594cb","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,3.2,1.2,0.0,2.2857142857142856,0.0,2.3846153846153846,1.5,0.6,0.6923076923076923,0.0,2.8,2.2222222222222223,0.25,0.0,0.0,0.6,1.2142857142857142],"x":[11,15,17,15,19,11,19,11,17,19,9,10,11,17,18,11,15,19],"y":["Monday","Monday","Monday","Wednesday","Wednesday","Thursday","Thursday","Friday","Friday","Friday","Saturday","Saturday","Saturday","Saturday","Saturday","Sunday","Sunday","Sunday"]}},"id":"0ec0e6c4-2c3d-4c61-a177-be412df79962","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"5f18cfdc-f07f-408e-b8ca-ee1c1c91cc25","type":"LinearColorMapper"},"formatter":{"id":"ea8a6345-7c0d-4cf1-be38-997cc6229c68","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"c7d3e2d0-1886-4b38-bf00-2f42848561e1","subtype":"Chart","type":"Plot"},"ticker":{"id":"607ad508-bab8-4b15-931a-5a569f000d1b","type":"BasicTicker"}},"id":"79faeadb-1e47-4bb4-9d0a-2a847d1e54cd","type":"ColorBar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[20.363636363636363,23.23076923076923],"x":[15,16],"y":["Saturday","Saturday"]}},"id":"e09f7964-63ad-4b71-9a2d-c7302710a9d9","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3a91eacc-0102-4065-81ec-3c710a188396","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"00cb7c19-3fd8-4d22-a5cb-007562aae3d8","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"44b3c776-201c-439d-9825-f468382f336c","type":"Rect"},{"attributes":{"overlay":{"id":"ffd2003d-c7c9-4754-aa63-2b91601c1961","type":"BoxAnnotation"},"plot":{"id":"c2825c3c-2891-46f3-92a9-9635e5d13620","subtype":"Chart","type":"Plot"}},"id":"048229b9-5a93-46f5-8c2f-62fbd122223e","type":"BoxZoomTool"},{"attributes":{"color_mapper":{"id":"b574ccf2-9562-4a2a-98d6-ab9b840af8dc","type":"LinearColorMapper"},"formatter":{"id":"5641f2bc-cce1-4721-97a6-637a33aaad5b","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"c2825c3c-2891-46f3-92a9-9635e5d13620","subtype":"Chart","type":"Plot"},"ticker":{"id":"a4832df3-998b-41c3-a0c8-80190fd04f8c","type":"BasicTicker"}},"id":"f79e9ce3-0aa8-4d96-b482-d7ae5d0e9aff","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"00822ac6-3e98-4507-aeb6-1ef93c3999f9","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"dbc170bc-ffcf-4c88-90d0-b6ab8f800cbc","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"474c5bad-acde-429b-91f6-2a2afd7a81e0","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"e09f7964-63ad-4b71-9a2d-c7302710a9d9","type":"ColumnDataSource"},"glyph":{"id":"b81b72ed-74e1-45c0-8551-0c5a96625aa2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"035f0c20-9059-4780-beab-dd9f5d5328f5","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ffd2003d-c7c9-4754-aa63-2b91601c1961","type":"BoxAnnotation"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"2f84faff-09f0-41d4-a500-1445ecfaf161","type":"BasicTickFormatter"},"plot":{"id":"c7d3e2d0-1886-4b38-bf00-2f42848561e1","subtype":"Chart","type":"Plot"},"ticker":{"id":"3905968f-df8f-4ca4-a5a7-f5e9312dfc87","type":"BasicTicker"}},"id":"a4fc137f-4e32-4f7a-954a-9f9be76e27d1","type":"LinearAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ee2ca5af-bc0b-4a62-806b-d71e185a350b","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b81b72ed-74e1-45c0-8551-0c5a96625aa2","type":"Rect"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"351ce295-da5c-40f6-91ed-ed7fd0c584c5","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"c2825c3c-2891-46f3-92a9-9635e5d13620","subtype":"Chart","type":"Plot"},"ticker":{"id":"185efe1a-a946-4567-8292-90db2009b34c","type":"CategoricalTicker"}},"id":"0f2cae26-b22e-4823-a9cd-af13f3355ad5","type":"CategoricalAxis"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"1ba74c54-a873-4813-8559-27efe25c7a61","type":"Title"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e620b9b6-4525-4fb5-9ddc-59af7740de97","type":"Rect"},{"attributes":{"data_source":{"id":"793c08b9-5a4b-4bda-8d8a-5e79d74bb5da","type":"ColumnDataSource"},"glyph":{"id":"00822ac6-3e98-4507-aeb6-1ef93c3999f9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4d73c307-faef-4ae7-b6cb-ec5dc82e7b43","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"c2825c3c-2891-46f3-92a9-9635e5d13620","subtype":"Chart","type":"Plot"}},"id":"658f47b0-f821-4099-8325-8c707d34f834","type":"PanTool"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"7d24c9f8-f4ee-4d8c-b52d-99a606cba07c","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"c7d3e2d0-1886-4b38-bf00-2f42848561e1","subtype":"Chart","type":"Plot"},"ticker":{"id":"22924cc6-1110-4e5e-86d7-1ded4805c1f0","type":"CategoricalTicker"}},"id":"933afb5c-1b34-4fbe-bd91-f9834131a935","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"305771ec-2cdd-4776-98ea-f131db95a53f","type":"ColumnDataSource"},"glyph":{"id":"00cb7c19-3fd8-4d22-a5cb-007562aae3d8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5c1d5940-5d99-4864-8aa8-3f39e6784c2d","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.071428571428571,10.23076923076923],"x":[19,18],"y":["Tuesday","Friday"]}},"id":"0915e836-2b08-4346-ae51-2582ba1ed024","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.333333333333334,9.0,7.4,9.071428571428571],"x":[11,15,17,18],"y":["Tuesday","Thursday","Thursday","Sunday"]}},"id":"87b87c8a-a477-400f-87fb-9e7b5f408487","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"87b87c8a-a477-400f-87fb-9e7b5f408487","type":"ColumnDataSource"},"glyph":{"id":"3ec35bb7-c018-4ae6-a624-b035512e3526","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c44f7954-6a3b-4ed1-aa32-c38953798d19","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2b4e0f30-569d-4de0-85ed-8037405f4c2c","type":"Rect"},{"attributes":{"data_source":{"id":"60402b62-2032-48e5-bb07-18160f4414b3","type":"ColumnDataSource"},"glyph":{"id":"44b3c776-201c-439d-9825-f468382f336c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"edb48bf2-1d9e-458d-8fd1-13fe7a098080","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[28.2,30.0,30.0],"x":[15,19,17],"y":["Friday","Saturday","Sunday"]}},"id":"892fa51b-10dd-469e-9bb7-b0f7cfee8585","type":"ColumnDataSource"},{"attributes":{"callback":null,"tabs":[{"id":"29da63ab-60c9-4a09-9427-1fc2a7ce935d","type":"Panel"},{"id":"696c80dd-52c1-4535-b75d-459c3383e7a2","type":"Panel"}]},"id":"a352cacf-0feb-45d5-8e82-6cc6afbf1ecd","type":"Tabs"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"658f47b0-f821-4099-8325-8c707d34f834","type":"PanTool"},{"id":"ab87eb6c-4cb5-4110-88ea-9bae137c8d96","type":"WheelZoomTool"},{"id":"048229b9-5a93-46f5-8c2f-62fbd122223e","type":"BoxZoomTool"},{"id":"e6f52697-b9c7-4eb6-9333-c114d462745b","type":"SaveTool"},{"id":"577cb557-fc25-4277-9364-ca82611db8f4","type":"ResetTool"},{"id":"5b93494c-a855-4869-8aff-a4e2f65686a1","type":"HelpTool"}]},"id":"0779e50c-0bd9-444d-a2c9-ac9230e3bf81","type":"Toolbar"},{"attributes":{"child":{"id":"c2825c3c-2891-46f3-92a9-9635e5d13620","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"696c80dd-52c1-4535-b75d-459c3383e7a2","type":"Panel"},{"attributes":{},"id":"7d24c9f8-f4ee-4d8c-b52d-99a606cba07c","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"c2825c3c-2891-46f3-92a9-9635e5d13620","subtype":"Chart","type":"Plot"}},"id":"5b93494c-a855-4869-8aff-a4e2f65686a1","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[26.166666666666668],"x":[17],"y":["Wednesday"]}},"id":"2694673c-ceb2-4e91-8838-e852f8b45f85","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"c7d3e2d0-1886-4b38-bf00-2f42848561e1","subtype":"Chart","type":"Plot"}},"id":"742c90a8-0c47-4866-95cb-4960b4271e04","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":23},"id":"7b20ed9d-5e65-4f1f-b5ce-e32469a93652","type":"Range1d"},{"attributes":{},"id":"ea8a6345-7c0d-4cf1-be38-997cc6229c68","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[5.5,6.538461538461538,4.461538461538462],"x":[19,18,18],"y":["Monday","Tuesday","Wednesday"]}},"id":"9c0d2d93-383d-4fd9-8b33-746d77b0fdef","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"c2825c3c-2891-46f3-92a9-9635e5d13620","subtype":"Chart","type":"Plot"}},"id":"e6f52697-b9c7-4eb6-9333-c114d462745b","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[15.538461538461538,15.666666666666666,14.333333333333334],"x":[18,17,11],"y":["Monday","Tuesday","Wednesday"]}},"id":"3e836338-962b-4bce-8c5f-a129bb928d60","type":"ColumnDataSource"},{"attributes":{},"id":"607ad508-bab8-4b15-931a-5a569f000d1b","type":"BasicTicker"},{"attributes":{"data_source":{"id":"3ae5c162-1f73-482a-952d-7f5d98884365","type":"ColumnDataSource"},"glyph":{"id":"d458e142-7d01-4721-8248-25beff6e5585","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d8e4b5d3-c3a8-42f7-ad16-5064c046f94c","type":"GlyphRenderer"},{"attributes":{},"id":"470d4ede-364e-4d2c-a05f-539ed4351d63","type":"ToolEvents"},{"attributes":{},"id":"7aaba7ef-1a16-4866-9f76-0d7192f7bd32","type":"BasicTicker"},{"attributes":{"data_source":{"id":"a3814ed8-2d93-42fc-9ecd-6e5a60831a1a","type":"ColumnDataSource"},"glyph":{"id":"e620b9b6-4525-4fb5-9ddc-59af7740de97","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4d2d2684-a178-4fe9-abfc-aa16e9be67ff","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3e836338-962b-4bce-8c5f-a129bb928d60","type":"ColumnDataSource"},"glyph":{"id":"dbc170bc-ffcf-4c88-90d0-b6ab8f800cbc","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d9372f01-227e-4988-afc0-99f41eae9ed5","type":"GlyphRenderer"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"5f18cfdc-f07f-408e-b8ca-ee1c1c91cc25","type":"LinearColorMapper"},{"attributes":{"callback":null,"end":23},"id":"3097bb52-d02c-41fc-b31e-c8bcd707db9c","type":"Range1d"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"401f6c4e-eedb-45ef-aa28-ae64119f08bf","type":"FactorRange"},{"attributes":{},"id":"86ea1de4-d6a7-4dce-b161-65b45a80c656","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"c2825c3c-2891-46f3-92a9-9635e5d13620","subtype":"Chart","type":"Plot"}},"id":"577cb557-fc25-4277-9364-ca82611db8f4","type":"ResetTool"},{"attributes":{"overlay":{"id":"474c5bad-acde-429b-91f6-2a2afd7a81e0","type":"BoxAnnotation"},"plot":{"id":"c7d3e2d0-1886-4b38-bf00-2f42848561e1","subtype":"Chart","type":"Plot"}},"id":"0c38bdd8-6f37-40ea-93af-3d8bc0100a5e","type":"BoxZoomTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"86ea1de4-d6a7-4dce-b161-65b45a80c656","type":"BasicTickFormatter"},"plot":{"id":"c2825c3c-2891-46f3-92a9-9635e5d13620","subtype":"Chart","type":"Plot"},"ticker":{"id":"7aaba7ef-1a16-4866-9f76-0d7192f7bd32","type":"BasicTicker"}},"id":"f35210e4-47d5-42e9-bd6b-349977159016","type":"LinearAxis"},{"attributes":{"child":{"id":"c7d3e2d0-1886-4b38-bf00-2f42848561e1","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"29da63ab-60c9-4a09-9427-1fc2a7ce935d","type":"Panel"}],"root_ids":["a352cacf-0feb-45d5-8e82-6cc6afbf1ecd"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"825245ef-bc74-40ec-916e-457e27cc2444","elementid":"fc658aa4-9c0a-43e2-a060-783152a8bb8d","modelid":"a352cacf-0feb-45d5-8e82-6cc6afbf1ecd"}];
                  
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