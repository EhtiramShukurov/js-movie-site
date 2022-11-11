var value = window.location.search.slice(1);
console.log(value)
let a= document.getElementById("info")
    fetch((`https://api.tvmaze.com/shows/${value}`))
    .then(response => response.json())
    .then(json =>{
        a.innerHTML += `<h2 style="color: #f6ebf4;"  class="pt-3 pb-2 border-bottom">${json.name}</h2>

        <div class="row  align-items-center g-5 py-5">
            <div class=" col-lg-5">
                <img style="border-radius: 10px; width: 300px;height:400px" src="${json.image.medium}" class="d-block img-fluid" alt="Bootstrap Themesss" width="700" height="500" loading="lazy">
                <p class=" lh-1 mb-3">Summary <p style="color: #f6ebf4!important; font-size:16px!important;">${json.summary}</p></p>
                </div>
            <div  class="col-lg-5">
                <h1 style="color: #f6ebf4; font-size:36px ;" class="display-5 fw-bold lh-1 mb-3">Show Info:</h1>
                <ul class="py-3 list-group" style="background-color: #482673!important; width: 400px;">
                    <li style="color: #f6ebf4; background-color: #482673;" class="py-3 list-group-item"><h4>Genres:</h4>${json.genres}</li>
                    <li style="color: #f6ebf4; background-color: #482673;" class="py-3 list-group-item"><h4>Runtime:</h4>${json.runtime}</li>
                    <li style="color: #f6ebf4; background-color: #482673;" class="py-3 list-group-item"><h4>Rating:</h4>${json.rating}</li>
                    <li style="color: #f6ebf4; background-color: #482673;" class="py-3 list-group-item"><h4>Premiered:</h4>${json.premiered}</li>
                    <li style="color: #f6ebf4; background-color: #482673;" class="py-3 list-group-item"><h4>Ended:</h4>${json.ended}</li>
                    <li style="color: #f6ebf4; background-color: #482673;" class="py-3 list-group-item"><h4>Language:</h4>${json.language}</li>
                    <li style="color: #f6ebf4; background-color: #482673;" class="py-3 list-group-item"><h4>Type:</h4>${json.type}</li>
                  </ul>
            </div>
        </div> `
    

    })