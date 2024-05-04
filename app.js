

  let image = document.getElementById('icon');   
  let button = document.getElementById('btn')

   button.addEventListener('click', () =>{

   let cityInput = document.getElementById('detailInput').value ;


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=c66bf69dcb317c919482ad3dd72b195d&units=metric`)

    .then(response =>response.json())
    .then(data =>{
      console.log(data);
      document.getElementById('city').innerHTML = data.name;
      document.getElementById('temperature').innerHTML = Math.round(data.main.temp) + '°c';
      document.getElementById('humidity').innerHTML = Math.round(data.main.humidity) + '%';
      document.getElementById('winds').innerHTML = Math.round(data.wind.speed) + 'km/h';
      document.getElementById('pressure').innerHTML = Math.round(data.main.pressure) + ' Pa ';

      if(data.weather[0].main == 'Clouds' ){
         image.src = 'images/cloud.png'
      }
        else if(data.weather[0].main =='Mist'){

         image.src = 'images/cloud1.png'

        }


        else if(data.weather[0].main =='Clear'){

         image.src = 'images/sun.png'

        }

        else if(data.weather[0].main =='Rain'){

         image.src = 'images/cloud1.png'

        } 

        else if(data.weather[0].main =='Drizzle'){

         image.src = 'images/Slight Drizzle.png '

        }


    
      })


    })


   
    



