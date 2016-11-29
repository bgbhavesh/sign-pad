// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by sign-pad.js.
import { name as packageName } from "meteor/bgbhavesh:sign-pad";

// Write your tests here!
// Here is an example.
Tinytest.add('sign-pad - example', function (test) {
  test.equal(packageName, "sign-pad");
});
