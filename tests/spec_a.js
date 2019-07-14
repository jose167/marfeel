import { toLowerCase, createElements, createShape, createCircles, currentSlide } from './../src/index.js'

describe("MyJSUtilities", function() {

    describe("createElements", function() {
      it("should be able to lower case a string",function() {
        expect(toLowerCase).toBeDefined();
        expect(toLowerCase("HELLO WORLD")).toEqual("hello world");
      });
      it("should be able to throw error if createElements is called without arg",function() {
        expect(createElements).toBeDefined();
        expect(createElements()).toThrowError(Error);
      });
      it("should be able to confirm if a string contains a substring",function() {
        expect().nothing();
      });
      it("should be able repeat a string multiple times",function() {
        expect().nothing();
      });     
    
    });
});