import { toLowerCase } from './../src/index.js'

describe("MyJSUtilities", function() {

    describe(">String Utils", function() {
      it("should be able to lower case a string",function() {
        expect(toLowerCase).toBeDefined();
        expect(toLowerCase("HELLO WORLD")).toEqual("hello wooorld");
      });
      it("should be able to upper case a string",function() {
        expect().nothing();
      });
      it("should be able to confirm if a string contains a substring",function() {
        expect().nothing();
      });
      it("should be able repeat a string multiple times",function() {
        expect().nothing();
      });     
    
    });
});