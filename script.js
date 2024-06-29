
fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Vitebsk,by&limit=5&appid=392494210623281f643d98f26c9bb604"
)
.then(function(resp){return resp.json()})
.then(function(data){
    console.log(data);
    document.querySelector('.package-name').innerHTML = data.name;
    document.querySelector('.price').innerHTML = Math.floor(data.main.temp - 273) + '&deg;';
    document.querySelector('.disclaimer').textContent = data.weather[0].description;
    document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`
    
})
.catch(function(){
//catch any errors
});
