function toggleDisplay() {
    var t1 = document.getElementById("title1");
    var t2 = document.getElementById("title2");
    var btn1 = document.getElementById("quizBtn1");
    var btn2 = document.getElementById("quizBtn2");
    var terms = document.getElementById("terms");
    if (t1.style.display === "none") {
        t1.style.display = "block";
        t2.style.display = "none";

        btn1.style.display = "block";
        btn2.style.display = "none";


    } else {
        t1.style.display = "none";
        t2.style.display = "block";
        
        btn2.style.display = "block";
        btn1.style.display = "none";

        terms.style.display = "none";

    }
    startTimer(60);
}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
            document.getElementById("timer").textContent = time;
        time--;
        timeValue = time;
        if (time <= 0) {
            timeTaken = 60 - timeValue;
        
            clearInterval(counter);
            //stopTimer(counter);
            
        }
    }
}

function getRadioValue(radioArray,tot) {
    let c = 0;
    for (let i = 0; i < radioArray.length; i++) {
        if (radioArray[i].checked) {
            tot += Number(radioArray[i].value)
        } else {
            c += 1;
        }
        
    }
    if (c === 4) {
        tot -= 1;
    }
    return(tot)
}

function funcQuizResult() {
    let tot = 0;
    for (let i = 1; i <= 10; i++) {
        let q = "q" + i;
        let radioArray = document.form[q];
        tot = getRadioValue(radioArray, tot)
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    pop(tot,false);

    clearInterval(counter);
    time = document.getElementById("timer").textContent;
    document.getElementById("timer").textContent = time;
    
}

function pop(tot,popup) {
    if(popup === false) {
        document.getElementById("box").style.display = "block";
        if (tot > 5) {
            document.getElementById("box").style.backgroundColor = "#cdebd7"
            document.getElementById("marks").innerHTML = "<h2>Congratulations!</h2><p>You have received " + tot + " marks for the quiz.";
        } else {
            document.getElementById("marks").innerHTML = "<h2>Oh No!</h2><p>You have received only " + tot + " marks for the quiz.";
        }
        popup = true

    } else {
        location.replace("../views/Quiz.html")
        popup = false
    }
}