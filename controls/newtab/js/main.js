function startTime() {
  
  var today=new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var day = today.getDate();
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  var monthn = month[today.getMonth()];
  
  // add a zero in front of numbers<10
  minutes=checkTime(minutes);
  document.getElementById('time').innerHTML=hours+" "+minutes;
  document.getElementById('date').innerHTML = monthn+" "+day;
  t=setTimeout('startTime()',1000);
  
}

function checkTime(i) {
  if (i < 10)
  {
    i = "0" + i;
  }
  return i;
}



$(document).ready(function() {  
  
  initializeWeather();
  
  
  
  setInterval(initializeWeather, 60000); //Update the weather every 10 minutes.
  
});


function initializeWeather() {
  
  if (localStorage.getItem("location") != "") {
    
    var userloc = localStorage.getItem("location");
    loadWeather(userloc,'');
    
  } else {
    
    
    
  }
  
}


/* Where in the world are you? */




function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';  
      
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}

