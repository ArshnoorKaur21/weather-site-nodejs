const submitbtn = document.getElementById("submitbtn");
const cityname = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_real_val = document.getElementById("temp_real_val");
const datahide=document.querySelector('.middle_layer')

const getinfo = async (event) => {
  event.preventDefault();
  // page ko refresh hone se prevent krta
  let cityval = cityname.value;
  if (cityval == "") {
    city_name.innerText = "Plz write the name before search";
    datahide.classList.add('data_hide')
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=275d1d310ba0c00ae7ff7c853a2d556b`;
      const response = await fetch(url);
      const data = await response.json();
      // console.log(objdata)
      const arrdata = [data];
      console.log(arrdata);
      city_name.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`;
      temp_real_val.innerText = arrdata[0].main.temp;
      temp_status.innerText = arrdata[0].weather[0].main;

      
      let tempmood= arrdata[0].weather[0].main;
      if (tempmood == "Clear") {
        temp_status.innerHTML =
          '<i class="fa-solid fa-sun" style="color: rgb(240, 188, 46)"></i>';
      } else if (tempmood == "Clouds") {
        temp_status.innerHTML =
          '<i class="fa-solid fa-cloud" style="color: white"></i>';
      } else if (tempmood == "Thunderstorm" || tempmood=='Rain') {
        temp_status.innerHTML =
        '<i class="fa-sharp fa-solid fa-cloud-rain style="color:yellow">';
      } else {
        temp_status.innerHTML =
          '<i class="fa-solid fa-humid" style="color: white"></i>';
      }
      datahide.classList.remove('data_hide')
    } catch {
      city_name.innerText = "Plz enter the city name properly";
      datahide.classList.add('data_hide')
    }
  }
};

submitbtn.addEventListener("click", getinfo);
