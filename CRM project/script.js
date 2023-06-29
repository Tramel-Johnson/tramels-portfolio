// document.querySelector('#username').innerHTML=
// `Agent: ${username}`;




// Agent Status
function agentStatus () {
    let i = document.getElementById("rdy");
    let r = document.getElementById("not-rdy");
    if( i.style.display === "none") {
        i.style.display ="block" ;
        r.style.display ="none";
    }else{
        i.style.display = "none";
        r.style.display ="block";
    }

}
// alert( "Don't forget to click the 'Not Ready' button to change to the 'Ready' status");

//TIME count 

    const TIME_IT = 0;
    let timeUPS = 0;
    let timeCount = TIME_IT;
    
    
    
    document.getElementById("base-timer").innerHTML = `
    
      <span id="base-timer">${formatTime(
        timeCount
      )}</span>
    
    `;
    
    startTimer();
    
    function startTimer() {
      timerInterval = setInterval(() => {
        timeUPS = timeUPS += 1;
        timeCount = TIME_IT + timeUPS;
        document.getElementById("base-timer").innerHTML = formatTime(
          timeCount
        );
       
    
        if (timeCount === 0) {
          onTimesUp();
        }
      }, 1000);
    }
    
    function formatTime(time) {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
    
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
    
      return `${minutes}:${seconds}`;
    }
    
  
    //  New Pages

    function newPage () {
        let i = document.getElementById("main-page");
        let a = document.getElementById("newCall-pg");

        if( i.style.display === "block"){
            a.style.display ="block" ;
            i.style.display ="none";
        }else{
            a.style.display = "none";
            i.style.display ="block";
        }
        
    }
    // cancel button
    function cancelBtn () {
        let i = document.getElementById("main-page");
        let a = document.getElementById("newCall-pg");
    
        if( i.style.display === "none") {
            i.style.display ="block" ;
            a.style.display = "none";
            
        }
    
    }



    function newPage2 () {
        let i = document.getElementById("main-page");
        let b = document.getElementById("voicemail-pg");

        if( i.style.display === "block"  ){
            b.style.display ="block" ;
            i.style.display ="none";
        }else{
            b.style.display = "none";
            i.style.display ="block";
        }
    }
     // cancel button
     function cancelBtn2 () {
        let i = document.getElementById("main-page");
        let b = document.getElementById("voicemail-pg");
    
        if( i.style.display === "none") {
            i.style.display ="block" ;
            b.style.display = "none";
            
        }
    
    }



    function newPage3 () {
        let i = document.getElementById("main-page");
        let c = document.getElementById("reminders-pg");

        if( i.style.display === "block"  ){
            c.style.display ="block" ;
            i.style.display ="none";
        }else{
            c.style.display = "none";
            i.style.display ="block";
        }
    }
    // cancel button
    function cancelBtn3 () {
        let i = document.getElementById("main-page");
        let c = document.getElementById("reminders-pg");
    
        if( i.style.display === "none") {
            i.style.display ="block" ;
            c.style.display = "none";
            
        }
    
    }




    function newPage4 () {
        let i = document.getElementById("main-page");
        let d = document.getElementById("conversations-pg");

        if( i.style.display === "block"  ){
            d.style.display ="block" ;
            i.style.display ="none";
        }else{
            d.style.display = "none";
            i.style.display ="block";
        }
    }
    // cancel button
    function cancelBtn4 () {
        let i = document.getElementById("main-page");
        let d = document.getElementById("conversations-pg");
    
        if( i.style.display === "none") {
            i.style.display ="block" ;
            d.style.display = "none";
            
        }
    
    }



    function newPage5 () {
        let i = document.getElementById("main-page");
        let e = document.getElementById("dnc-pg");

        if( i.style.display === "block"  ){
            e.style.display ="block" ;
            i.style.display ="none";
        }else{
            d.style.display = "none";
            e.style.display ="block";
        }
    }
    // cancel button
    function cancelBtn5 () {
        let i = document.getElementById("main-page");
        let e = document.getElementById("dnc-pg");
    
        if( i.style.display === "none") {
            i.style.display ="block" ;
            e.style.display = "none";
            
        }
    
    }




    
    


    // function newPage () {
    //     let i = document.getElementById("main-pg");
    //     let a = document.getElementById("newCall-pg");
    //     let b = document.getElementById("voicemail-pg");
    //     let c = document.getElementById("reminders-pg");
    //     let d = document.getElementById("conversations-pg");
    //     let e = document.getElementById("dnc-pg");

    //     if( i.style.display === "block") {
    //         a.style.display ="block" ;
    //         i.style.display ="none";
    //     }else{
    //         i.style.display = "none";
    //         r.style.display ="block";
    //     }
    // }

    // function newPage () {
    //     let i = document.getElementById("main-page");
    //     let a = document.getElementById("newCall-pg");
    //     let b = document.getElementById("voicemail-pg");
    //     let c = document.getElementById("reminders-pg");
    //     let d = document.getElementById("conversations-pg");
    //     let e = document.getElementById("dnc-pg");

    //     let aNone= a.style.display ="none" ;
    //     let bNone = b.style.display ="none" ;
    //     let cNone = c.style.display ="none" ;
    //     let dNone = d.style.display ="none" ;
    //     let eNone = e.style.display ="none" ;
    //     if( i.style.display === "block" && aNone && bNone && cNone && dNone && eNone ){
    //         a.style.display ="block" ;
    //         i.style.display ="none";
    //     }else{
    //         a.style.display = "none";
    //         i.style.display ="block";
    //     }
    // }
    