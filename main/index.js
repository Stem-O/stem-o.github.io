document.addEventListener('DOMContentLoaded', function (event) {
    // array with texts to type in typewriter
    var dataText = new Array("We are students from the section called Stem 11-O.", "We love to code and do things that are fun.", "This website belongs & is orginally created for Stem 11-O.");
    var hours = new Date().getHours();
    var subArray = [];
    var img = document.getElementById("timedetermine");
    if (hours >= 18 && hours <= 24) {
        var morningGreet = "Hello Everyone and Good Evening.";
        img.setAttribute('src', "https://thumbs.gfycat.com/AmbitiousEvilArcticwolf-max-1mb.gif");
        dataText.unshift(morningGreet);
    }
    else if (hours >= 12 && hours <= 17) {
        var afternoonGreet = "Hello Everyone and Good AfterNoon.";
        img.setAttribute('src', "https://thumbs.gfycat.com/IdenticalCorruptFluke-max-1mb.gif");
        dataText.unshift(afternoonGreet);
    }
    else if (hours < 12) {
        var eveningGreet = "Hello Everyone and Good Morning!";
        dataText.unshift(eveningGreet);
        img.setAttribute('src', "https://i.gifer.com/origin/51/51e587c41c5c3a3539d15908deccb6f3_w200.gif");
    }
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    var typeWriter = function (text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1
            document.getElementById("typetext").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true">|</span>';
            // wait for a while and call this function again for next character
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback);
            }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    };
    // start a typewriter animation for a text in the dataText array
    var StartTextAnimation = function (i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 20000);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function () {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    };
    // start the text animation
    StartTextAnimation(0);
    var changeSection = function (section) {
        var getYear = new Date().getFullYear();
        var getMonth = new Date().getMonth();
        if (getYear == 2022 && getMonth == 3) {
            document.getElementById("labela").innerHTML = section;
            document.title = section;
        }
        else {
            console.log("Year: " + getYear);
        }
    };
    changeSection("Stem 12-O");
    var rickRoll = function (url) {
        var hr = new Date().getHours();
        var min = new Date().getMinutes();
        if (hr == 5 && min == 15) {
            location.href = url;
        }
        else {
            console.log("It's not yet time for rickroll.");
        }
    };
    rickRoll("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
});
