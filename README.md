<!DOCTYPE html>
<head>
<meta charset="UTF-8" />
<title>Stem 11-O</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<link rel="stylesheet" href="zoom.css" />
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-corner/dist/fork-corner.min.css">
<script src="https://cdn.jsdelivr.net/npm/fork-corner/dist/fork-corner.min.js" defer></script>
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js"></script>
<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
<script src="zoom.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
html {
	scroll-behavior: smooth;
}

* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: "poppins";
	color: #dbd7d7;
}

@media screen and (min-width: 800px) {
	body {
		background: #1a1a1a;
		height: 200vh;
		overflow: hidden;
		cursor: default;
	}
	
	header {
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #2fb0b9;
		height: 30vh;
	}
	
	header > h1 > a {
		color: #fff;
		font-size: 80px;
		text-shadow: 3px 5px 0 rgba(0, 0, 0, 0.2);
		text-decoration: none;
	}
	
	nav#navbar {
		background: #3f3d56;
		top: 0;
		position: relative;
		width: 100%;
		transition: all 0.5s linear;
		z-index: 1;
	}
	
	ul.menu-list {
		display: flex;
		list-style: none;
	}
	
	ul.menu-list li {
		display: flex;
		flex: 1;
		text-align: center;
		justify-content: center;
		align-items: center;
		padding: 5px 0;
	}
	
	ul.menu-list li.logo {
		max-width: 0;
		overflow: hidden;
		background: #fff;
		transition: all 0.5s linear;
	}
	
	.logo > a > img {
		max-width: 80px;
	}
	
	ul.menu-list li.logo > a {
		color: #fbb833;
	}
	
	ul.menu-list li > a {
		text-decoration: unset;
		display: flex;
		color: #fff;
		transition: 0.2s linar;
		text-transform: uppercase;
	}
	
	body.fixed-nav nav#navbar {
		position: fixed;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
	}
	
	body.fixed-nav li.logo {
		max-width: 300px;
	}
	
	#forkcorner {
	overflow: hidden;
	}
	
	li {
		transition: 0.5s;
		background-color: #1e1e22;
	}
	li:hover {
		letter-spacing: 3px;
		transition: 0.5s;
		background-color: #37373d;
	}
	
	.fixed {
		position: fixed;
		box-shadow: 5px 5px 19px 0px rgba(0, 0, 0, 0.5);
	}
	
	#home {
	background: #b8b7b7;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 19%;
	}
	
	#introhome {
	position: absolute;
	position: absolute;
	width: 100%;
	height: 100%;
	}
	
	#div1 {
	position: absolute;
	background-color: #161616;
	width: 45%;
	height: 25%;
	cursor: default;
	top: 1%;
	width: 49.8%;
	height: 25%;
	background-color: #1a1919;
	}
	
	#mainpic {
	position: absolute;
	width: 20%;
	height: 43%;
	border-radius: 5px;
	-webkit-animation-name: scale;
	animation-name: scale;
	-webkit-animation-duration: 6.5s;
	animation-duration: 6.5s;
	-webkit-animation-iteration-count: infinite;
	animation-iteration-count: infinite;
	top: 5%;
	}
	@-webkit-keyframes scale {
		0% {
			transform: scaleX(1);
		}
		20% {
			transform: scaleX(1.1);
		}
		40% {
			transform: scaleX(1);
		}
		60% {
			transform: scaleX(1.1);
		}
	}
	@keyframes scale {
		0% {
			transform: scaleX(1);
		}
		20% {
			transform: scaleX(1.1);
		}
		40% {
			transform: scaleX(1);
		}
		60% {
			transform: scaleX(1.1);
		}
	}
	
	#div2 {
	position: absolute;
	background-color: #161616;
	width: 45%;
	height: 25%;
	cursor: default;
	left: 50%;
	top: 1%;
	width: 49.8%;
	}
	
	#div3 {
	position: absolute;
	background-color: #161616;
	width: 45%;
	height: 25%;
	cursor: default;
	top: 26.5%;
	height: 24.9%;
	width: 49.8%;
	}
	
	#div4 {
	position: absolute;
	background-color: #161616;
	width: 45%;
	height: 25%;
	cursor: default;
	left: 50%;
	top: 26.5%;
	width: 50%;
	}
	
	#infohome {
	position: absolute;
	background-color: #161616;
	width: 45%;
	height: 25%;
	cursor: default;
	top: 52%;
	height: 29%;
	width: 100%;
	background-color: #030303;
	}
	
	#introdiv1 {
	position: absolute;
	background-color: #111111;
	width: 80%;
	height: 99%;
	left: 20%;
	}
	#introdiv1:hover {
	cursor: default;
	}
	
	#introdiv1-h2 {
	position: absolute;
	top: 10%;
	left: 35%;
	}
	
	#introdiv1-coverleft {
	position: absolute;
	width: 19.9%;
	height: 56%;
	top: 42%;
	background-color: #111111;
	}
	
	#introdiv1-p {
	position: absolute;
	top: 30%;
	left: 5%;
	width: 95%;
	}
	
	#fonderelite {
	position: absolute;
	width: 20%;
	height: 43%;
	border-radius: 5px;
	top: 51%;
	z-index: 2;
	}
	
	#career1 {
	position: absolute;
	border: 1px solid white;
	width: 22%;
	height: 45%;
	top: 33%;
	left: 1%;
	border-radius: 5px;
	}
	#career1:hover {
	cursor: pointer;
	}
	
	#career2 {
	position: absolute;
	border: 1px solid white;
	width: 22%;
	height: 45%;
	top: 33%;
	left: 1%;
	border-radius: 5px;
	}
	#career2:hover {
	cursor: pointer;
	}
	
	#career3 {
	position: absolute;
	border: 1px solid white;
	width: 22%;
	height: 45%;
	top: 33%;
	left: 1%;
	border-radius: 5px;
	}
	#career3:hover {
	cursor: pointer;
	}
	
	#career4 {
	position: absolute;
	border: 1px solid white;
	width: 22%;
	height: 45%;
	top: 33%;
	left: 1%;
	border-radius: 5px;
	}
	#career4:hover {
	cursor: pointer;
	}
	
	#career1 {
	background-size: 100% 100%;
	background-image: url("https://happysugarhabits.com/wp-content/uploads/2019/10/1002676_3c6e_2.jpg");
	}
	
	#career1h2 {
	position: absolute;
	left: 11%;
	font-size: 3vh;
	top: 38%;
	z-index: 1;
	}
	
	#career2h2 {
	position: absolute;
	left: 11%;
	font-size: 3vh;
	top: 38%;
	z-index: 1;
	}
	
	#career3h2 {
	position: absolute;
	left: 11%;
	font-size: 3vh;
	top: 38%;
	z-index: 1;
	}
	
	#career4h2 {
	position: absolute;
	left: 11%;
	font-size: 3vh;
	top: 38%;
	z-index: 1;
	}
	
	.overlay {
		background-color: #030303;
		opacity: 0.8;
		width: 100%;
		height: 100%;
		position: absolute;
	}
	
	#careerh2 {
	position: absolute;
	left: 40%;
	top: 11%;
	}
	
	#career1h2 {
	left: 20%;
	}
	
	#career2h2 {
	left: 5%;
	}
	
	#career3h2 {
	left: 25%;
	}
	
	#career4h2 {
	left: 20%;
	}
	
	#career2 {
	left: 26%;
	background: url("https://cdn2.hubspot.net/hubfs/3350762/Top%20Cybersecurity%20Zoom%20Backgrounds-4.png");
	background-size: 100% 100%;
	}
	
	#career3 {
	left: 52%;
	background: url("https://st2.depositphotos.com/4038693/7091/v/600/depositphotos_70912743-stock-illustration-app-development-concept.jpg");
	background-size: 100% 100%;
	}
	
	#career4 {
	left: 77%;
	background: url("https://www.indiegamewebsite.com/wp-content/uploads/2019/04/Appnormals1.png");
	background-size: 100% 100%;
	}
	
	.career .overlay:hover {
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		opacity: 0;
		transition: all 0.4s ease-in-out 0s;
	}
	
	.lang {
		position: absolute;
		top: 79%;
		z-index: 1;
	}
	
	#lang1 {
	left: 3%;
	}
	
	#lang2 {
	left: 12%;
	}
	
	#lang3 {
	left: 22%;
	}
	
	#lang4 {
	left: 33%;
	}
	
	#lang5 {
	left: 45%;
	}
	
	#lang6 {
	left: 57%;
	}
	
	#lang7 {
	left: 68%;
	}
	
	#lang8 {
	left: 78%;
	}
	
	#lang9 {
	left: 88%;
	}
	
	#lang-contain {
	position: absolute;
	width: 96%;
	height: 20%;
	background: #173642;
	border-radius: 5px;
	top: 76%;
	left: 2.5%;
	}
	
	#gamesh2 {
	position: absolute;
	top: 10%;
	left: 25%;
	}
	
	#game1 {
	position: absolute;
	border: 1px solid white;
	width: 22%;
	height: 45%;
	top: 33%;
	left: 1%;
	border-radius: 5px;
	}
	#game1:hover {
	cursor: pointer;
	}
	
	#game2 {
	position: absolute;
	border: 1px solid white;
	width: 22%;
	height: 45%;
	top: 33%;
	left: 1%;
	border-radius: 5px;
	}
	#game2:hover {
	cursor: pointer;
	}
	
	#game3 {
	position: absolute;
	border: 1px solid white;
	width: 22%;
	height: 45%;
	top: 33%;
	left: 1%;
	border-radius: 5px;
	}
	#game3:hover {
	cursor: pointer;
	}
	
	#game4 {
	position: absolute;
	border: 1px solid white;
	width: 22%;
	height: 45%;
	top: 33%;
	left: 1%;
	border-radius: 5px;
	}
	#game4:hover {
	cursor: pointer;
	}
	
	#game1h2 {
	position: absolute;
	font-size: 3vh;
	top: 38%;
	left: 18%;
	z-index: 1;
	}
	
	#game2h2 {
	position: absolute;
	font-size: 3vh;
	top: 38%;
	left: 18%;
	z-index: 1;
	}
	
	#game3h2 {
	position: absolute;
	font-size: 3vh;
	top: 38%;
	left: 18%;
	z-index: 1;
	}
	
	#game4h2 {
	position: absolute;
	font-size: 3vh;
	top: 38%;
	left: 18%;
	z-index: 1;
	}
	
	#game1 {
	background: url("https://wallpaperaccess.com/full/3901970.jpg");
	background-size: 100% 100%;
	}
	
	#game2 {
	left: 26%;
	background: url("https://coolthemestores.com/wp-content/uploads/2020/11/minecraft-features.jpg");
	background-size: 100% 100%;
	}
	
	#game3 {
	left: 52%;
	background: url("https://play-lh.googleusercontent.com/R5hLCLt947e0R9q0KZJeMQJu-zkeB601mKyJqYZIvb1sVz0xgplkH0etKIvZOmlRXDU");
	background-size: 100% 100%;
	}
	
	#game4 {
	left: 77%;
	background: url("https://images6.alphacoders.com/107/thumb-350-1072679.jpg");
	background-size: 100% 100%;
	}
	
	.overlaygame {
		background: #0a0a0a;
		width: 100%;
		height: 100%;
		opacity: 0.7;
	}
	
	.game .overlaygame:hover {
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		opacity: 0;
		transition: all 0.4s ease-in-out 0s;
	}
	
	#game3h2 {
	left: 28%;
	}
	
	#challengesh2 {
	position: absolute;
	top: 10%;
	left: 25%;
	}
	
	#challenge1 {
	position: absolute;
	border: 1px solid white;
	width: 22%;
	height: 45%;
	top: 33%;
	left: 1%;
	border-radius: 5px;
	}
	#challenge1:hover {
	cursor: pointer;
	}
	
	#challenge2 {
	position: absolute;
	border: 1px solid white;
	width: 22%;
	height: 45%;
	top: 33%;
	left: 1%;
	border-radius: 5px;
	}
	#challenge2:hover {
	cursor: pointer;
	}
	
	#challenge3 {
	position: absolute;
	border: 1px solid white;
	width: 22%;
	height: 45%;
	top: 33%;
	left: 1%;
	border-radius: 5px;
	}
	#challenge3:hover {
	cursor: pointer;
	}
	
	#challenge4 {
	position: absolute;
	border: 1px solid white;
	width: 22%;
	height: 45%;
	top: 33%;
	left: 1%;
	border-radius: 5px;
	}
	#challenge4:hover {
	cursor: pointer;
	}
	
	#challenge1 {
	background: url("data:image/jpeg;base64,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");
	background-size: 100% 100%;
	}
	
	#challenge2 {
	left: 26%;
	background: url("https://codybonney.com/images/1x1/tags/codewars.png");
	background-size: 100% 100%;
	}
	
	#challenge3 {
	left: 52%;
	background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/480px-HackerRank_Icon-1000px.png");
	background-size: 100% 100%;
	}
	
	#challenge4 {
	left: 77%;
	background: url("https://yt3.ggpht.com/ytc/AKedOLSsT2rTuoCjgj954x4iBhcrbJv2qln8MXx79GL-nA=s900-c-k-c0x00ffffff-no-rj");
	background-size: 100% 100%;
	}
	
	.overlaychallenge {
		background: #0a0a0a;
		width: 100%;
		height: 100%;
		opacity: 0.7;
	}
	
	.challenge .overlaychallenge:hover {
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		opacity: 0;
		transition: all 0.4s ease-in-out 0s;
	}
	
	.challengeh2 {
		position: absolute;
		left: 18%;
		top: 38%;
		font-size: 3vh;
	}
	
	#challenge3h2 {
	position: absolute;
	left: 16%;
	}
	
	#type {
	position: absolute;
	background-color: #111111;
	width: 100%;
	height: 40%;
	}
	
	.word {
		position: absolute;
		font-size: 5vh;
		top: 4%;
		left: 1%;
		display: none;
	}
	
	#s1 {
	color: white;
	left: 0%;
	display: block;
	top: 30%;
	}
	
	#s2 {
	display: block;
	color: white;
	left: 22.7%;
	top: 30%;
	}
	
	#w1 {
	color: #55ce30;
	position: absolute;
	display: block;
	top: 30%;
	}
	
	#w2 {
	color: #def03a;
	left: 10%;
	display: block;
	top: 30%;
	}
	
	#w3 {
	color: cyan;
	display: block;
	left: 12.2%;
	top: 30%;
	}
	
	#w4 {
	display: block;
	top: 30%;
	left: 23.7%;
	color: red;
	}
	
	#w5 {
	display: block;
	left: 25%;
	top: 28.5%;
	font-size: 5.5vh;
	color: greenyellow;
	}
	
	#typetext {
	position: absolute;
	font-size: 4.5vh;
	left: 27%;
	top: 30%;
	}
	
	#timedetermine {
	position: absolute;
	width: 10%;
	height: 100%;
	left: 85%;
	z-index: 1;
	}
	
	/*
	 *  #timeframe{
	 *    position: absolute;
	 *   background-color:rgb(2, 175, 187) ;
	 *    width:10%;
	 *    height:97%;
	 *    left:85%;
	 *    top:1%;
	 *    border-radius: 50%;
	 }
	 */
	#labelh2 {
	font-size: 10vh;
	color: #919191;
	position: absolute;
	left: 37%;
	top: 5%;
	font-weight: bold;
	}
	
	#label2h2 {
	position: absolute;
	font-size: 10vh;
	color: #0dd1d1;
	top: 5%;
	left: 51%;
	font-weight: bold;
	}
	
	#footerlabel {
	position: absolute;
	top: 40%;
	left: 0%;
	z-index: 1;
	width: 100%;
	height: 52.7%;
	background: #070707;
	}
	
	#copyright {
	position: absolute;
	width: 100%;
	background: #111111;
	top: 100%;
	}
	
	#copyrightp {
	text-align: center;
	}
	
	.tags {
		position: absolute;
		left: 0.5%;
	}
	
	#tag1 {
	top: 15%;
	color: #bebebe;
	left: 1%;
	}
	#tag1:hover {
	color: #16d1df;
	}
	
	#tag2 {
	top: 30%;
	color: #bebebe;
	left: 1%;
	}
	#tag2:hover {
	color: #16d1df;
	}
	
	#tag3 {
	top: 45%;
	color: #bebebe;
	left: 1%;
	}
	#tag3:hover {
	color: #16d1df;
	}
	
	#tag4 {
	top: 60%;
	color: #bebebe;
	left: 1%;
	}
	#tag4:hover {
	color: #16d1df;
	}
	
	#tag5 {
	top: 75%;
	color: #bebebe;
	left: 1%;
	}
	#tag5:hover {
	color: #16d1df;
	}
	
	.tags2 {
		left: 83%;
		position: absolute;
		display: none;
	}
	
	#tag6 {
	top: 60%;
	}
	#tag6:hover {
	color: #2fb0b9;
	}
	
	#tag7 {
	top: 70%;
	}
	#tag7:hover {
	color: #2fb0b9;
	}
	
	#tag8 {
	top: 80%;
	}
	#tag8:hover {
	color: #2fb0b9;
	}
	
	#tag9 {
	top: 90%;
	}
	#tag9:hover {
	color: #2fb0b9;
	}
	
	#label3h2 {
	position: absolute;
	font-size: 3vh;
	left: 0.5%;
	}
	
	#socialicons {
	position: absolute;
	border-radius: 10px;
	width: 40%;
	height: 25%;
	top: 55%;
	left: 28%;
	}
	
	.sicon {
		position: absolute;
		top: 17%;
		display: none;
	}
	.sicon:hover {
		cursor: pointer;
	}
	
	#icon1 {
	left: 3%;
	display: block;
	}
	
	#icon2 {
	left: 26.5%;
	display: block;
	}
	
	#icon3 {
	left: 51.5%;
	display: block;
	}
	
	#icon4 {
	left: 74.5%;
	display: block;
	}
	
	#stats {
	position: absolute;
	left: 110%;
	top: -180%;
	}
	
	#hamburger {
	display: none;
	}
	
	.langlabel {
		display: none;
	}
	
	.langcon {
		display: none;
	}
	
	#mobilediv2 {
	display: none;
	}
}
/*
 * __  __       _     _ _        ____  _         _      
 * |  \/  | ___ | |__ (_) | ___  / ___|| |_ _   _| | ___ 
 * | |\/| |/ _ \| '_ \| | |/ _ \ \___ \| __| | | | |/ _ \
 * | |  | | (_) | |_) | | |  __/  ___) | |_| |_| | |  __/
 * |_|  |_|\___/|_.__/|_|_|\___| |____/ \__|\__, |_|\___|
 *                                         |___/
 * __  __       _     _ _        ____  _         _      
 * |  \/  | ___ | |__ (_) | ___  / ___|| |_ _   _| | ___ 
 * | |\/| |/ _ \| '_ \| | |/ _ \ \___ \| __| | | | |/ _ \
 * | |  | | (_) | |_) | | |  __/  ___) | |_| |_| | |  __/
 * |_|  |_|\___/|_.__/|_|_|\___| |____/ \__|\__, |_|\___|
 *                                         |___/
 * 
 * __  __       _     _ _        ____  _         _      
 * |  \/  | ___ | |__ (_) | ___  / ___|| |_ _   _| | ___ 
 * | |\/| |/ _ \| '_ \| | |/ _ \ \___ \| __| | | | |/ _ \
 * | |  | | (_) | |_) | | |  __/  ___) | |_| |_| | |  __/
 * |_|  |_|\___/|_.__/|_|_|\___| |____/ \__|\__, |_|\___|
 *                                         |___/
 * 
 */
@media screen and (max-width: 768px) {
	body {
		background: #dddddd;
		margin: 0;
		padding: 0;
		width: 100%;
	}
	
	header {
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #2fb0b9;
		height: 105vh;
	}
	
	#labela {
	position: absolute;
	font-size: 9vh;
	left: 13%;
	top: 15%;
	font-weight: 600;
	text-decoration: unset;
	display: flex;
	color: #fff;
	transition: 0.2s linar;
	text-transform: uppercase;
	text-shadow: 1px 4px 0px grey;
	}
	
	#hamburger {
	width: 17%;
	height: 11%;
	border: 1px solid black;
	position: fixed;
	background-color: #2e2d2d;
	top: 0%;
	display: block;
	z-index: 1000;
	left: 0%;
	}
	
	.logo {
		display: none;
	}
	
	.bar {
		position: absolute;
		width: 80%;
		height: 10%;
		background-color: #e9e9e9;
		left: 8%;
		top: 5%;
	}
	
	#bar1 {
	top: 24%;
	}
	
	#bar2 {
	top: 48%;
	}
	
	#bar3 {
	top: 72%;
	}
	
	#navbar {
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: #111111;
	top: 0%;
	opacity: 0.8;
	z-index: 999;
	display: none;
	}
	
	#hamburger.active .bar:nth-child(2) {
	opacity: 0;
	transition: ease-in 0.2s;
	}
	
	#hamburger.active .bar:nth-child(1) {
	transform: translateY(8px) rotate(50deg);
	transition: ease-in 0.2s;
	background-color: #c71a1a;
	}
	
	#hamburger.active .bar:nth-child(3) {
	transform: translateY(-8px) rotate(-50deg);
	position: absolute;
	top: 57%;
	transition: ease-in 0.2s;
	background-color: #c71a1a;
	}
	
	#navli1 {
	position: absolute;
	left: 35%;
	top: 20%;
	font-size: 4vh;
	transition: ease-in 0.2s;
	}
	#navli1:hover {
	letter-spacing: 2px;
	transition: ease-in 0.2s;
	}
	
	#navli2 {
	position: absolute;
	left: 35%;
	top: 40%;
	font-size: 4vh;
	transition: ease-in 0.2s;
	}
	#navli2:hover {
	letter-spacing: 2px;
	transition: ease-in 0.2s;
	}
	
	#navli3 {
	position: absolute;
	left: 35%;
	top: 60%;
	font-size: 4vh;
	transition: ease-in 0.2s;
	}
	#navli3:hover {
	letter-spacing: 2px;
	transition: ease-in 0.2s;
	}
	
	#navli4 {
	position: absolute;
	left: 35%;
	top: 80%;
	font-size: 4vh;
	transition: ease-in 0.2s;
	}
	#navli4:hover {
	letter-spacing: 2px;
	transition: ease-in 0.2s;
	}
	
	#navli5 {
	position: absolute;
	left: 35%;
	top: 100%;
	font-size: 4vh;
	transition: ease-in 0.2s;
	}
	#navli5:hover {
	letter-spacing: 2px;
	transition: ease-in 0.2s;
	}
	
	#introdiv1 {
	position: absolute;
	background-color: #111111;
	width: 100%;
	height: 75%;
	left: 0%;
	}
	
	#mainpic {
	display: block;
	width: 50%;
	height: 30%;
	position: absolute;
	}
	
	#fonderelite {
	display: none;
	}
	
	#introdiv1-h2 {
	font-size: 5vh;
	position: absolute;
	left: 23%;
	top: 1%;
	}
	
	#introdiv1-p {
	display: block;
	position: absolute;
	top: 6%;
	left: 3%;
	font-size: 3vh;
	background-color: #222121;
	}
	
	.lang {
		position: absolute;
		top: 32%;
		left: 2%;
		z-index: 1;
		display: none;
		width: 17%;
		height: 5%;
	}
	
	#lang1 {
	top: 31%;
	display: block;
	}
	
	#lang2 {
	top: 37%;
	display: block;
	}
	
	#lang3 {
	top: 42.5%;
	display: block;
	}
	
	#lang4 {
	top: 48.5%;
	display: block;
	}
	
	#lang5 {
	top: 55%;
	display: block;
	}
	
	#lang6 {
	top: 62%;
	display: block;
	}
	
	#lang7 {
	top: 69%;
	display: block;
	}
	
	#lang8 {
	top: 76%;
	display: block;
	}
	
	#lang9 {
	display: block;
	top: 82.5%;
	}
	
	#div2 {
	display: none;
	}
	
	#div3 {
	display: none;
	}
	
	#div4 {
	display: none;
	}
	
	.langcon {
		position: absolute;
		background-color: #1c6886;
		width: 60%;
		font-size: 4vh;
		padding: 5px 10px;
		text-align: center;
		border-radius: 5px;
		left: 25%;
		display: none;
	}
	
	.langlabel {
		color: #fff;
	}
	
	#langcon1 {
	top: 31.6%;
	background-color: #be530b;
	display: block;
	}
	
	#langcon2 {
	top: 37.5%;
	background-color: #0f4fa3;
	display: block;
	}
	
	#langcon3 {
	top: 42.8%;
	display: block;
	background-color: palevioletred;
	}
	
	#langcon4 {
	top: 49%;
	display: block;
	background-color: #bbbb05;
	}
	
	#langcon5 {
	top: 55.5%;
	display: block;
	background-color: #085594;
	}
	
	#langcon6 {
	top: 62.5%;
	display: block;
	background-color: #9316ac;
	}
	
	#langcon7 {
	top: 69.8%;
	display: block;
	background-color: #1264a7;
	}
	
	#langcon8 {
	top: 76.5%;
	display: block;
	background-color: #07a0bb;
	}
	
	#langcon9 {
	top: 83%;
	display: block;
	background-color: #13a713;
	}
	
	#div2 {
	position: absolute;
	display: block;
	width: 100%;
	height: 70%;
	background: #161616;
	top: 109%;
	}
	
	#careerh2 {
	position: absolute;
	font-size: 5vh;
	left: 23%;
	top: 5%;
	}
}/*# sourceMappingURL=style.css.map */
</style>
</head>
<body>
<header>
<a href="https://github.com/stem-o" target="_blank" id="fork-corner" class="fork-corner fc-pos-tr fc-animate fc-theme-github" style="position: absolute"></a>

<h1><a id="labela" href="#">Stem 11-O</a></h1>

<!--Mobile Navbar Hamburger-->
<div id="hamburger">
<span id="bar1" class="bar"></span>
<span id="bar2" class="bar"></span>
<span id="bar3" class="bar"></span>
</div> 
<!--Mobile NavBar Hamburger End-->
</header>



<nav id="navbar">
<ul class="menu-list">
<li class="logo">Stem 11-O
<!-- <img src="quiz-logo.png" alt="logo"> --></li>
<li id="navli1"><a id="nava1" href="#">Home</a></li>
<li id="navli2"><a id="nava2" href="#">About</a></li>
<li id="navli3"><a id="nava3" href="#">Projects</a></li>
<li id="navli4"><a id="nava4" href="#">FAQ's</a></li>
<li id="navli5"><a id="nava5" href="#">Contact Us</a></li>
</ul>
</nav>

<!--Main Div-->
<div id="home">
<div id="introhome">
<div id="div1">
<img id="mainpic" src="https://i.ibb.co/wrnZHR3/Stem-11-K.png">
<img id="fonderelite" src="https://avatars.githubusercontent.com/u/71190959?v=4">
<div id="introdiv1">
<h2 id="introdiv1-h2">Introduction</h2>
<p id="introdiv1-p">Hello Everyone, we are STEM 11-O and we love technology. We are your future software engineers. The world of technology is greatly expanding and in little to no time we will finally get to see new inventions. This is the reason why we chose this path, the programmers of today are the wizards of tomorrow.

<!--Mobile Languages Labels-->
<div id="langcon1" class="langcon"><p id="langlabel1" class="langlabel">Html</p></div>
<div id="langcon2" class="langcon"><p id="langlabel2" class="langlabel">Css</p></div>
<div id="langcon3" class="langcon" ><p id="langlabel3" class="langlabel">Scss</p></div>
<div id="langcon4" class="langcon" ><p id="langlabel4" class="langlabel">Javascript</p></div>
<div id="langcon5" class="langcon" ><p id="langlabel5" class="langlabel">TypeScript</p></div>
<div id="langcon6" class="langcon"><p id="langlabel6" class="langlabel">BootStrap</p></div>
<div id="langcon7" class="langcon" ><p id="langlabel7" class="langlabel">C++</p></div>
<div id="langcon8" class="langcon" ><p id="langlabel8" class="langlabel">GoLang</p></div>
<div id="langcon9" class="langcon" ><p id="langlabel9" class="langlabel">Python</p></div>

<a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img id="lang1" class="lang" src="https://camo.githubusercontent.com/91624b4794cb98081ea55063865721be4b4399472c81e66b89b37fd07aad1d92/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f68746d6c2d352e706e67"></a>

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img id="lang2" class="lang" src="https://camo.githubusercontent.com/dc75aee770dff630309493116eeebd6a39c7042e4e94780a5e6c8f107bebe76f/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f637373332e706e67"></a>
<a href="https://sass-lang.com/documentation"><img id="lang3" class="lang" src="https://camo.githubusercontent.com/c602d76c1c65d2335341005c35ca3ffe68738160ecb66be42850e848e1cc4d3b/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f736173732e706e67"></a>
<a href="https://www.w3schools.com/js/DEFAULT.asp/"> <img id="lang4" class="lang" src="https://camo.githubusercontent.com/da839b79b282a7658a172f07e13496fb18bcf9fa624d061def0e80f47a68ff1d/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f6a6176617363726970742e706e67"></a>
<a href="https://https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"><img id="lang5" class="lang" src="https://camo.githubusercontent.com/c80e85f44dce04441e9e4ad21e93a1484018683d4a1d330057916f471f8b0f28/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f747970657363726970742e706e67"></a>
<a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"><img id="lang6" class="lang" src="https://camo.githubusercontent.com/0174b03bab13c90e5673eaafbaa2cc273f8f0f8e70c39e660d0db9895f41f7ae/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f626f6f7473747261702e706e67"></a>
<a href="https://devdocs.io/cpp/"><img id="lang7" class="lang" src="https://camo.githubusercontent.com/04a68d28c34b095402af3f66b15a65b9802c0d7ffdfa813635f65a9dbb18c16e/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f632d706c75732d706c75732d6c6f676f2e706e67"></a>
<a href="https://golang.org/doc/"><img id="lang8" class="lang" src="https://camo.githubusercontent.com/525688f1a883b1b13772009f360bcc50b9400237ad19eee8253637daf040733f/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f676f6c616e672e706e67"></a>
<a href="https://www.python.org/doc/"><img id="lang9" class="lang" src="https://camo.githubusercontent.com/24303cd2424a9a9c092cb6f3108ae66c45d827c3bb8cac57c93c1831c058e43f/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f707974686f6e2e706e67"></a>

<div id="lang-contain"></div>
</div>
<div id="introdiv1-coverleft">
</div>
</div>

<!--Career Paths Div-->
<div id="div2">
<h2 id="careerh2">Career Paths</h2>
<a href="https://www.w3schools.com/whatis/whatis_fullstack.asp">
<div id="career1" class="career" data-aos="fade-up">
<div id="overlay1" class="overlay">
<h2 id="career1h2" class="careerh2">FullStack</h2>
</div>
</div>
</a>

<a href="https://www.ibm.com/topics/cybersecurity">
<div id="career2" class="career" data-aos="fade-down">
<div id="overlay2" class="overlay">
<h2 id="career2h2" class="careerh2">CyberSecurity</h2>
</div>
</div>
</a>

<a href="https://www.ibm.com/cloud/learn/mobile-application-development-explained">
<div id="career3" class="career" data-aos="fade-up">
<div id="overlay3" class="overlay">
<h2 id="career3h2" class="careerh2">App Dev</h2>
</div>
</div>
</a>

<a href="https://dvnc.tech/2018/05/10/ultimate-guide-to-getting-started-in-game-development-with-100-resources/">
<div id="career4" class="career" data-aos="fade-down">
<div id="overlay4" class="overlay">
<h2 id="career4h2" class="careerh2">Game Dev</h2>
</div>
</div>
</a>
</div>

<!--Games and Entertainment Div-->
<div id="div3">
<h2 id="gamesh2">Games and Entertainment</h2>
<a href="https://www.innersloth.com/games/among-us/">
<div id="game1" class="game" data-aos="fade-up">
<div id="overlaygame1" class="overlaygame">
<h2 id="game1h2" class="gameh2">Among Us</h2>
</div>
</div>
</a>

<a href="https://www.minecraft.net/en-us">
<div id="game2" class="game" data-aos="fade-down">
<div id="overlaygame2" class="overlaygame">
<h2 id="game2h2" class="gameh2">Minecraft</h2>
</div>
</div>
</a>
<a href="https://www.roblox.com/">
<div id="game3" class="game" data-aos="fade-up">
<div id="overlaygame3" class="overlaygame">
<h2 id="game3h2" class="gameh2">Roblox</h2>
</div>
</div>
</a>
<a href="https://playvalorant.com/en-sg/">
<div id="game4" class="game" data-aos="fade-down">
<div id="overlaygame4" class="overlaygame">
<h2 id="game4h2" class="gameh2">Valorant</h2>
</div>
</div>
</a>
</div>

<!--Coding Challenges Divs-->
<div id="div4">
<h2 id="challengesh2">Code Challenge Websites</h2>
<a href="https://leetcode.com/">
<div id="challenge1" class="challenge" data-aos="fade-down">
<div id="overlaychallenge1" class="overlaychallenge">
<h2 id="challenge1h2" class="challengeh2">Leet Code</h2>
</div>
</div>
</a>
<a href="https://www.codewars.com/">
<div id="challenge2" class="challenge" data-aos="fade-up">
<div id="overlaychallenge2" class="overlaychallenge">
<h2 id="challenge2h2" class="challengeh2">Code Wars</h2>
</div>
</div>
</a>
<a href="https://www.hackerrank.com/">
<div id="challenge3" class="challenge" data-aos="fade-down">
<div id="overlaychallenge3" class="overlaychallenge">
<h2 id="challenge3h2" class="challengeh2">HackerRank</h2>
</div>
</div>
</a>
<a href="https://coderbyte.com/">
<div id="challenge4" class="challenge" data-aos="fade-up">
<div id="overlaychallenge3" class="overlaychallenge">
<h2 id="challenge3h2" class="challengeh2">CoderByte</h2>
</div>
</div>

</div>
</a>
</div>
<div id="infohome">
<div id="type">
<h2 id="s1" class="word">[</h2>
<h2 id="w1" class="word">Student</h2>
<h2 id="w2"class="word">@</h2>
<h2 id="w3"class="word">Stem-11O</h2>
<h2 id="s2" class="word">]</h2>
<h2 id="w4" class="word">~</h2>
<h2 id="w5" class="word">$</h2>
<p id="typetext"></p>
<div id="timeframe"></div>
<img id="timedetermine" src="">
</div>
<!--Footer-->
<div id="footerlabel">
<h2 id="labelh2">Stem</h2>
<h2 id="label2h2">11-O</h2>
<h2 id="label3h2">Some References:</h2>
<a id="tag1" class="tags" href="https://www.khanacademy.org/computing/computer-programming/programming/intro-to-programming/v/programming-intro">Programming</a>
<a id="tag2" class="tags" href="https://www.britannica.com/science/computer-science">Computer Science</a>
<a id="tag3" class="tags" href="https://www.infotech.com/">Information Technology</a>
<a id="tag4" class="tags" href="https://www.infosecinstitute.com/">Information Security</a>
<a id="tag5" class="tags" href="https://www.investopedia.com/terms/b/blockchain.asp">BlockChain</a>

<div id="socialicons">
<img id="icon1" class="sicon" src="https://camo.githubusercontent.com/9a80e93dca22e8bc345bef4e92799c1b6fb4481f996b1d69f3f9b0590f92c057/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f46616365626f6f6b2d2532333138373746322e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d46616365626f6f6b266c6f676f436f6c6f723d7768697465">
<img id="icon2" class="sicon" src="https://camo.githubusercontent.com/c5a53c5bc1b1ccbbb28a76e04bc6806293c90e0350bbf70b9e32df5a246a3d57/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d657373656e6765722d3030423246463f7374796c653d666f722d7468652d6261646765266c6f676f3d6d657373656e676572266c6f676f436f6c6f723d7768697465">
<img id="icon3" class="sicon" src="https://camo.githubusercontent.com/7e1a1a039c75a7c4d2a91d7f97bf0a1c2adcf7cb49b7dbbfc02963a4f9fdaca4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c696e6b6564696e2d2532333030373742352e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d7768697465">
<img id="icon4" class="sicon" src="https://camo.githubusercontent.com/cf4ed981404024c1adfc79d5575c4edf1836c4fe36b24b03383ece888cef7e29/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f54656c656772616d2d3243413545303f7374796c653d666f722d7468652d6261646765266c6f676f3d74656c656772616d266c6f676f436f6c6f723d7768697465">
<img id="stats" src="https://camo.githubusercontent.com/bba5a08a15516d82e1685d6570ec44993e178c6690b449123d4086ce1dda8932/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d5374656d2d4f2673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374267468656d653d636861727472657573652d6461726b">
</div>
<div id="copyright">
<p id="copyrightp">Copyright All Rights Reserved © 2021 Stem 11-O</p>
</div>
</div>
</div>

</div>
</div>
<script>
AOS.init();
const jsConfetti = new JSConfetti()
const confetti_interval = () =>{
	
	let random_int = Math.floor(Math.random() * 20);
	jsConfetti.addConfetti({
		emojis: ['🦄','❤️','⚡'],
		emojiSize: random_int,
		confettiNumber: 200,
		confettiRadius: 1000000
	});
}
setInterval(confetti_interval,40000);

const hamburger = document.getElementById("hamburger");
const navbar = $("#navbar");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
	hamburger.classList.toggle("active");
	navbar.slideToggle("fast","linear");
}


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
</script> 
