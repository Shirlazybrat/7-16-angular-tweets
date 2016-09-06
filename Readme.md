#Tweet Appliction using AngularJS

###This is an application that accesses the twitter API to display tweets in realtime that have been posted about puppies from Twitter users. The  

![Alt text](#.png "Tweet App")


Visit here: [Tweet app](http://shirletterly.com/angular-tweets/#/)

##Built with:
	- Html
	- CSS
	- SASS / Compass
	- Javascript
	- AngularJS

##Sample Code
###The following code is a constructor function that is used to generate the tweet information with a specific hashtag. The information is pulled from the Twitter API and displayed in a single-page application using AngularJS. 

```javascript
var tweets = []

function Tweet (title, userName, postContent, img, postTime){
	this.title = title;
	this.userName = userName;
	this.postContent = postContent;
	this.img = img;
	this.postTime = postTime;
	this.getTimeSince = function(theDate){
}

Tweet.prototype.getTimeSince = function(theDate){
	//console.log(theDate);
		//a bunch of logic to figure the largets denominationtof time
		// var timeSince =(theDate - this.postTime) / 1000;
		// if(timeSince > secondeInAYear){
		// 	var textPost = Math.floor(timeSince/secondeInAYear);
		// }
		return (theDate - this.postTime)/1000;	
	}
};	
```


####Early stages of the app
![Alt text](#.png "Early view of chat app")

<!-- add a video of interaction with the site -->

##Future Add-ons
- Modal that focuses on a selected tweet for an interavtive user experience.
- Added ability for people to re-tweet a selected tweet onto their own personal twitter page.


###Please visit my personal profile to see more current projects.
- [Shirlette Chambers](https://github.com/Shirlazybrat)
