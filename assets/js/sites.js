let movies = document.getElementById("movie-row")
fetch('https://api.tvmaze.com/shows')
    .then(response => response.json())
    .then(json => {for (let i = 0; i < json.length; i++) {
        movies.innerHTML += `
        <div class="col-" style="margin-bottom:30px; width: 300px;">
        <div style="background-color:transparent; class="card h-100">
            <div class="card">
    
            </div>
            <div class="card-body mt-5">
            <img src="${json[i].image.medium}" class="card-img-top" style="border-radius: 10px;width:200px;" alt="...">
              <h5 style="color:white;" class="py-3 card-title">${json[i].name}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li style="background-color:transparent; color:white; class="list-group-item">${"imdb:   " + json[i].rating.average + "/10  "}</li>
            </ul>
            <div class="card-body">
            <button style="background-color:#4cbfa6;"  type="button" class="btn btn-secondary"><a style=" color:black;" href="specific.html?${json[i].id}" class=" text-decoration-none card-link">More Info</a></button>
              
            </div>
          </div>
    </div>
        `;
    
    
    
    }


    })
    