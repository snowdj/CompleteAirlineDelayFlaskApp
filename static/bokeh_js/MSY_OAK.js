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
      };var element = document.getElementById("1b1a1f73-9306-497d-bba7-c699972c388a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1b1a1f73-9306-497d-bba7-c699972c388a' but no matching script tag was found. ")
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
                  var docs_json = {"04be66a7-6245-4414-9f1b-ba7f23be45e1":{"roots":{"references":[{"attributes":{"data_source":{"id":"0d66084c-de25-4a55-a509-772ab6637503","type":"ColumnDataSource"},"glyph":{"id":"7e88dae1-b934-4a6f-a61c-2910db716ed3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4980d8a1-f762-4b3d-9aed-4ba39f53f033","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[20.61111111111111,22.77777777777778],"x":[15,15],"y":["Monday","Tuesday"]}},"id":"25daea25-025d-4894-8c39-762494634fca","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[13.526315789473685,16.0,14.5,16.454545454545453],"x":[14,12,15,15],"y":["Wednesday","Thursday","Thursday","Saturday"]}},"id":"e9c26080-e107-48c9-898c-bd3184d1ba9f","type":"ColumnDataSource"},{"attributes":{},"id":"c707ff04-e362-4c96-9297-e60be5196e98","type":"ToolEvents"},{"attributes":{},"id":"c55e0a7b-ed62-4088-a286-8adc5dfe5faf","type":"ToolEvents"},{"attributes":{"data_source":{"id":"25daea25-025d-4894-8c39-762494634fca","type":"ColumnDataSource"},"glyph":{"id":"2eea3a62-5886-4fab-8862-b9a87d9d5151","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d46990b8-deed-4a04-9e53-e6b1c13f6d95","type":"GlyphRenderer"},{"attributes":{},"id":"e1273080-5438-43ba-93c3-e364f3b401a1","type":"BasicTicker"},{"attributes":{},"id":"8220e466-265d-4da7-8d2e-43f8d8d81c98","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"75a3d0dd-9782-4fd6-b031-1efa1c9cebdd","type":"Rect"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"3f1c01e2-ffc1-451f-8fec-893b94909885","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"63e8a545-9e66-4dce-be45-a17648b686f0","subtype":"Chart","type":"Plot"},"ticker":{"id":"64c7dfb7-0794-4b00-9d44-9b99ff440d47","type":"CategoricalTicker"}},"id":"40734b1e-c8ec-4dff-a37d-d3c993e077ad","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"63e8a545-9e66-4dce-be45-a17648b686f0","subtype":"Chart","type":"Plot"}},"id":"3345f959-5f43-4850-82d3-bb8682caa816","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[7.055555555555555,9.68421052631579,9.6,9.033333333333333],"x":[14,15,16,14],"y":["Tuesday","Wednesday","Thursday","Saturday"]}},"id":"ce871c2c-c314-4c81-b5f0-b85c560ec6ec","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"f66803fa-4a8a-4162-a49e-e25c0730295d","type":"ColumnDataSource"},"glyph":{"id":"cacf42c1-de1a-4935-8cca-f6bb4982af9c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3fbe66bb-45fb-4b83-99aa-3b532d5185b8","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,1.0,0.0,2.8095238095238093,0.0,0.0,3.0,0.0,2.9047619047619047,3.0555555555555554,2.4,0.0,0.0,0.0],"x":[12,17,12,13,16,12,16,12,13,15,16,12,13,16],"y":["Monday","Monday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Friday","Friday","Friday","Friday","Sunday","Sunday","Sunday"]}},"id":"d5edb0a1-2c5e-44dc-bc62-df830c29c0f0","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2157c940-ed17-4d5d-98cb-a8583c7c5e2d","type":"ColumnDataSource"},"glyph":{"id":"87327287-44d2-4d9a-9f22-07642a76fae6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e68ef225-59b6-45d6-b1a8-ddc0777adcae","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[5.0476190476190474,6.4,6.2631578947368425,5.9523809523809526,6.411764705882353,5.0,5.7368421052631575],"x":[13,16,13,13,14,14,14],"y":["Monday","Monday","Wednesday","Thursday","Thursday","Friday","Sunday"]}},"id":"3bb4fc6b-784e-4270-903c-4fa88ae6a3bd","type":"ColumnDataSource"},{"attributes":{},"id":"d8363b21-1017-45a2-bb63-3dd901ce0263","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ead9ca31-11be-4b18-b276-f308ba968104","type":"PanTool"},{"id":"a43d29d5-4f51-4c8b-8349-c98be8689dbb","type":"WheelZoomTool"},{"id":"c885e0eb-d760-4609-8f51-8d2077791115","type":"BoxZoomTool"},{"id":"3345f959-5f43-4850-82d3-bb8682caa816","type":"SaveTool"},{"id":"bf827b85-7e46-4415-8ac1-7e7cda1bdd48","type":"ResetTool"},{"id":"979832eb-6167-49a8-b817-42779a5f58c4","type":"HelpTool"}]},"id":"95412de3-2025-4ccc-871b-114f3b942792","type":"Toolbar"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"a13d07f9-ebab-4e14-8be9-06a69219fdcc","type":"LinearColorMapper"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0],"x":[19],"y":["Saturday"]}},"id":"333b0db2-ef71-4834-8ff0-db4eecdd1f11","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2799b62c-21f3-400c-85cf-3f19906f0436","type":"PanTool"},{"id":"c681e2b0-312e-4492-a491-f7da0a3cfc2a","type":"WheelZoomTool"},{"id":"f8800d17-679f-4844-b088-9724447d89bc","type":"BoxZoomTool"},{"id":"db31ef75-9ee0-4829-97b6-969ef8f55083","type":"SaveTool"},{"id":"78f76d24-22c2-4b7a-a1f2-4d1b07bfdc0e","type":"ResetTool"},{"id":"1c65a1a8-a179-4dde-8b69-650d9762f210","type":"HelpTool"}]},"id":"d0083be6-86c7-419c-9895-c0c0ba523bd8","type":"Toolbar"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"03f60e2c-1cdb-4f4a-b266-51fada255ed3","type":"Title"},{"attributes":{"plot":{"id":"f945cabf-0158-479b-a170-3cce494d008b","subtype":"Chart","type":"Plot"}},"id":"c681e2b0-312e-4492-a491-f7da0a3cfc2a","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"f945cabf-0158-479b-a170-3cce494d008b","subtype":"Chart","type":"Plot"}},"id":"1c65a1a8-a179-4dde-8b69-650d9762f210","type":"HelpTool"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"f2e71958-c4dc-4aa0-b293-e0cf60e4c016","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"f945cabf-0158-479b-a170-3cce494d008b","subtype":"Chart","type":"Plot"},"ticker":{"id":"2c1b9b88-e51f-482f-996d-028ed9254aec","type":"CategoricalTicker"}},"id":"5aa0a6e1-d4be-4c7d-acf6-9767a00de551","type":"CategoricalAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9d9d493e-dd56-4b91-8244-5aee83b2b761","type":"Rect"},{"attributes":{"data_source":{"id":"a2bedc82-d3aa-4bc7-bbe1-d065ecc7d228","type":"ColumnDataSource"},"glyph":{"id":"5bf8d6fc-b6a9-40b4-8a95-fa19734ff233","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"052c497f-9c5a-457e-b7d5-a349256aa223","type":"GlyphRenderer"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"8220e466-265d-4da7-8d2e-43f8d8d81c98","type":"BasicTickFormatter"},"plot":{"id":"63e8a545-9e66-4dce-be45-a17648b686f0","subtype":"Chart","type":"Plot"},"ticker":{"id":"5e95dbfa-dd74-4c2d-87a3-c9bce57fe0c4","type":"BasicTicker"}},"id":"36797d55-8f60-4ad2-8d8b-1cddbf5158de","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[25.11111111111111],"x":[17],"y":["Saturday"]}},"id":"a2bedc82-d3aa-4bc7-bbe1-d065ecc7d228","type":"ColumnDataSource"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"1e623293-3615-4ba6-a375-b9af3e5368ec","type":"BasicTickFormatter"},"plot":{"id":"f945cabf-0158-479b-a170-3cce494d008b","subtype":"Chart","type":"Plot"},"ticker":{"id":"8035c3dd-8cbb-4409-8f09-b78d9c8827b5","type":"BasicTicker"}},"id":"6f6aa56e-850b-426e-a304-327f41bd0077","type":"LinearAxis"},{"attributes":{},"id":"1e623293-3615-4ba6-a375-b9af3e5368ec","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"333b0db2-ef71-4834-8ff0-db4eecdd1f11","type":"ColumnDataSource"},"glyph":{"id":"e942f448-4a8d-4b77-a0b3-a8f3d7982652","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5f6101d0-6437-4e9b-a152-4084893e13b0","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"b0181b09-845a-4796-862c-749abc78acf3","type":"ColumnDataSource"},"glyph":{"id":"13a2b474-f942-4591-b266-ef5b774d552d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dfee6a75-34c5-4389-9def-faa244db3e84","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6560dc97-9429-4efa-8f36-ef6c46f4ddb6","type":"Rect"},{"attributes":{"data_source":{"id":"57c919b5-9329-4b5f-ae45-25449449cb49","type":"ColumnDataSource"},"glyph":{"id":"75a3d0dd-9782-4fd6-b031-1efa1c9cebdd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ba6a49e8-5825-40ac-99b3-787883ebd5ae","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"ce871c2c-c314-4c81-b5f0-b85c560ec6ec","type":"ColumnDataSource"},"glyph":{"id":"046e91d9-4f04-48d5-b86f-288d3a70955b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"840b6a68-b7af-4d78-bd14-2f2bef0e7dce","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"f945cabf-0158-479b-a170-3cce494d008b","subtype":"Chart","type":"Plot"}},"id":"db31ef75-9ee0-4829-97b6-969ef8f55083","type":"SaveTool"},{"attributes":{"child":{"id":"63e8a545-9e66-4dce-be45-a17648b686f0","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"efa2fd7d-76ca-488a-a81b-17a61872d3d7","type":"Panel"},{"attributes":{"data_source":{"id":"6c3b65fb-5141-41e6-b173-5036a69c9425","type":"ColumnDataSource"},"glyph":{"id":"e3fea5dc-62ed-4fe2-b282-16eb0c602568","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2813e2ba-3aa8-49c0-a030-2c95009ebd8d","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[19.555555555555557,17.61111111111111],"x":[16,15],"y":["Saturday","Sunday"]}},"id":"0d66084c-de25-4a55-a509-772ab6637503","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ee525bde-241b-414f-be84-6e42d3ebbf50","type":"Rect"},{"attributes":{"data_source":{"id":"5249bd78-ac62-44e0-bce2-c79d62a16afc","type":"ColumnDataSource"},"glyph":{"id":"198cc98d-e631-4fa8-a179-f1bcc77dec96","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fcfc3eb9-6ba8-4468-aff0-3d0e5e6d14ad","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"86985ed8-0a06-44d1-8712-b9802b7d8604","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0ad57d3f-a530-4771-b7b8-3a8b76612f31","type":"Rect"},{"attributes":{},"id":"5e95dbfa-dd74-4c2d-87a3-c9bce57fe0c4","type":"BasicTicker"},{"attributes":{"callback":null,"end":23},"id":"6b3a9e28-0f51-4a04-a4f3-f6e0dc4804be","type":"Range1d"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"3097434a-95ca-4d3e-bdb9-b656b81fd4e9","type":"FactorRange"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a55049d2-12de-4c49-9a7c-68a8601c1a5a","type":"Rect"},{"attributes":{},"id":"8035c3dd-8cbb-4409-8f09-b78d9c8827b5","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5bf8d6fc-b6a9-40b4-8a95-fa19734ff233","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0],"x":[19],"y":["Saturday"]}},"id":"2157c940-ed17-4d5d-98cb-a8583c7c5e2d","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e942f448-4a8d-4b77-a0b3-a8f3d7982652","type":"Rect"},{"attributes":{},"id":"0a21025e-6887-423b-98cf-ced15a37a825","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9358d435-9150-4624-80c0-49ab1cb4d865","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[25.11111111111111],"x":[17],"y":["Saturday"]}},"id":"741b0669-c325-4603-809c-d4a76ebb7da4","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3bb4fc6b-784e-4270-903c-4fa88ae6a3bd","type":"ColumnDataSource"},"glyph":{"id":"86985ed8-0a06-44d1-8712-b9802b7d8604","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5da4cd29-a9d5-40b0-9ceb-6be2e3ac38be","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,1.0,0.0,2.8095238095238093,0.0,0.0,3.0,0.0,2.9047619047619047,3.0555555555555554,2.4,0.0,0.0,0.0],"x":[12,17,12,13,16,12,16,12,13,15,16,12,13,16],"y":["Monday","Monday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Friday","Friday","Friday","Friday","Sunday","Sunday","Sunday"]}},"id":"b0181b09-845a-4796-862c-749abc78acf3","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"89b80c50-eb42-4e1a-a772-c9d70489a38b","type":"ColumnDataSource"},"glyph":{"id":"9d9d493e-dd56-4b91-8244-5aee83b2b761","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"166a38b3-a350-45f3-845d-f68f71049110","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"f945cabf-0158-479b-a170-3cce494d008b","subtype":"Chart","type":"Plot"}},"id":"2799b62c-21f3-400c-85cf-3f19906f0436","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a83ee743-cd63-4a07-9368-d825329f95c3","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"741b0669-c325-4603-809c-d4a76ebb7da4","type":"ColumnDataSource"},"glyph":{"id":"a55049d2-12de-4c49-9a7c-68a8601c1a5a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dd29df67-2b4b-4950-829d-9c1cebd1f761","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7e88dae1-b934-4a6f-a61c-2910db716ed3","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.235294117647058],"x":[14],"y":["Monday"]}},"id":"89b80c50-eb42-4e1a-a772-c9d70489a38b","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"63e8a545-9e66-4dce-be45-a17648b686f0","subtype":"Chart","type":"Plot"}},"id":"bf827b85-7e46-4415-8ac1-7e7cda1bdd48","type":"ResetTool"},{"attributes":{},"id":"f2e71958-c4dc-4aa0-b293-e0cf60e4c016","type":"CategoricalTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"046e91d9-4f04-48d5-b86f-288d3a70955b","type":"Rect"},{"attributes":{"plot":{"id":"63e8a545-9e66-4dce-be45-a17648b686f0","subtype":"Chart","type":"Plot"}},"id":"ead9ca31-11be-4b18-b276-f308ba968104","type":"PanTool"},{"attributes":{"overlay":{"id":"a83ee743-cd63-4a07-9368-d825329f95c3","type":"BoxAnnotation"},"plot":{"id":"f945cabf-0158-479b-a170-3cce494d008b","subtype":"Chart","type":"Plot"}},"id":"f8800d17-679f-4844-b088-9724447d89bc","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[5.0476190476190474,6.4,6.2631578947368425,5.9523809523809526,6.411764705882353,5.0,5.7368421052631575],"x":[13,16,13,13,14,14,14],"y":["Monday","Monday","Wednesday","Thursday","Thursday","Friday","Sunday"]}},"id":"57c919b5-9329-4b5f-ae45-25449449cb49","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e3fea5dc-62ed-4fe2-b282-16eb0c602568","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[20.61111111111111,22.77777777777778],"x":[15,15],"y":["Monday","Tuesday"]}},"id":"f66803fa-4a8a-4162-a49e-e25c0730295d","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5e7963f1-2bf3-4129-93b5-9b8b61b8e76e","type":"ColumnDataSource"},"glyph":{"id":"ef12f653-b75f-463a-ad63-f7352a2baa29","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"84d34e37-5f71-4120-a08c-2a04f00a2f04","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"d5edb0a1-2c5e-44dc-bc62-df830c29c0f0","type":"ColumnDataSource"},"glyph":{"id":"ee525bde-241b-414f-be84-6e42d3ebbf50","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a38430ca-b079-4fb9-b268-831fee1b5195","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"a302440c-81a6-47e5-a853-916a841ed8f3","type":"Title"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"904d2403-cbf4-493b-8044-3a0837c23176","type":"FactorRange"},{"attributes":{"overlay":{"id":"9358d435-9150-4624-80c0-49ab1cb4d865","type":"BoxAnnotation"},"plot":{"id":"63e8a545-9e66-4dce-be45-a17648b686f0","subtype":"Chart","type":"Plot"}},"id":"c885e0eb-d760-4609-8f51-8d2077791115","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":23},"id":"1dc82c96-f715-4b42-8d08-eb2682f6d9bd","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"87327287-44d2-4d9a-9f22-07642a76fae6","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.235294117647058],"x":[14],"y":["Monday"]}},"id":"5e7963f1-2bf3-4129-93b5-9b8b61b8e76e","type":"ColumnDataSource"},{"attributes":{},"id":"763cfb2c-2ee4-4b62-94c4-940c11e8b881","type":"BasicTickFormatter"},{"attributes":{"callback":null,"tabs":[{"id":"679d57be-f8c2-47ca-98bf-0e283ccfa1c9","type":"Panel"},{"id":"efa2fd7d-76ca-488a-a81b-17a61872d3d7","type":"Panel"}]},"id":"9afbd6d1-bf3b-4746-b30e-d7d8823be1ea","type":"Tabs"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"cacf42c1-de1a-4935-8cca-f6bb4982af9c","type":"Rect"},{"attributes":{"child":{"id":"f945cabf-0158-479b-a170-3cce494d008b","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"679d57be-f8c2-47ca-98bf-0e283ccfa1c9","type":"Panel"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"13a2b474-f942-4591-b266-ef5b774d552d","type":"Rect"},{"attributes":{"plot":{"id":"63e8a545-9e66-4dce-be45-a17648b686f0","subtype":"Chart","type":"Plot"}},"id":"979832eb-6167-49a8-b817-42779a5f58c4","type":"HelpTool"},{"attributes":{},"id":"3f1c01e2-ffc1-451f-8fec-893b94909885","type":"CategoricalTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2eea3a62-5886-4fab-8862-b9a87d9d5151","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ef12f653-b75f-463a-ad63-f7352a2baa29","type":"Rect"},{"attributes":{"color_mapper":{"id":"a13d07f9-ebab-4e14-8be9-06a69219fdcc","type":"LinearColorMapper"},"formatter":{"id":"d8363b21-1017-45a2-bb63-3dd901ce0263","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"f945cabf-0158-479b-a170-3cce494d008b","subtype":"Chart","type":"Plot"},"ticker":{"id":"e1273080-5438-43ba-93c3-e364f3b401a1","type":"BasicTicker"}},"id":"50d64b21-9ee2-4dac-93ff-8298794a4491","type":"ColorBar"},{"attributes":{"color_mapper":{"id":"b8151c09-ee52-4f0a-accd-4e9bdae21619","type":"LinearColorMapper"},"formatter":{"id":"763cfb2c-2ee4-4b62-94c4-940c11e8b881","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"63e8a545-9e66-4dce-be45-a17648b686f0","subtype":"Chart","type":"Plot"},"ticker":{"id":"0a21025e-6887-423b-98cf-ced15a37a825","type":"BasicTicker"}},"id":"f03bb019-377c-4631-8948-0f0496b7384e","type":"ColorBar"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"36797d55-8f60-4ad2-8d8b-1cddbf5158de","type":"LinearAxis"}],"left":[{"id":"40734b1e-c8ec-4dff-a37d-d3c993e077ad","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"9358d435-9150-4624-80c0-49ab1cb4d865","type":"BoxAnnotation"},{"id":"e68ef225-59b6-45d6-b1a8-ddc0777adcae","type":"GlyphRenderer"},{"id":"dd29df67-2b4b-4950-829d-9c1cebd1f761","type":"GlyphRenderer"},{"id":"d46990b8-deed-4a04-9e53-e6b1c13f6d95","type":"GlyphRenderer"},{"id":"4980d8a1-f762-4b3d-9aed-4ba39f53f033","type":"GlyphRenderer"},{"id":"771776a2-b30e-4664-8cb6-ff86cd49b497","type":"GlyphRenderer"},{"id":"84d34e37-5f71-4120-a08c-2a04f00a2f04","type":"GlyphRenderer"},{"id":"840b6a68-b7af-4d78-bd14-2f2bef0e7dce","type":"GlyphRenderer"},{"id":"5da4cd29-a9d5-40b0-9ceb-6be2e3ac38be","type":"GlyphRenderer"},{"id":"a38430ca-b079-4fb9-b268-831fee1b5195","type":"GlyphRenderer"},{"id":"36797d55-8f60-4ad2-8d8b-1cddbf5158de","type":"LinearAxis"},{"id":"40734b1e-c8ec-4dff-a37d-d3c993e077ad","type":"CategoricalAxis"},{"id":"f03bb019-377c-4631-8948-0f0496b7384e","type":"ColorBar"}],"right":[{"id":"f03bb019-377c-4631-8948-0f0496b7384e","type":"ColorBar"}],"title":{"id":"03f60e2c-1cdb-4f4a-b266-51fada255ed3","type":"Title"},"tool_events":{"id":"c55e0a7b-ed62-4088-a286-8adc5dfe5faf","type":"ToolEvents"},"toolbar":{"id":"95412de3-2025-4ccc-871b-114f3b942792","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"6b3a9e28-0f51-4a04-a4f3-f6e0dc4804be","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"904d2403-cbf4-493b-8044-3a0837c23176","type":"FactorRange"}},"id":"63e8a545-9e66-4dce-be45-a17648b686f0","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[13.526315789473685,16.0,14.5,16.454545454545453],"x":[14,12,15,15],"y":["Wednesday","Thursday","Thursday","Saturday"]}},"id":"5249bd78-ac62-44e0-bce2-c79d62a16afc","type":"ColumnDataSource"},{"attributes":{},"id":"64c7dfb7-0794-4b00-9d44-9b99ff440d47","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"416d6daf-77af-4201-859e-b0ef51f497b5","type":"ColumnDataSource"},"glyph":{"id":"0ad57d3f-a530-4771-b7b8-3a8b76612f31","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"88b6806e-3517-45a3-aaa9-e45db6d4cc6b","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"e9c26080-e107-48c9-898c-bd3184d1ba9f","type":"ColumnDataSource"},"glyph":{"id":"6560dc97-9429-4efa-8f36-ef6c46f4ddb6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"771776a2-b30e-4664-8cb6-ff86cd49b497","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[7.055555555555555,9.68421052631579,9.6,9.033333333333333],"x":[14,15,16,14],"y":["Tuesday","Wednesday","Thursday","Saturday"]}},"id":"416d6daf-77af-4201-859e-b0ef51f497b5","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"6f6aa56e-850b-426e-a304-327f41bd0077","type":"LinearAxis"}],"left":[{"id":"5aa0a6e1-d4be-4c7d-acf6-9767a00de551","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"a83ee743-cd63-4a07-9368-d825329f95c3","type":"BoxAnnotation"},{"id":"5f6101d0-6437-4e9b-a152-4084893e13b0","type":"GlyphRenderer"},{"id":"052c497f-9c5a-457e-b7d5-a349256aa223","type":"GlyphRenderer"},{"id":"3fbe66bb-45fb-4b83-99aa-3b532d5185b8","type":"GlyphRenderer"},{"id":"2813e2ba-3aa8-49c0-a030-2c95009ebd8d","type":"GlyphRenderer"},{"id":"fcfc3eb9-6ba8-4468-aff0-3d0e5e6d14ad","type":"GlyphRenderer"},{"id":"166a38b3-a350-45f3-845d-f68f71049110","type":"GlyphRenderer"},{"id":"88b6806e-3517-45a3-aaa9-e45db6d4cc6b","type":"GlyphRenderer"},{"id":"ba6a49e8-5825-40ac-99b3-787883ebd5ae","type":"GlyphRenderer"},{"id":"dfee6a75-34c5-4389-9def-faa244db3e84","type":"GlyphRenderer"},{"id":"6f6aa56e-850b-426e-a304-327f41bd0077","type":"LinearAxis"},{"id":"5aa0a6e1-d4be-4c7d-acf6-9767a00de551","type":"CategoricalAxis"},{"id":"50d64b21-9ee2-4dac-93ff-8298794a4491","type":"ColorBar"}],"right":[{"id":"50d64b21-9ee2-4dac-93ff-8298794a4491","type":"ColorBar"}],"title":{"id":"a302440c-81a6-47e5-a853-916a841ed8f3","type":"Title"},"tool_events":{"id":"c707ff04-e362-4c96-9297-e60be5196e98","type":"ToolEvents"},"toolbar":{"id":"d0083be6-86c7-419c-9895-c0c0ba523bd8","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"1dc82c96-f715-4b42-8d08-eb2682f6d9bd","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"3097434a-95ca-4d3e-bdb9-b656b81fd4e9","type":"FactorRange"}},"id":"f945cabf-0158-479b-a170-3cce494d008b","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"63e8a545-9e66-4dce-be45-a17648b686f0","subtype":"Chart","type":"Plot"}},"id":"a43d29d5-4f51-4c8b-8349-c98be8689dbb","type":"WheelZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"198cc98d-e631-4fa8-a179-f1bcc77dec96","type":"Rect"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"b8151c09-ee52-4f0a-accd-4e9bdae21619","type":"LinearColorMapper"},{"attributes":{},"id":"2c1b9b88-e51f-482f-996d-028ed9254aec","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"f945cabf-0158-479b-a170-3cce494d008b","subtype":"Chart","type":"Plot"}},"id":"78f76d24-22c2-4b7a-a1f2-4d1b07bfdc0e","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[19.555555555555557,17.61111111111111],"x":[16,15],"y":["Saturday","Sunday"]}},"id":"6c3b65fb-5141-41e6-b173-5036a69c9425","type":"ColumnDataSource"}],"root_ids":["9afbd6d1-bf3b-4746-b30e-d7d8823be1ea"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"04be66a7-6245-4414-9f1b-ba7f23be45e1","elementid":"1b1a1f73-9306-497d-bba7-c699972c388a","modelid":"9afbd6d1-bf3b-4746-b30e-d7d8823be1ea"}];
                  
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