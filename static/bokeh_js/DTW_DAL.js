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
      };var element = document.getElementById("54f0f895-cbe3-4569-835b-7aba02aa5acf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '54f0f895-cbe3-4569-835b-7aba02aa5acf' but no matching script tag was found. ")
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
                  var docs_json = {"763fae2a-8819-4e7d-b830-8fbd751bf96b":{"roots":{"references":[{"attributes":{"data_source":{"id":"3d249dbf-f7d0-46a7-a2d4-2f2bb44ef425","type":"ColumnDataSource"},"glyph":{"id":"4644ce5e-2938-4550-9494-429102c2aefd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1c4a5c08-babf-4840-bd93-6c22d17a5ab9","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"f50ad061-9b1b-409c-82bc-058917785f9d","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"39078053-8f68-4880-b57b-e1e488f0bc81","subtype":"Chart","type":"Plot"},"ticker":{"id":"7737dc51-bc26-4137-b93e-7845b9025ebe","type":"CategoricalTicker"}},"id":"36036790-85cb-46db-8bbd-ec71aa66d268","type":"CategoricalAxis"},{"attributes":{"overlay":{"id":"2c79e4c9-25a4-4a86-b989-4df9f875ba34","type":"BoxAnnotation"},"plot":{"id":"2d1658bd-5606-484e-abff-73fae4e2529d","subtype":"Chart","type":"Plot"}},"id":"dfd47d33-3cf0-41be-b3af-bb0ba3a9a094","type":"BoxZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7dfd1012-ecfd-47d0-9841-cdd4908171cd","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[18.75,18.357142857142858],"x":[19,8],"y":["Tuesday","Sunday"]}},"id":"bbc1d74c-82fe-4d66-9b58-9efc7a58df0c","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"568854c3-625e-4956-9dfa-ecc5a2b84dbd","type":"ColumnDataSource"},"glyph":{"id":"89c1a59b-f8d6-4499-821a-d381522563bb","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1541ff13-952f-4963-896f-233cc73fb174","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"2d1658bd-5606-484e-abff-73fae4e2529d","subtype":"Chart","type":"Plot"}},"id":"aa1cba00-913a-4483-b558-bc2fae867442","type":"PanTool"},{"attributes":{"data_source":{"id":"6cc33ad6-cfa3-42a7-8b13-c3c21a937d09","type":"ColumnDataSource"},"glyph":{"id":"51b85bf1-2893-4b9f-b789-b0ea450bd085","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9dc1ceed-2965-4feb-88fa-848df54219d4","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"e1a6c181-1168-4392-913b-1b7629cef326","type":"BoxAnnotation"},"plot":{"id":"39078053-8f68-4880-b57b-e1e488f0bc81","subtype":"Chart","type":"Plot"}},"id":"3dd0abd3-2045-494f-95d6-76825aa30f52","type":"BoxZoomTool"},{"attributes":{"color_mapper":{"id":"5363a1f9-3297-4187-8cc9-e4eceb875cf9","type":"LinearColorMapper"},"formatter":{"id":"77ebbf05-3d45-4677-958a-d64f7df004bb","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"39078053-8f68-4880-b57b-e1e488f0bc81","subtype":"Chart","type":"Plot"},"ticker":{"id":"cb4cc1ea-0f65-4ba0-82de-36566759ed4d","type":"BasicTicker"}},"id":"c0ac1dbe-b8c6-4ddd-bf82-b0b3047a4c52","type":"ColorBar"},{"attributes":{},"id":"286b1256-0b38-4272-852a-f16675f394c4","type":"BasicTickFormatter"},{"attributes":{},"id":"40b983bc-eb15-4ac5-922e-e4cafa32b6f4","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"598f8d6c-9cae-4928-9e5c-1f16e69c83de","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.4166666666666667,3.1666666666666665,2.388888888888889,0.0,0.2857142857142857,1.8333333333333333,0.0,0.0,2.1666666666666665,1.2777777777777777,1.0909090909090908,0.0],"x":[7,15,5,8,15,5,7,8,7,5,7,15],"y":["Monday","Monday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Thursday","Friday","Friday","Friday"]}},"id":"5201317a-37d6-4f25-ac59-a77d7b3ed5b8","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"2d1658bd-5606-484e-abff-73fae4e2529d","subtype":"Chart","type":"Plot"}},"id":"fe7c6141-6a14-4644-8c32-821bb230ea42","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0,30.0,30.0],"x":[10,19,14,19,19],"y":["Wednesday","Wednesday","Friday","Friday","Sunday"]}},"id":"568854c3-625e-4956-9dfa-ecc5a2b84dbd","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"39078053-8f68-4880-b57b-e1e488f0bc81","subtype":"Chart","type":"Plot"}},"id":"d22621e5-6b3d-4934-8d9d-c31a67726ca9","type":"PanTool"},{"attributes":{},"id":"aa9e0fa4-b6b0-4b1f-ae27-e27cf6204ebf","type":"CategoricalTickFormatter"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"7c704250-b2cc-44a1-a142-97de41b29b6e","type":"LinearAxis"}],"left":[{"id":"b51445eb-60de-4bc4-968b-2c614c2ab733","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"2c79e4c9-25a4-4a86-b989-4df9f875ba34","type":"BoxAnnotation"},{"id":"1541ff13-952f-4963-896f-233cc73fb174","type":"GlyphRenderer"},{"id":"8ed59fa7-16d2-4570-b5ec-ad842c4145f7","type":"GlyphRenderer"},{"id":"97e58d1b-cac3-4619-9fd3-59027e9d26a7","type":"GlyphRenderer"},{"id":"9dc1ceed-2965-4feb-88fa-848df54219d4","type":"GlyphRenderer"},{"id":"dd0141be-864e-4355-80f5-bef35accaa48","type":"GlyphRenderer"},{"id":"a4e746cb-7dd0-445c-a337-00d7f2387c34","type":"GlyphRenderer"},{"id":"da07b08d-1718-420a-a448-4e67dca94722","type":"GlyphRenderer"},{"id":"7c704250-b2cc-44a1-a142-97de41b29b6e","type":"LinearAxis"},{"id":"b51445eb-60de-4bc4-968b-2c614c2ab733","type":"CategoricalAxis"},{"id":"3fa61fa6-514b-45b6-aee2-b7be268672ef","type":"ColorBar"}],"right":[{"id":"3fa61fa6-514b-45b6-aee2-b7be268672ef","type":"ColorBar"}],"title":{"id":"8684dc84-b92e-4a9e-bbfa-1530d71ddc6f","type":"Title"},"tool_events":{"id":"930f54ca-f21a-4eda-8404-e92dcd232125","type":"ToolEvents"},"toolbar":{"id":"876d7730-6653-4cca-8367-f3b4e8f9223b","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"42f879e0-ba58-4df4-8dca-51ee729dc752","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"21801c9d-6b9c-45a4-93e6-785e6bb561de","type":"FactorRange"}},"id":"2d1658bd-5606-484e-abff-73fae4e2529d","subtype":"Chart","type":"Plot"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"d21959ce-5a24-41ce-8bfe-f777373f2756","type":"LinearColorMapper"},{"attributes":{},"id":"c38b9921-8553-411e-a688-f25aac92be53","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2c59dcd0-1239-4719-906b-2ff92cd138b0","type":"Rect"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"8684dc84-b92e-4a9e-bbfa-1530d71ddc6f","type":"Title"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"21801c9d-6b9c-45a4-93e6-785e6bb561de","type":"FactorRange"},{"attributes":{},"id":"cb4cc1ea-0f65-4ba0-82de-36566759ed4d","type":"BasicTicker"},{"attributes":{"data_source":{"id":"bfc3127e-2afd-4e4b-82b9-b0aa74f3f2dc","type":"ColumnDataSource"},"glyph":{"id":"5c78b845-6929-4f45-a04e-de125f311199","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bd9456c9-3abe-41dc-97f7-7a07c42e2297","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"aa1cba00-913a-4483-b558-bc2fae867442","type":"PanTool"},{"id":"010dda22-54e1-4e31-9516-9929c8f78e78","type":"WheelZoomTool"},{"id":"dfd47d33-3cf0-41be-b3af-bb0ba3a9a094","type":"BoxZoomTool"},{"id":"71adae50-42e9-4215-bdbf-2ffe695001e6","type":"SaveTool"},{"id":"fe7c6141-6a14-4644-8c32-821bb230ea42","type":"ResetTool"},{"id":"0223422f-c46f-4fe7-8afc-fff374fe2918","type":"HelpTool"}]},"id":"876d7730-6653-4cca-8367-f3b4e8f9223b","type":"Toolbar"},{"attributes":{"callback":null,"tabs":[{"id":"4389de4e-086d-4071-b07f-1f569f284677","type":"Panel"},{"id":"3f7e252c-38c2-402a-adbf-3edf60340935","type":"Panel"}]},"id":"0e8a2d19-1f57-424a-ae4a-b7301ef62c52","type":"Tabs"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[13.0,10.666666666666666,10.4,10.625,11.666666666666666,12.714285714285714],"x":[5,7,8,14,19,15],"y":["Monday","Tuesday","Thursday","Thursday","Thursday","Sunday"]}},"id":"bfc3127e-2afd-4e4b-82b9-b0aa74f3f2dc","type":"ColumnDataSource"},{"attributes":{"child":{"id":"39078053-8f68-4880-b57b-e1e488f0bc81","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"4389de4e-086d-4071-b07f-1f569f284677","type":"Panel"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"74d6e268-e394-4b07-b00e-b2a5b24db7ef","type":"Rect"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"7b6f1c41-2663-4a92-8777-e7d1c9589d0f","type":"BasicTickFormatter"},"plot":{"id":"2d1658bd-5606-484e-abff-73fae4e2529d","subtype":"Chart","type":"Plot"},"ticker":{"id":"40b983bc-eb15-4ac5-922e-e4cafa32b6f4","type":"BasicTicker"}},"id":"7c704250-b2cc-44a1-a142-97de41b29b6e","type":"LinearAxis"},{"attributes":{"data_source":{"id":"1a4bf909-0c4c-4c37-96b2-d13b908d8058","type":"ColumnDataSource"},"glyph":{"id":"9f4740f6-2ac7-4fda-8840-4246ce54cd22","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"aa3baa87-cb51-4c40-8113-e8296cadb496","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"a6905637-1292-4662-b894-02ef7273a800","type":"ColumnDataSource"},"glyph":{"id":"598f8d6c-9cae-4928-9e5c-1f16e69c83de","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"da07b08d-1718-420a-a448-4e67dca94722","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0,30.0,30.0],"x":[10,19,14,19,19],"y":["Wednesday","Wednesday","Friday","Friday","Sunday"]}},"id":"f23d4bda-3972-437f-ac3f-bedc69f84c1b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"bbc1d74c-82fe-4d66-9b58-9efc7a58df0c","type":"ColumnDataSource"},"glyph":{"id":"320a9224-18f8-4eb4-bf9f-591d61a7760a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8ed59fa7-16d2-4570-b5ec-ad842c4145f7","type":"GlyphRenderer"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"d131784f-b0d7-4d47-85ed-a71f5774ede6","type":"LinearAxis"}],"left":[{"id":"36036790-85cb-46db-8bbd-ec71aa66d268","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"e1a6c181-1168-4392-913b-1b7629cef326","type":"BoxAnnotation"},{"id":"ef443bf3-4687-4ff4-aa88-d08b10a81ab2","type":"GlyphRenderer"},{"id":"aa3baa87-cb51-4c40-8113-e8296cadb496","type":"GlyphRenderer"},{"id":"2dc68d81-c697-4e28-b409-fa821ac36a09","type":"GlyphRenderer"},{"id":"bd9456c9-3abe-41dc-97f7-7a07c42e2297","type":"GlyphRenderer"},{"id":"7dfc9389-e80b-41f3-bb4b-bf60d32f8eb9","type":"GlyphRenderer"},{"id":"1c4a5c08-babf-4840-bd93-6c22d17a5ab9","type":"GlyphRenderer"},{"id":"81ae6609-1aa5-4ef2-a7f4-a49bbd685be9","type":"GlyphRenderer"},{"id":"d131784f-b0d7-4d47-85ed-a71f5774ede6","type":"LinearAxis"},{"id":"36036790-85cb-46db-8bbd-ec71aa66d268","type":"CategoricalAxis"},{"id":"c0ac1dbe-b8c6-4ddd-bf82-b0b3047a4c52","type":"ColorBar"}],"right":[{"id":"c0ac1dbe-b8c6-4ddd-bf82-b0b3047a4c52","type":"ColorBar"}],"title":{"id":"67818019-c33f-49a6-8336-6a3c34d16358","type":"Title"},"tool_events":{"id":"8c896a4d-0091-4fb3-b229-20a529d90c07","type":"ToolEvents"},"toolbar":{"id":"d23e0f9b-7728-41b9-882e-abbc8f48eb2c","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"77a58e6a-49e8-483f-8bf8-b81b32ad6d2d","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"be2a501e-d9d9-4c34-9f7a-b77f6e42c58c","type":"FactorRange"}},"id":"39078053-8f68-4880-b57b-e1e488f0bc81","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[18.75,18.357142857142858],"x":[19,8],"y":["Tuesday","Sunday"]}},"id":"1a4bf909-0c4c-4c37-96b2-d13b908d8058","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"2d1658bd-5606-484e-abff-73fae4e2529d","subtype":"Chart","type":"Plot"}},"id":"71adae50-42e9-4215-bdbf-2ffe695001e6","type":"SaveTool"},{"attributes":{},"id":"77ebbf05-3d45-4677-958a-d64f7df004bb","type":"BasicTickFormatter"},{"attributes":{},"id":"8c896a4d-0091-4fb3-b229-20a529d90c07","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2c79e4c9-25a4-4a86-b989-4df9f875ba34","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.8,4.222222222222222,3.375,6.4,4.583333333333333,6.555555555555555],"x":[8,14,15,5,7,14],"y":["Monday","Monday","Thursday","Sunday","Sunday","Sunday"]}},"id":"4d3e44cd-da4d-4701-9be3-ddc2f45e59dd","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5201317a-37d6-4f25-ac59-a77d7b3ed5b8","type":"ColumnDataSource"},"glyph":{"id":"9f18b13c-7692-414a-a23f-c7ea31c1d803","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"81ae6609-1aa5-4ef2-a7f4-a49bbd685be9","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"67fa2380-6b4c-44ef-9299-35beac46637a","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5c78b845-6929-4f45-a04e-de125f311199","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.8,4.222222222222222,3.375,6.4,4.583333333333333,6.555555555555555],"x":[8,14,15,5,7,14],"y":["Monday","Monday","Thursday","Sunday","Sunday","Sunday"]}},"id":"3d249dbf-f7d0-46a7-a2d4-2f2bb44ef425","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"8f1e0687-2576-4870-8739-1fb8cfaa4bdc","type":"ColumnDataSource"},"glyph":{"id":"7dfd1012-ecfd-47d0-9841-cdd4908171cd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dd0141be-864e-4355-80f5-bef35accaa48","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4644ce5e-2938-4550-9494-429102c2aefd","type":"Rect"},{"attributes":{},"id":"930f54ca-f21a-4eda-8404-e92dcd232125","type":"ToolEvents"},{"attributes":{"data_source":{"id":"4d3e44cd-da4d-4701-9be3-ddc2f45e59dd","type":"ColumnDataSource"},"glyph":{"id":"2c59dcd0-1239-4719-906b-2ff92cd138b0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a4e746cb-7dd0-445c-a337-00d7f2387c34","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.88888888888889,8.444444444444445,7.888888888888889,9.2,7.0,8.142857142857142,6.75,7.769230769230769],"x":[14,14,5,8,6,7,13,16],"y":["Tuesday","Wednesday","Thursday","Friday","Saturday","Saturday","Saturday","Saturday"]}},"id":"8f1e0687-2576-4870-8739-1fb8cfaa4bdc","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"fe899e00-5545-4c8a-b164-e38775ab0c5b","type":"ColumnDataSource"},"glyph":{"id":"b95a7f66-187d-4834-a7c0-2aaea23e16bf","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2dc68d81-c697-4e28-b409-fa821ac36a09","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"aa9e0fa4-b6b0-4b1f-ae27-e27cf6204ebf","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"2d1658bd-5606-484e-abff-73fae4e2529d","subtype":"Chart","type":"Plot"},"ticker":{"id":"a9caa60b-d393-47d1-9b66-dc2f0d89cd23","type":"CategoricalTicker"}},"id":"b51445eb-60de-4bc4-968b-2c614c2ab733","type":"CategoricalAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"89c1a59b-f8d6-4499-821a-d381522563bb","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[15.75,16.25],"x":[19,15],"y":["Monday","Wednesday"]}},"id":"fe899e00-5545-4c8a-b164-e38775ab0c5b","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"2d1658bd-5606-484e-abff-73fae4e2529d","subtype":"Chart","type":"Plot"}},"id":"0223422f-c46f-4fe7-8afc-fff374fe2918","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[13.0,10.666666666666666,10.4,10.625,11.666666666666666,12.714285714285714],"x":[5,7,8,14,19,15],"y":["Monday","Tuesday","Thursday","Thursday","Thursday","Sunday"]}},"id":"6cc33ad6-cfa3-42a7-8b13-c3c21a937d09","type":"ColumnDataSource"},{"attributes":{},"id":"9925f991-de3a-4a1b-ae2c-ba9d5b732a82","type":"BasicTicker"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"286b1256-0b38-4272-852a-f16675f394c4","type":"BasicTickFormatter"},"plot":{"id":"39078053-8f68-4880-b57b-e1e488f0bc81","subtype":"Chart","type":"Plot"},"ticker":{"id":"c38b9921-8553-411e-a688-f25aac92be53","type":"BasicTicker"}},"id":"d131784f-b0d7-4d47-85ed-a71f5774ede6","type":"LinearAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9f4740f6-2ac7-4fda-8840-4246ce54cd22","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.4166666666666667,3.1666666666666665,2.388888888888889,0.0,0.2857142857142857,1.8333333333333333,0.0,0.0,2.1666666666666665,1.2777777777777777,1.0909090909090908,0.0],"x":[7,15,5,8,15,5,7,8,7,5,7,15],"y":["Monday","Monday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Thursday","Friday","Friday","Friday"]}},"id":"a6905637-1292-4662-b894-02ef7273a800","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6ad25ac7-1525-483d-9fc2-faa46df60730","type":"Rect"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"be2a501e-d9d9-4c34-9f7a-b77f6e42c58c","type":"FactorRange"},{"attributes":{},"id":"7b6f1c41-2663-4a92-8777-e7d1c9589d0f","type":"BasicTickFormatter"},{"attributes":{},"id":"7737dc51-bc26-4137-b93e-7845b9025ebe","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"39078053-8f68-4880-b57b-e1e488f0bc81","subtype":"Chart","type":"Plot"}},"id":"1b56f787-6567-4096-867e-7d8293aac403","type":"HelpTool"},{"attributes":{"plot":{"id":"39078053-8f68-4880-b57b-e1e488f0bc81","subtype":"Chart","type":"Plot"}},"id":"0be4c75e-8288-4e21-a98f-b930ebaed604","type":"SaveTool"},{"attributes":{"data_source":{"id":"f23d4bda-3972-437f-ac3f-bedc69f84c1b","type":"ColumnDataSource"},"glyph":{"id":"6ad25ac7-1525-483d-9fc2-faa46df60730","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ef443bf3-4687-4ff4-aa88-d08b10a81ab2","type":"GlyphRenderer"},{"attributes":{"color_mapper":{"id":"d21959ce-5a24-41ce-8bfe-f777373f2756","type":"LinearColorMapper"},"formatter":{"id":"f0601807-5ca4-4fa1-b8be-bebd591cc206","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"2d1658bd-5606-484e-abff-73fae4e2529d","subtype":"Chart","type":"Plot"},"ticker":{"id":"9925f991-de3a-4a1b-ae2c-ba9d5b732a82","type":"BasicTicker"}},"id":"3fa61fa6-514b-45b6-aee2-b7be268672ef","type":"ColorBar"},{"attributes":{"data_source":{"id":"8948b51b-9555-4b2d-9fd9-487f4cddcdcf","type":"ColumnDataSource"},"glyph":{"id":"67fa2380-6b4c-44ef-9299-35beac46637a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"97e58d1b-cac3-4619-9fd3-59027e9d26a7","type":"GlyphRenderer"},{"attributes":{},"id":"f0601807-5ca4-4fa1-b8be-bebd591cc206","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.88888888888889,8.444444444444445,7.888888888888889,9.2,7.0,8.142857142857142,6.75,7.769230769230769],"x":[14,14,5,8,6,7,13,16],"y":["Tuesday","Wednesday","Thursday","Friday","Saturday","Saturday","Saturday","Saturday"]}},"id":"59b0d287-13ae-4384-a2c5-1ab57a4617b7","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9f18b13c-7692-414a-a23f-c7ea31c1d803","type":"Rect"},{"attributes":{"plot":{"id":"39078053-8f68-4880-b57b-e1e488f0bc81","subtype":"Chart","type":"Plot"}},"id":"1f924a90-5d50-4c21-bc1e-d90e4b1f71df","type":"WheelZoomTool"},{"attributes":{},"id":"f50ad061-9b1b-409c-82bc-058917785f9d","type":"CategoricalTickFormatter"},{"attributes":{},"id":"a9caa60b-d393-47d1-9b66-dc2f0d89cd23","type":"CategoricalTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d22621e5-6b3d-4934-8d9d-c31a67726ca9","type":"PanTool"},{"id":"1f924a90-5d50-4c21-bc1e-d90e4b1f71df","type":"WheelZoomTool"},{"id":"3dd0abd3-2045-494f-95d6-76825aa30f52","type":"BoxZoomTool"},{"id":"0be4c75e-8288-4e21-a98f-b930ebaed604","type":"SaveTool"},{"id":"d99aceb0-2676-443d-ae85-7076c1400f44","type":"ResetTool"},{"id":"1b56f787-6567-4096-867e-7d8293aac403","type":"HelpTool"}]},"id":"d23e0f9b-7728-41b9-882e-abbc8f48eb2c","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[15.75,16.25],"x":[19,15],"y":["Monday","Wednesday"]}},"id":"8948b51b-9555-4b2d-9fd9-487f4cddcdcf","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b95a7f66-187d-4834-a7c0-2aaea23e16bf","type":"Rect"},{"attributes":{"child":{"id":"2d1658bd-5606-484e-abff-73fae4e2529d","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"3f7e252c-38c2-402a-adbf-3edf60340935","type":"Panel"},{"attributes":{"callback":null,"end":23},"id":"42f879e0-ba58-4df4-8dca-51ee729dc752","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"51b85bf1-2893-4b9f-b789-b0ea450bd085","type":"Rect"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"5363a1f9-3297-4187-8cc9-e4eceb875cf9","type":"LinearColorMapper"},{"attributes":{"callback":null,"end":23},"id":"77a58e6a-49e8-483f-8bf8-b81b32ad6d2d","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"320a9224-18f8-4eb4-bf9f-591d61a7760a","type":"Rect"},{"attributes":{"data_source":{"id":"59b0d287-13ae-4384-a2c5-1ab57a4617b7","type":"ColumnDataSource"},"glyph":{"id":"74d6e268-e394-4b07-b00e-b2a5b24db7ef","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7dfc9389-e80b-41f3-bb4b-bf60d32f8eb9","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e1a6c181-1168-4392-913b-1b7629cef326","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"39078053-8f68-4880-b57b-e1e488f0bc81","subtype":"Chart","type":"Plot"}},"id":"d99aceb0-2676-443d-ae85-7076c1400f44","type":"ResetTool"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"67818019-c33f-49a6-8336-6a3c34d16358","type":"Title"},{"attributes":{"plot":{"id":"2d1658bd-5606-484e-abff-73fae4e2529d","subtype":"Chart","type":"Plot"}},"id":"010dda22-54e1-4e31-9516-9929c8f78e78","type":"WheelZoomTool"}],"root_ids":["0e8a2d19-1f57-424a-ae4a-b7301ef62c52"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"763fae2a-8819-4e7d-b830-8fbd751bf96b","elementid":"54f0f895-cbe3-4569-835b-7aba02aa5acf","modelid":"0e8a2d19-1f57-424a-ae4a-b7301ef62c52"}];
                  
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