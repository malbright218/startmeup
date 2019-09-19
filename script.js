$(document).ready(function() {
    var time;
    var dt = new Date();
    console.log(dt.getHours())
    var hour = dt.getHours()
    var minute = dt.getMinutes()

    if (hour > 12) {
        var newHour = hour - 12
        var time = newHour + ":" + minute
    } else {
        var time = hour + ":" + minute
    }

    if (hour < 12) {
        $("#greeting").html("good morning, mark")
    } else if (hour < 17) {
        $("#greeting").html("good afternoon, mark")
    } else {
        $("#greeting").html("good evening, mark")
    }




    
    
    console.log(time)
  $("#row1col1").html(time)

})
