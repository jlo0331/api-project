const sportsURL = 'https://www.thesportsdb.com/api/v1/json/1/all_sports.php';
const sportsKey = "1";
// let url="";
const body = document.querySelector('body');
let section = document.querySelector('section')
const option = document.querySelector('option')
let submitBtn = document.getElementById('submit');


let strSportsThumb = {
    Soccer : "https://www.thesportsdb.com/images/sports/soccer.jpg",
    Motorsport: "https://www.thesportsdb.com/images/sports/motorsport.jpg",
    Fighting: "https://www.thesportsdb.com/images/sports/fighting.jpg",
    Baseball: "https://www.thesportsdb.com/images/sports/baseball.jpg",
    Basketball: "https://www.thesportsdb.com/images/sports/basketball.jpg",
    AmericanFootball: "https://www.thesportsdb.com/images/sports/american_football.jpg",
    IceHockey: "https://www.thesportsdb.com/images/sports/ice_hockey.jpg",
    Golf: "https://www.thesportsdb.com/images/sports/golf.jpg",
    Rugby: "https://www.thesportsdb.com/images/sports/rugby.jpg",
    Tennis: "https://www.thesportsdb.com/images/sports/tennis.jpg",
    Cricket: "https://www.thesportsdb.com/images/sports/cricket.jpg",
    Cycling: "https://www.thesportsdb.com/images/sports/cycling.jpg",
    AustralianFootball: "https://www.thesportsdb.com/images/sports/australian_football.jpg",
    Esports: "https://www.thesportsdb.com/images/sports/esports.jpg",
    Volleyball: "https://www.thesportsdb.com/images/sports/volleyball.jpg",
    Netball: "https://www.thesportsdb.com/images/sports/netball.jpg",
    Handball: "https://www.thesportsdb.com/images/sports/handball.jpg",
    Snooker: "https://www.thesportsdb.com/images/sports/snooker.jpg",
    FieldHockey: "https://www.thesportsdb.com/images/sports/Field_Hockey.jpg",
    Darts: "https://www.thesportsdb.com/images/sports/Darts.jpg",
}

submitBtn.addEventListener('click', fetchSports)


function fetchSports(e) {
    e.preventDefault();
    fetch(sportsURL)
    .then(function(result){
        return result.json()
    })
    .then(function(sports){
        displayName(sports)
    })
    .catch(err => console.log(err));
}

function displayName(results){
    
    let team = results.sports

    for(t in team) {

    let sport = document.createElement('h2');
    let sport2 = document.createElement('img');
    let childSport = document.createElement('p');

    section.appendChild(sport);
    section.appendChild(sport2);
    section.appendChild(childSport);

    sport.textContent = team[t].strSport;
    console.log(sport);
    
    sport2.setAttribute('id','myImage');
    document.getElementById("myImage").src = team[t].strSportThumb;

    childSport.textContent = team[t].strSportDescription;
    console.log(childSport);

}

// function displayImage(picture)
    
}

