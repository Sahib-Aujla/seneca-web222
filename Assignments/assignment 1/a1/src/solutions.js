/**
 * WEB222 – Assignment 1
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been copied
 * manually or electronically from any other source (including web sites)
 * or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: Sahibpreet Singh
 *      Student ID: 165338211
 *      Date: 27 sept 2022
 *
 * Please see all unit tests in the files problem-00.test.js, problem-01.test.js, etc.
 */

/*******************************************************************************
 * Problem 0: learn how to implement code to pass unit tests.
 *
 * Welcome to Assignment 1! In this assignment, you're going to be practicing lots
 * of new JavaScript programming techniques.  Before you dive in let's spend a
 * minute helping you learn how to read this code, and how to understand the
 * tests that go with it.
 *
 * In addition to this file, please also open the file `src/problem-00.test.js.
 * Start by reading the big comment at the top of that file, then come back here and
 * continue.
 *
 * Before continuing, make sure you have completed the necessary setup steps (e.g.,
 * install node.js, run `npm install`, install the suggested VSCode extensions).
 * The rest of the instructions assume that you have done this. If you need help,
 * ask your professor.
 *
 * After you finish reading src/problem-00.test.js, it's time to try running
 * the tests.  To run the tests, open a terminal (see https://code.visualstudio.com/docs/editor/integrated-terminal)
 * in the same directory as your `package.json` file (i.e., the root of this project)
 * and type the following command:
 *
 *   npm test
 *
 * You have to run this command in the root of your project (i.e., in the same
 * directory as package.json).  When you do, you will see a lot of failures.
 * That's expected, since we haven't written any solution code yet.
 *
 * You can also run tests for only this one problem instead of all tests. To do that,
 * add the name of a test file after `npm test` like this:
 *
 *   npm test problem-00
 *
 * This will look for tests that are part of the problem-00.test.js file, and only
 * run those.  Doing so should result in 1 failed and 1 passed test.
 *
 * The first test passes:
 *
 *  ✓ greeting should be a function (2ms)
 *
 * But the second one fails:
 *
 * ✕ greeting should return the correct string output (3ms)
 *
 * ● Problem 0 - greeting() function › greeting should  return the correct string output
 *
 *   expect(received).toBe(expected) // Object.is equality
 *
 *   Expected: "Hello WEB222 Student!"
 *   Received: "Hello WEB222 Student"
 *
 *     63 |   test('greeting should return the correct string output', function() {
 *     64 |     let result = greeting('WEB222 Student');
 *   > 65 |     expect(result).toBe('Hello WEB222 Student!');
 *        |                    ^
 *     66 |   });
 *     67 |
 *     68 |   /**
 *
 * We can see that the second test 'greeting should return the correct string output'
 * is failing. In particular, it's failing because it expected to get the string
 * "Hello WEB222 Student!" but instead it actually received the string "Hello WEB222 Student".
 *
 * It looks like we have a small typo in our code below, and we are missing
 * the final "!"" character.  Try adding it, save this file, and re-run the
 * tests again:
 *
 * npm test problem-00
 * PASS  src/problem-00.test.js
 *  Problem 0 - greeting() function
 *   ✓ greeting should be a function (2ms)
 *   ✓ greeting should return the correct string output
 *
 * Test Suites: 1 passed, 1 total
 * Tests:       2 passed, 2 total
 *
 * Excellent! At this point you're ready to move on to Problem 1. As you do,
 * read both the information in the Problem's comment (i.e., this file), and also read
 * the tests to understand what they expect from your code's implementation.
 *
 * One final word about these comments.  You'll see comments like this one:
 *
 * @param {string} name - the name to greet in the message
 * @returns {string}
 *
 * These are specially formatted comments that document parameters to functions,
 * and tell us the type (e.g., {string} or {number}), and also the parameter's name.
 * We also indicate the return type for functions (e.g., {string}).
 *
 * Finally, we also explain a bit about how the parameter is used, and what
 * data it will have, whether it's optional, etc.
 ******************************************************************************/

function greeting(name) {
  return `Hello ${name}!`;
}

/*******************************************************************************
 * Problem 1: clean-up formatting of text.  Specifically, make a given string
 * follow these rules:
 *
 *  - One space vs. two spaces after a period, question mark, or exclamation point
 *  - Single-quotes vs. double-quotes
 *  - Remove any spaces after ( and before )
 *
 * We want to be able to clean-up a string of text to follow some formatting rules.
 * Our function will be passed a string, and we need to correct it to follow the
 * expected format, then return that new version.
 *
 * The cleanUp() function should work like this:
 *
 * cleanUp('This is a sentence.  This is another.') --> returns 'This is a sentence. This is another.'
 * cleanUp('One!  Two?  Three.') --> returns --> 'One! Two? Three.'
 * cleanUp('This is "fun."') --> returns `This is 'fun.'`
 * cleanUp('A ( red) dog arrived.') --> returns 'A (red) dog arrived.'
 * cleanUp('A (red  ) dog arrived.') --> returns 'A (red) dog arrived.'
 * cleanUp('A (    red ) dog arrived.') --> returns 'A (red) dog arrived.'
 *
 * The string to be cleaned-up may contain one, some, or all of these errors,
 * and may contain multiple instances of the same error (e.g., it could be
 * a long string, like a paragraph vs. a single-sentence).
 *
 * @param {string} value - a string to be cleaned up
 * @return {string} the cleaned-up string
 ******************************************************************************/

function cleanUp(value) {
  // Replace this comment with your code...
  let myStringWithoutSpaces = value.replace(/\s{1,}/g, ' ');
  myStringWithoutSpaces = myStringWithoutSpaces.replace(/[(]\s{0,}/g, '(');
  myStringWithoutSpaces = myStringWithoutSpaces.replace(/\s{0,}[)]/g, ')');

  myStringWithoutSpaces = myStringWithoutSpaces.replaceAll(`"`, `'`);
  return myStringWithoutSpaces;
}

/*******************************************************************************
 * Problem 2: create an HTML <video> element for the given url.
 *
 * A <video> element hosts a video within a web page (think YouTube). Here is
 * how we might use HTML to include a video:
 *
 * <video src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"></video>
 *
 * Our <video> uses the `src` attribute to specify the URL to the video file to
 * be played.  We can also include lots of other attributes, for example:
 *
 * - loop: whether or not to loop the video (restart it) when it ends
 * - muted: whether or not to start the video muted
 *
 * Write the createVideo() function to accept three arguments (src, loop, muted),
 * and return the properly formatted <video> tag as a string. For example:
 *
 * createVideo('https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4');
 *
 * should return the following string of HTML:
 *
 * '<video src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"></video>'
 *
 * createVideo('https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4', true, true);
 *
 * should return the following string of HTML (NOTE: the `loop` and `muted` attributes):
 *
 * '<video src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" loop muted></video>'
 *
 * If either of `loop` or `muted` are not `true`, leave them out of the
 * resulting <video> tag.
 *
 * The returned <video> HTML string should be formatted as follows:
 *
 * - Remove any leading/trailing whitespace from `src` before you use it
 * - The `src` value should be wrapped in double-quotes (e.g., src="...")
 * - There should be a single space between the end of one attribute and start of the next (e.g., src="..." loop)
 * - The `loop` and `muted` attributes should only be added if their value is `true`
 *
 * @param {string} src - the src URL for the video
 * @param {boolean|undefined} loop - whether to include the `loop` attribute or not
 * @param {boolean|undefined} muted - whether to include the `muted` attribute or not
 * @returns {string} - the HTML string for the <video> tag
 ******************************************************************************/

function createVideo(src, loop, muted) {
  src = src.trim();
  let str = '<video src="' + src + '"';
  if (loop === true) {
    str = str + ' loop';
  }
  if (muted === true) {
    str = str + ' muted';
  }
  str = str + '></video>';
  // Replace this comment with your code...
  return str;
}

/*******************************************************************************
 * Problem 3: fix the formatting of Canadian Postal Codes
 *
 * A Canadian Postal Code (see https://en.wikipedia.org/wiki/Postal_codes_in_Canada)
 * is a 6-character string of the following form:
 *
 * A1A 1A1
 *
 * Many databases have postal codes that have been manually entered, and contain
 * formatting errors.  The fixPostalCode() function takes a possible postal code
 * (i.e. a string), attempts to format it, and returns the formatted version.
 * However, not all input postal codes can be formatted, and should be rejected
 * (see below).
 *
 * Here are the formatting rules we can fix, and validation checks we can make:
 *
 *  - Remove any leading/trailing whitespace
 *  - Convert everything to UPPER case letters
 *  - The fourth character might be a space, a dash (-), or be missing. Make it a space
 *  - Make sure the order and format of the letters/numbers is correct
 *
 * There are more than 800K valid postal codes.  The first three-characters of
 * the postal code is called a "Forward Sortation Area," and represents a geographic
 * region, with the first letter representing a province, or part of a province.
 *
 * The first character in a postal code can be any letter except D, F, I, O, Q, W, U, Z
 *
 * The other characters (i.e., letters) in a postal code can be any letter except
 * D, F, I, O, Q or U (i.e., W and Z are allowed)
 *
 * The numbers can be anything between 0 and 9
 *
 * If the string is not a valid postal code, an Error should be thrown.  See
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw.
 *
 * HINT: use a Regular Expression to help you check for valid characters/numbers
 *
 * @param {string} postalCode - a possible postal code to be formatted
 * @returns {string} - a formatted postal code
 ******************************************************************************/

function fixPostalCode(postalCode) {
  let newCode = postalCode.trim();
  newCode = newCode.toUpperCase();
  newCode = newCode.replace(/-/g, ' ');

  if (newCode[3] !== ' ') {
    let firstHalf = newCode.substring(0, 3);
    let secondHalf = newCode.substring(3, newCode.length);
    newCode = firstHalf + ' ' + secondHalf;
  }

  let exp = /^[^DFIOQWUZ\d][\d][^DFIOQU\d][\s{1}][\d][^DFIOQU\d][\d]$/;
  if (exp.test(newCode) === true) {
    return newCode;
  }

  throw 'ERROR';
}

/*******************************************************************************
 * Problem 4: convert a valid Canadian Postal Code to a Canadian Province
 *
 * The first letter of a Postal Code tells us which province the Postal Code is
 * from. Here's the list of Provinces/Territories, their 2-letter short form,
 * and the first letter(s) of the Postal Code that matches it:
 *
 * Province Name                    Short Form      First Letter of Postal Code
 * -----------------------------------------------------------------------------
 * Ontario                          ON              K, L, M, N, P
 * Quebec                           QC              G, H, J
 * Nova Scotia                      NS              B
 * New Brunswick                    NB              E
 * Manitoba                         MB              R
 * British Columbia                 BC              V
 * Prince Edward Island             PE              C
 * Saskatchewan                     SK              S
 * Alberta                          AB              T
 * Newfoundland and Labrador        NL              A
 * Nunavut, Northwest Territories   NT              X
 * Yukon                            YT              Y
 *
 * The toProvince() function converts a valid postal code to a province name. Use
 * your fixPostalCode() function from the previous problem to format and validate
 * the `postalCode` argument first. If it is invalid, return `null`. HINT: use try/catch
 * to deal with fixPostalCode() throwing an error, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
 *
 * If the `useLongForm` argument is `true`, the province's long-form is
 * returned instead of the short form (default).  For example:
 *
 * toProvince('M5W1E6') returns 'ON'
 * toProvince('M5W 1E6') returns 'ON'
 * toProvince('M5W 1E6', true) returns 'Ontario'
 * toProvince('M5W') returns null
 *
 * @param {string} postalCode - a postal code to be validated and used
 * @param {boolean|undefined} useLongForm - whether to return the long form name
 * @returns {string} - a province (short form by default, or long form if requested)
 ******************************************************************************/

function toProvince(postalCode, useLongForm) {
  // Replace this comment with your code...
  let newPostalCode;
  try {
    newPostalCode = fixPostalCode(postalCode);
  } catch (e) {
    return null;
  }
  let onexp = /^[KLMNP]/;
  let qbexp = /^[GHJ]/;
  if (onexp.test(newPostalCode) === true) {
    if (useLongForm === true) return 'Ontario';

    return 'ON';
  } else if (qbexp.test(newPostalCode) === true) {
    if (useLongForm === true) return 'Quebec';

    return 'QC';
  } else if (newPostalCode[0] === 'B') {
    if (useLongForm === true) return 'Nova Scotia';

    return 'NS';
  } else if (newPostalCode[0] === 'E') {
    if (useLongForm === true) return 'New Brunswick';

    return 'NB';
  } else if (newPostalCode[0] === 'R') {
    if (useLongForm === true) return 'Manitoba';

    return 'MB';
  } else if (newPostalCode[0] === 'V') {
    if (useLongForm === true) return 'British Columbia';

    return 'BC';
  } else if (newPostalCode[0] === 'C') {
    if (useLongForm === true) return 'Prince Edward Island';

    return 'PE';
  } else if (newPostalCode[0] === 'S') {
    if (useLongForm === true) return 'Saskatchewan';

    return 'SK';
  } else if (newPostalCode[0] === 'T') {
    if (useLongForm === true) return 'Alberta';

    return 'AB';
  } else if (newPostalCode[0] === 'A') {
    if (useLongForm === true) return 'Newfoundland and Labrador';

    return 'NL';
  } else if (newPostalCode[0] === 'X') {
    if (useLongForm === true) return 'Northwest Territories and Nunavut';

    return 'NT';
  } else if (newPostalCode[0] === 'Y') {
    if (useLongForm === true) return 'Yukon';

    return 'YT';
  }
}

/*******************************************************************************
 * Problem 5: parse a geographic coordinate
 *
 * Coordinates are defined as numeric, decimal values of Longitude and Latitude.
 * As an example, the Seneca College Newnham campus is located at:
 *
 * Longitude: -79.3496 (negative number means West)
 * Latitude: 43.7955 (positive number means North)
 *
 * A dataset includes thousands of geographic coordinates, stored as strings.
 * However, over the years, different authors have used slightly different formats.
 * All of the following are valid and need to be parsed:
 *
 * 1. "43.7955 -79.3496" (NOTE: only a space, no comma)
 * 4. "[-79.3496,43.7955]" (NOTE: comma with no space, lat/lng values are reversed)
 *
 * Valid Longitude values are decimal numbers between -180 and 180.
 *
 * Valid Latitude values are decimal numbers between -90 and 90.
 *
 * Parse the value and reformat it into the string form: "(lat, lng)"
 *
 * @param {string} value - a geographic coordinate string in one of the given forms
 * @returns {string} - a geographic coordinate formatted as "(lat, lng)"
 ******************************************************************************/

function normalizeCoord(value) {
  // Replace this comment with your code...
  let lat, lon, normalCoord;
  let newVal = value.match(/[+-]{0,1}\d+\.{0,1}\d+/g);
  if (value !== null) {
    if (value[0] === '[') {
      lat = newVal[1];
      lon = newVal[0];
      normalCoord = `(${lat}, ${lon})`;
    } else {
      lat = newVal[0];
      lon = newVal[1];
      normalCoord = `(${lat}, ${lon})`;
    }
  }

  if (lat < -90 || lat > 90) {
    throw 'ERROR';
  }
  if (lon < -180 || lon > 180) {
    throw 'ERROR';
  }
  return normalCoord;
}

/*******************************************************************************
 * Problem 6: format any number of coordinates as a list in a string
 *
 * You are asked to format geographic lat, lng coordinates in a list using your
 * normalizeCoord() function from problem 5.
 *
 * Where normalizeCoord() takes a single geographic coord, the formatCoords()
 * function takes a list of any number of geographic coordinates (strings),
 * parses them, filters out any invalid coords, and creates a list (string).
 *
 * For example: given the following coords, "43.7955 -79.3496" and "[-62.1234,43.7955]",
 * a new list would be created of the following form "((43.7955, -79.3496) (43.7955, -62.1234))".
 *
 * Notice how the list has been enclosed in an extra set of (...) braces, and each
 * formatted geographic coordinate is separated by a space.
 *
 * The formatCoords() function can take any number of arguments, but they must all
 * be strings.  If any of the values can't be parsed by normalizeCoord() (i.e., if
 * an Error is thrown), skip the value.  For example:
 *
 * formatCoords("43.7955, -79.3496", "[-62.1234,43.7955]", "300, -9000") should return
 * "((43.7955, -79.3496) (43.7955, -62.1234))" and skip the invalid coordinate.
 *
 * @param {string} values - any number of string arguments can be passed
 * @returns {string}
 ******************************************************************************/

function formatCoords(...values) {
  // Replace this comment with your code...
  let newCoords = values.map((e) => {
    try {
      return normalizeCoord(e);
    } catch (err) {
      return '';
    }
  });

  let str = '(';
  for (let i = 0; i < newCoords.length; i++) {
    if (i === 0) {
      str += newCoords[i];
    } else {
      str += ' ' + newCoords[i];
    }
  }
  str += ')';
  str = str.replace(/\s{1,}/g, ' ');
  str = str.replace(/[(]\s{1,}/g, '(');

  return str;
}

/*******************************************************************************
 * Problem 7: count valid postal codes for a given province code
 *
 * The countForProvince() function takes a province (long or short form), and
 * any number of postal codes, some of which may be invalid.  It returns the
 * total number of postal codes for the given province.
 *
 * For example:
 *
 * countForProvince('ON', 'M5W 1E6') returns 1
 * countForProvince('Ontario', 'M5W 1E6') returns 1
 * countForProvince('ON', 'Y0A 1L0') returns 0
 * countForProvince('Ontario', 'M5W 1E6', 'N0B 1K0') returns 2
 * countForProvince('ON', 'M5W 1E6', 'N0B 1K0', 'Y0A 1L0') returns 2
 * countForProvince('ON', 'INVALID', '', 'Y0A 1L0') returns 0
 *
 * Use the toProvince() function you wrote earlier in your answer. In your
 * solution, deal with the `provinceCode` being 2 characters (short-form) or
 * more than 2 characters (long-form)
 *
 * Throw an error if no postal codes are passed, or if any of the postal codes
 * is not a string.
 *
 * @param {string} provinceCode - a province (long- or short-form)
 * @param {string} ...postalCodes - one or more postal code strings
 * @returns {number} the total, or 0
 ******************************************************************************/

function countForProvince(provinceCode, ...postalCodes) {
  // Replace this comment with your code...
  let valid = provinceCode.length > 2 ? true : false;
  let ans,
    count = 0;
  if (postalCodes.length === 0) {
    throw 'ERROR';
  } else {
    for (let i = 0; i < postalCodes.length; i++) {
      if (isNaN(postalCodes[i]) === false) {
        throw 'ERROR';
      } else {
        ans = toProvince(postalCodes[i], valid);
        if (ans === provinceCode) {
          count++;
        }
      }
    }
  }
  return count;
}

/*******************************************************************************
 * Problem 8: generate license text and link from license code.
 *
 * Images, videos, and other resources on the web are governed by copyright.
 * Everything you find on the web is copyright to its creator automatically, and
 * you cannot reuse it unless you are granted a license to do so.
 *
 * Different licenses exist to allow creators to share their work. For example,
 * the Creative Commons licenses are a popular way to allow people to reuse
 * copyright material, see https://creativecommons.org/licenses/.
 *
 * Below is a list of license codes, and the associated license text explaining the code:
 *
 * CC-BY: Creative Commons Attribution License
 * CC-BY-NC: Creative Commons Attribution-NonCommercial License
 * CC-BY-SA: Creative Commons Attribution-ShareAlike License
 * CC-BY-ND: Creative Commons Attribution-NoDerivs License
 * CC-BY-NC-SA: Creative Commons Attribution-NonCommercial-ShareAlike License
 * CC-BY-NC-ND: Creative Commons Attribution-NonCommercial-NoDerivs License
 *
 * NOTE: any other licenseCode should use the URL https://choosealicense.com/no-permission/
 * and the explanation text, "All Rights Reserved"
 *
 * Write a function, generateLicenseLink(), which takes a license code, and returns
 * an HTML link to the appropriate license URL, and including the explanation text.
 *
 * For example:
 *
 * generateLicenseLink('CC-BY-NC') should return the following HTML string:
 *
 * '<a href="https://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial License</a>'
 *
 * The URL is generated based on the license code:
 *
 * - remove the `CC-` prefix
 * - convert to lower case
 * - place formatted license code within URL https://creativecommons.org/licenses/[...here]/4.0/
 *
 * Your generateLicenseLink() function should also accept an optional second argument,
 * `includeLicenseAttr`.  If `includeLicenseAttr` is true, add ` rel="license"` to your
 * link so that it's clear this URL points to license information.
 *
 * You can read more about HTML links at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 *
 * @param {string} licenseCode - a license code
 * @param {boolean|undefined} includeLicenseAttr - whether to include the rel="license" attribute
 * @returns {string}
 ******************************************************************************/

function generateLicenseLink(licenseCode, includeLicenseAttr) {
  let incLicense = includeLicenseAttr === true ? ' rel="license"' : '';
  if (licenseCode === null || licenseCode === undefined) {
    return `<a href="https://choosealicense.com/no-permission/"${incLicense}>All Rights Reserved</a>`;
  }
  let newCode = licenseCode.match(/[A-Z][A-Z]/g);
  let str1 = '',
    str2 = '';
  if (newCode === null || newCode.length === 0) {
    return `<a href="https://choosealicense.com/no-permission/"${incLicense}>All Rights Reserved</a>`;
  }
  for (let i = 0; i < newCode.length; i++) {
    if (newCode[i] === 'BY') {
      str1 += 'by';
      str2 += 'Creative Commons Attribution';
    } else if (newCode[i] === 'NC') {
      str1 += '-nc';
      str2 += '-NonCommercial';
    } else if (newCode[i] === 'SA') {
      str1 += '-sa';
      str2 += '-ShareAlike';
    } else if (newCode[i] === 'ND') {
      str1 += '-nd';
      str2 += '-NoDerivs';
    }
  }
  str2 += ' License';

  return `<a href="https://creativecommons.org/licenses/${str1}/4.0/"${incLicense}>${str2}</a>`;
}

/*******************************************************************************
 * Problem 9 Part 1: convert a value to a Boolean (true or false)
 *
 * A dataset contains fields that indicate a value is true or false.  However,
 * users have entered data in various formats and languages (English and French)
 * over the years, and the data is a mess. For example, the dataset contains all
 * of the following values:
 *
 * Yes, yes, YES, Y, Oui, oui, OUI, O, t, TRUE, true, True, vrai, V, VRAI, 1, 2, ...any positive number
 * No, no, NO, Non, non, NON, N, n, f, FALSE, false, False, FAUX, faux, Faux, 0, -1, -2, ...any negative number
 *
 * Write a function toBool() which takes a String, Number, or Boolean,
 * and attempts to convert it into a pure Boolean value (i.e., true or false),
 * according to these rules:
 *
 * 1. If the value is already a Boolean (true or false) return the value without conversion
 * 2. If the value is one of the "true" type values (yes, "true", 1, ...), return `true` (Boolean)
 * 3. If the value is one of the "false" type values (no, "false", -1), return `false` (Boolean)
 * 4. If the value is none of the "true" or "false" values, throw an error with the error
 * message, 'invalid value'.
 *
 * @param {string|number|boolean} value - a value to convert to true/false
 * @returns {boolean}
 ******************************************************************************/

function toBool(value) {
  // Replace this comment with your code...
  if (typeof value === 'number') {
    if (value > 0) {
      return true;
    }
    return false;
  } else if (typeof value === 'boolean') {
    return value;
  } else if (typeof value === 'string') {
    let newVal;

    newVal = value.toLowerCase();
    if (
      newVal === 'true' ||
      newVal === 't' ||
      newVal === 'y' ||
      newVal === 'yes' ||
      newVal >= 1 ||
      newVal === 'o' ||
      newVal === 'oui' ||
      newVal === 'vrai' ||
      newVal === 'v'
    ) {
      return true;
    }
    return false;
  }
  throw 'invalid value';
}

/*******************************************************************************
 * Problem 9 Part 2: checking for all True or all False values in a normalized list
 *
 * Using your toBool() function above, create three new functions to check
 * if a list of arguments are all "true", partially "true", or all "false" values:
 *
 * all('Y', 'yes', 1) --> returns true
 * some('Y', 'no', 1) --> returns true
 * some('N', 'no', 0) --> returns false
 * none('Y', 'invalid', 1) --> returns false
 *
 * Use try/catch syntax to avoid having your functions throw errors when pureBool()
 * throws on invalid data.
 ******************************************************************************/

function all() {
  // Replace this comment with your code...
  let ans;
  for (let i = 0; i < arguments.length; i++) {
    ans = toBool(arguments[i]);
    if (ans === false) {
      return false;
    }
  }
  return true;
}

function some() {
  let ans,
    count = 0;
  for (let i = 0; i < arguments.length; i++) {
    ans = toBool(arguments[i]);
    if (ans === true) {
      count++;
    }
  }
  if (count > arguments.length / 10) {
    return true;
  }
  return false;
}

function none() {
  // Replace this comment with your code...
  let ans,
    count = 0;
  for (let i = 0; i < arguments.length; i++) {
    ans = toBool(arguments[i]);
    if (ans === false) {
      count++;
    }
  }
  if (count === arguments.length) {
    return true;
  }
  if (count > arguments.length / 2) {
    return false;
  }
}

/*******************************************************************************
 * Problem 10 - build a URL
 *
 * An imaginary web API is available at https://api.web222-example.org/v3/query
 * It allows users to query data by creating a URL in a particular way. As we
 * know from week 1, a URL can contain optional name=value pairs, see:
 * https://web222.ca/weeks/week01/#urls
 *
 * For example:
 *
 *   https://www.store.com/search?q=dog includes q=dog
 *
 *   https://www.store.com?_encoding=UTF8&node=18521080011 includes
 *   both _encoding=UTF8 and also node=18521080011, separated by &
 *
 * We will write a buildQuery() function to build a query URL for the API
 * based on arguments passed by the caller.
 *
 * The buildQuery() function accepts the following arguments:
 *
 * - query: a URI encoded search string, for example "butterfly" or "Horse-chestnut"
 * - per_page: a number indicating how many results to return per page (min=1, max=100)
 * - page: a number, indicating the starting page to return (min=1)
 * - format: a string, indicating the type of data to return. The following formats are
 *           valid: html, json, xml.
 *
 * Write an implementation of buildUrl() that accepts arguments for all of the above
 * parameters, validates them (e.g., per_page must be between 1 and 100, etc), and returns
 * a properly formatted URL. If any of the values passed to buildQuery() are invalid,
 * an Error should be thrown.
 *
 * For example:
 *
 * buildQuery('Monarch Butterfly', 25, 1, 'json') would return the following URL:
 *
 * https://api.web222-example.org/v3/query?query='Monarch%20Butterfly'&per_page=25&page=1&format=json
 *
 * NOTE:
 *
 * NOTE: make sure you properly encode the query value, since URLs can't contain
 * spaces or other special characters. HINT: use the encodeURIComponent() function
 * to do this, see:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
 *
 * @param {string} query the query to use. Must be properly URI encoded
 * @param {number} perPage the number of items per page (1-100)
 * @param {number} page the page of results to start at (must be 1 or greater)
 * @param {string} format the format of results (one of: html, json, xml)
 * @returns {string} the properly formatted URL
 ******************************************************************************/

function buildQuery(query, perPage, page, format) {
  // Replace this comment with your code...
  let new1 = encodeURIComponent(query);
  if (perPage > 100 || perPage < 1 || page < 1) {
    throw 'page below 1 throws but 1 works';
  }
  if (format === 'html' || format === 'json' || format === 'xml') {
    return `https://api.web222-example.org/v3/query?query=${new1}&per_page=${perPage}&page=${page}&format=${format}`;
  }
  throw 'license must be one of the expected values';
}

// Our unit test files need to access the functions we defined
// above, so we export them here.
exports.greeting = greeting;
exports.cleanUp = cleanUp;
exports.createVideo = createVideo;
exports.fixPostalCode = fixPostalCode;
exports.toProvince = toProvince;
exports.normalizeCoord = normalizeCoord;
exports.formatCoords = formatCoords;
exports.countForProvince = countForProvince;
exports.generateLicenseLink = generateLicenseLink;
exports.toBool = toBool;
exports.all = all;
exports.some = some;
exports.none = none;
exports.buildQuery = buildQuery;
