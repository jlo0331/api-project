const sportsURL = 'https://www.thesportsdb.com/api/v1/json/1/all_sports.php';
const sportsKey = "1";
let url="";
let body = document.querySelector('body');


fetch("https://www.thesportsdb.com/api/v1/json/1/all_sports.php")
    .then(function(result){
        return result.json()
    })
    .then(function(sports){
        console.log(sports);
        displayName(sports)
    })

    function displayName(sports){
        document.querySelector('select')
        for(i=0; i<sports.sports.length; i++){
            console.log(sports.sports[i].strSport);
        }
    }

    function resultFunc(e){
        e.preventDefault();
    }

    function displayImage(image){

    }


