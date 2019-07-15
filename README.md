### What is this repository for? ###
JavaScript test  Marfeel. 

### So how do I get started? ###

#### Install NodeJS ####
* [Node JS](https://nodejs.org/en/)

#### OK, let's build stuff! ####
1. Clone (https://github.com/jose167/marfeel.git) / download  this repo 
2. Open a console window and navigate to the root folder
3. Type `npm install` to install all the dependencies

### Building ###
Simply, run `npm run build`. This will publish artifacts to the `/dist/` folder 

### Run Server ###
Simply, run ` npm start`. Webpack-dev-server provides you with a simple server and ability to use life reloading. 

### Watch Mode ### 
Simply, run ` npm run watch`.  instruct webpack to "watch" all files within your dependency graph for changes. If one of these files is updated, the code will be recompiled so you don't have to run the full build manually.

#### General Testing ####
Simply, run `npm run test`. This will run all the tests and leave the browsers open. Tests will automatically re-run
every time a source file is changed.

[BDD using Jasmine](http://jasmine.github.io/edge/introduction.html). Tests are referred to as "specs";
accordingly they live in the "specs" folder. The specs _describe_ what a particular set of code _should_ do and are
organized that way: 

```
// First
describe('your test case', () => {
    // then explain that
    it('should do something when certain conditions are encountered', () => {
        // For example:
        const result = subject.doSomething('foo');
        expect(result).toBe('bar');
    });
});
```
