class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "London";
  }

  populateUI(data) {
    //de-structure vars

    //add them to inner HTML
    console.log(data.weather[0].description);
    var background=`${data.weather[0].description}.jpg`
    console.log(background);
console.log(data);


    this.uiContainer.innerHTML = `

        <div class="card mx-auto mt-5" style="width: 18rem;">
        <img style="width:80%;margin:10%;" src="${background}"></img>
            <div class="card-body justify-content-center">
                <h5 class="card-title">${data.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.main.temp_max}. Lows of ${data.main.temp_min}</h6>
                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></img>
                <p class="card-text ">current temp ${data.main.temp-273}</p>
                <div class="progress" style="margin-bottom:10px;">
                <span style="background-color:red;border-radius:50%;padding:10px;margin-bottom:10px;"></span><div class="progress-bar bg-danger" role="progressbar" style="width: ${(data.main.temp-273).toFixed(0)}%;border-radius:10%" aria-valuenow="${(data.main.temp-273).toFixed(0)}" aria-valuemin="0" aria-valuemax="100">${(data.main.temp-273).toFixed(0)} degrees C</div>
                </div>
                <p class="card-text ">Weather conditions are described as: ${data.weather[0].description}</p>
                <p class="card-text ">Pressure is ${data.main.pressure}</p>
                <p class="card-text ">Number of clouds ${data.clouds.all}</p>




            </div>
        </div>


        `;
  }

  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
  }
}
