const d = new Date();

function getmedicine() {
    const d = new Date();

    var medicine;
    var desc;
    var time = d.getHours() + ":" + d.getMinutes();

    switch (d.getHours()) {
        case 6:
            medicine = " Good Morning ! ";
            break;
        case 7:
        case 8:
            medicine = "Take your medicine before breakfast";
            break;
        case 9:
            medicine = "Take your breakfast";
            break;
        case 10:

        case 11:
            medicine = "Take your medicine before lunch";
            break;
        case 12:
            medicine = "Take your lunch";
            break;
        case 13:
            medicine = "Take your medicine after lunch";
            break;
        case 14:
        case 15:
            medicine = "Take a nap";
            break;
        case 16:
            medicine = "Take your snacks or tea";
            break;
        case 17:
            medicine = "Good evening";
            break;
        case 18:
            medicine = "Go to walk";
            break;
        case 19:
            medicine = "Take your dinner";
            break;
        case 20:
            medicine = "Take your medicine after dinner";
            break;
        case 21:
            medicine = "Go to sleep";
            break;
        case 22:
        case 23:
        case 24:
        default:
            medicine = "Enjoy Your Time!!";
    }
    document.getElementById("popup-msg").innerHTML = "It's " + time + " " + medicine;
}

// Get popup element
var popup = document.getElementById("myPopup");
var tip = document.getElementById("tips");

// Get buttons
var doneBtn = document.getElementById("done-btn");
var remindBtn = document.getElementById("remind-btn");

// Show popup every 5 minutes
setInterval(function() {
  this.getmedicine();
  popup.style.display = "block";
}, 2 * 60 * 100);

// Hide popup when "Done" button is clicked
doneBtn.addEventListener("click", function() {
  popup.style.display = "none";
});

// Hide popup and show it again in 1 minutes when "Remind Me Later" button is clicked
remindBtn.addEventListener("click", function() {
  popup.style.display = "none";
  setTimeout(function() {
    popup.style.display = "block";
  }, 2 * 60 * 100);
});