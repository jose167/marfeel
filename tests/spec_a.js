import { toUpperCase, createMainContainer, createChartContainer, createChart , createCircles, currentChart } from './../src/index.js'
import dataRevenue from './../src/revenue.json';
import * as d3 from 'd3';


describe("MyJSUtilities", function() {

    describe("Create main container div", function() {
      it("should create a container id= container", () => {
        const container = document.createElement('div');
        container.id = "container"
        document.body.appendChild(container);
        expect(createMainContainer()).toEqual(container);
      }); 
    });  

      describe("create Chart Container", function() {
        it("should create a container id = main_", () => {
          const currentClass = dataRevenue.items.class;
          const mainContainer = document.getElementById("container");
          const elementMain = document.createElement('div');
          elementMain.id = ("main_" + currentClass);
          elementMain.classList.add("fade");
          mainContainer.appendChild(elementMain);

          const elementDiv = document.createElement('div');
          elementDiv.classList.add(currentClass);
          elementMain.appendChild(elementDiv);

          expect(createChartContainer( mainContainer, dataRevenue)).toEqual(elementMain);
        });
      });   

      describe("toUpperCase", function() {
        it("should be able to upper case a string",() => {
          expect(toUpperCase).toBeDefined();
          expect(toUpperCase("hello world")).toEqual("HELLO WORLD");
        });
      });
      describe("test d3 js ", () =>  {
          it('should created "svg"', () =>  {
              expect(getSvg()).not.toBeNull();
          });
          it('should have the correct height', () => {
            expect(getSvg().attr('height')).toBe('450');
          });
          it('should have the correct width', () => {
            expect(getSvg().attr('width')).toBe('450');
          });            
      });

      describe('working with data', () => {         
        const dataItems = dataRevenue.items
        const data = dataRevenue;
        it(" should All keys in items be present in the JSON", () => {
         
          expect(checkJsonKey(dataItems, "class")).toBe(true);
          expect(checkJsonKey(dataItems, "colourA")).toBe(true);
          expect(checkJsonKey(dataItems, "colourB")).toBe(true);
          expect(checkJsonKey(dataItems, "title")).toBe(true);
          expect(checkJsonKey(dataItems, "amount")).toBe(true);
          expect(checkJsonKey(dataItems, "tabletper")).toBe(true);
          expect(checkJsonKey(dataItems, "smartphoneper")).toBe(true);
          expect(checkJsonKey(dataItems, "tableNum")).toBe(true);
          expect(checkJsonKey(dataItems, "smartphoneNum")).toBe(true);
        });
        it("Should all main keys be present in JSON", () => {
          expect(checkJsonKey(data, "donut")).toBe(true);
          expect(checkJsonKey(data, "items")).toBe(true);
          expect(checkJsonKey(data, "area")).toBe(true);
        });

      });

    // helper functions 
    function getSvg() {
      return d3.select('svg');
    }

    function checkJsonKey(obj, value){
      if(Object.keys(obj).indexOf(value) > -1 ){
        return true;
      }else 
       return false;
    }
});

