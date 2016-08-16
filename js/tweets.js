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

//prototype is something that is shared by all the objects created from the Tweet constructor
Tweet.prototype.company = "Twitter";

var tweet1 = new Tweet('This is the title', 'dc4life', 'this is some content', 'https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500', 1471351423825 );
var tweet2 = new Tweet('This is the title', 'dc4life', 'this is some content for my second tweeter', 'https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500', 1471235423825 );

// console.log(tweet1.getTimeSince(Date.now()));
// console.log(tweet2.getTimeSince(Date.now()));


tweets.push(tweet1);
tweets.push(tweet2);

console.log(tweets);