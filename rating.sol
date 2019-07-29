pragma solidity ^0.5.2;
//specify what version of complier to use 
contract Rating 
// mapping field below is to associate an array or hash
mapping (bytes32 => uin8 ) public ratingsReceived;
//here an array of bytes32 will store the list of movies 
bytes [] public movieList;

//this is the constructor which will be called once when the contract is deployed onto the blockchain. Cool! After, after the contract is deployed I will pass an array of movies for users to give ratings to the selected movies. 

function Rating(bytes32 [] moviesName) public {
  movieList = moviesNames;
}

function totalVotesFor (bytes32 movies) view public retursn (uint8) return ratingsReceived[movie];
}
// this function retursn the ratings of the a movie received so far 

function voteForMovie(bytes32 movie) public {
  ratingsReceived[movie] += 1;
}
}

//this function increments the vote count fo the specifid movie. equivalent to upvoting 