/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-272.js
 * @description Object.defineProperties - 'O' is an Array, 'P' is generic own data property of 'O', test TypeError is thrown when updating the [[Enumerable]] attribute value of 'P' which is defined as non-configurable (15.4.5.1 step 5)
 */


function testcase() {

        var arr = [];

        Object.defineProperty(arr, "property", {
            value: 12,
            enumerable: false
        });

        try {
            Object.defineProperties(arr, {
                "property": {
                    enumerable: true
                }
            });
            return false;
        } catch (ex) {
            return (ex instanceof TypeError) && dataPropertyAttributesAreCorrect(arr, "property", 12, false, false, false);
        }
    }
runTestCase(testcase);
