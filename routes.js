
let movies = [
   {id: 101, name: "Titanic", year: 1998, rating: 8.1},
   {id: 102, name: "Jurassic Park", year: 1995, rating: 8.7},
   {id: 103, name: "Curious case of benjamin button", year: 2008, rating: 9}
];


exports.getAllHandler = function(req, res){
    res.json(movies);
}


exports.getHandler = function(req, res){
    let currMovie = movies.filter(function(movie){
        if(movie.id == req.params.id){
            return true;
        }
    });
    if(currMovie.length == 1){
        res.json(currMovie[0])
        } else {
        res.status(404);  //Set status to 404 as movie was not found
        res.json({message: "Not Found"});
        }
}


exports.postHandler = function(req, res){
    //Check if all fields are provided and are valid:
    console.log("Post Handler starts");
    console.log('name', req.body.name);
    console.log('year', req.body.year);
    console.log('rating', req.body.rating);


    if(!req.body.name ||
       !req.body.year.toString().match(/^[0-9]{4}$/g) ||
       !req.body.rating){
       res.status(400);
       res.json({message: "Bad Request"});
    } else {
       var newId = movies[movies.length-1].id+1;
       movies.push({
          id: newId,
          name: req.body.name,
          year: req.body.year,
          rating: req.body.rating
       });
       res.json({message: "New movie created.", location: "/movies/" + newId});
    }
 }//postHandler
