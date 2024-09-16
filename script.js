let movies=[
    {
        name:"Dora The lost city of Gold",
        poster:"https://www.tallengestore.com/cdn/shop/products/Dora_The_Explorer_And_The_Lost_City_Of_Gold_-_Hollywood_English_Movie_Poster_1_3fd98041-803c-4491-9d4a-a0a1d5533aae.jpg?v=1577693642",
        rating:8.3,
        
    },
    {
        name:"Avengers Infinity war",
        poster:"https://images-cdn.ubuy.co.in/63b7b107d4159432fb5ec817-avengers-infinity-war-movie-poster.jpg",
        rating:8.9,
    },
    {
        name:"Angry Bird",
        poster:"https://webneel.com/daily/sites/default/files/images/daily/01-2016/12-the-angry-birds-poster-animation-movie-list-2016.jpg",
        rating:9.7,
    },
    {
        name:"Dragon the hidden world",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSunsHml3FdkguvfjLGta9_YeY6JdbptLLn8I1kCmGYpg&s",
        rating:7.8,
    },
    {
        name:"Cars",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUkwwBr9DrCQUrpFI6DazBfLD_VUzdYl4_jx9Mkt9Hkw&s",
        rating:"7.6",
    },
    {
        name:"Kung fu panda",
        poster:"https://cdn11.bigcommerce.com/s-yzgoj/products/284030/images/3944122/MOV415111__20050.1549581506.500.659.jpg?c=2",
        rating:9.5,
    },
    {
        name:"Baby Boss",
        poster:"https://www.moviepostersetc.com/_staticProxy/content/ff808081163c05b001169d6655243ae9/Boss_Baby_movie_poster.jpg",
        rating:7.7,
    },
    {
        name:"Leo",
        poster:"https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2023-09/f6d_fktb0aacqri.jpg?VersionId=ddP.b.9.grZ3q1gAE_2MJuMmcYchS8Ei&size=750:*",
        rating:8.5,
    },
    {
        name:"ANT MAN",
        poster:"https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/ant_man_ver5.jpg",
        rating:9,
    },
    {
        name:"Bhoot Police",
        poster:"https://e1.pxfuel.com/desktop-wallpaper/322/698/desktop-wallpaper-upcoming-hindi-film-movie-posters-bollywood-2022-movie.jpg",
        rating:7.9,
    },
    {
        name:"Pushpa",
        poster:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00356724-mvbsvbzlyj-portrait.jpg",
        rating:8.1,
    },
    {
        name:"Avtar",
        poster:"https://m.media-amazon.com/images/I/31uCUjopLVL._AC_UF894,1000_QL80_.jpg",
        rating:7.2,
    },
];

//-------------------- for search Input ---------------
function searchMovie(){
    let movieName=document.getElementById("searchInput").value;
    if(movieName!==" "){
        let result=movies.filter(function(movie){
return movie.name.toUpperCase().includes(movieName.toUpperCase());
        })
        displayMovie(result);
    }
    else{
        displayMovie(movies);
    }

}


//------------------- movies generate ------------------



function displayMovie(data){
    document.getElementById("movies-section").innerHTML=" ";
    let htmlString=`  `;

for(let i=0;i<data.length;i++)
    {
    htmlString=htmlString+`
    <div class="movie">
    <div class="overlay">
        <div class="video">
   
        </div>
        <div class="details">
          <h2>${data[i].name}</h2>
          <h4>${data[i].rating}</h4>
          <p>Thor . Emma Stone . Elisa</p>
        </div>
   </div>
    <img src="${data[i].poster}" alt="poster">
</div>
     ` ;
     document.getElementById("movies-section").innerHTML=htmlString;

}

}

displayMovie(movies);