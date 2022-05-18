var timeleft = 10;
        var downloadTimer = setInterval(function(){
        timeleft--;
        document.getElementById("countdowntimer").textContent = timeleft;
        if(timeleft <= 0)
            clearInterval(downloadTimer);
        },1000);
        function showIt() {
            document.getElementById("div2").style.visibility = "visible";
        }
        setTimeout("showIt()", 10000); // after 10 secss
        setTimeout(() => {
        const box = document.getElementById('box');

        // 👇️ removes element from DOM
        box.style.display = 'none';

        // 👇️ hides element (still takes up space on page)
        // box.style.visibility = 'hidden';
        }, 10000); // 👈️ time in milliseconds