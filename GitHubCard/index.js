/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios'
axios.get('https://api.github.com/users/jessejohns-1')
  .then (data => {
    
    const myInfo = data.data;
    
  })
    /*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
const cDoc = document.querySelector('.cards');

function cardMaker(obj) {

  //creating my class elements
  const myCard = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const myName = document.createElement('h3');
  const userName = document.createElement('p');
  const myLocation = document.createElement('p');
  const myProfile = document.createElement('a');
  const myFollowers = document.createElement('p');
  const myFollowing = document.createElement('p');
  const myBio = document.createElement('p');
  
  //creating my class lists
  myCard.classList.add('card');
  cardInfo.classList.add('card-info');
  myName.classList.add('name');
  userName.classList.add('username');

//append children 
myCard.appendChild(image)
myCard.appendChild(cardInfo)
cardInfo.appendChild(myName)
cardInfo.appendChild(userName)
cardInfo.appendChild(myLocation)
cardInfo.appendChild(myProfile)
cardInfo.appendChild(myFollowers)
cardInfo.appendChild(myFollowing)
cardInfo.appendChild(myBio)


//text content

image.src = obj.avatar_url
    location.textContent = obj.location 
    myName.textContent = obj.name
    userName.textContent = obj.login 
    const o = obj.url
    profileLink.innerHTML = theProfileLink.link(obj.url)
    myFollowers.textContent = `Followers: ${obj.followers}`
    myFollowing.textContent = `Following: ${obj.following}`
    bio.textContent = obj.bio 


return myCard
}





