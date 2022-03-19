function startParentTimer() {
    parent_time = document.getElementById("parentTimer").value;
    kid_time = document.getElementByid("kidTime").value;
    // if both were set to 60s, parent_time / kid_time would be 1000 ms
    // if parent_time > kid_time, the update rate is > 1000 ms
    // if parent_time < kid_time, the update rate is < 1000 ms
    update_rate = int(int((int(parent_time) * 60) / (int(kid_time) * 60)) / 1000);
    timerInterval = setInterval(()=> {updateTimer()},update_rate);
    alert(update_rate);
    
    document.getElementById("timer").innerHTML = kid_time + ":00";
}

function resetParentTimer() {
    clearInterval(timerInterval);
    document.getElementById("timer").innerHTML = "0:00";

}

function updateTimer() {
    timerString = document.getElementById("timer").value;
    timerArr = timerString.split(":");
    minutes = int(timerArr[0]);
    seconds = int(timerArr[1]);
    
    if(seconds === 0) {
        minutes--;
        seconds=59;
    } else {
        seconds--;
    }
    
    document.getElementById("timer").innerHTML = minutes + ":" + seconds;
}