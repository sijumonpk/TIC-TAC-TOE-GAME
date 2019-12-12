$(document).ready(function () {

    //setting count =1 to determine which charecter shoud be print on the cell
    //play =true is a boolean expression to initialize function
    var count = 1;
    var play = true;
    
    $("#main_div").slideDown(1500);

    //Function to find Winner
    function champion() {
        //getting all values from cell
        var cell1 = $("#cell1").text();
        var cell2 = $("#cell2").text();
        var cell3 = $("#cell3").text();
        var cell4 = $("#cell4").text();
        var cell5 = $("#cell5").text();
        var cell6 = $("#cell6").text();
        var cell7 = $("#cell7").text();
        var cell8 = $("#cell8").text();
        var cell9 = $("#cell9").text();

        //applying condition for win the game
        if (cell1 != "" && cell1 == cell2 && cell1 == cell3) {
            
            $(".cell").slideUp(1500);
            $(".status").slideUp(1500);
            $(".headding h2").css("color", "green");
            if(count%2==0 && count<=9)
            {
            $(".headding h2").html("PLAYER 1 WON");
            }
            else{
                $(".headding h2").html("PLAYER 2 WON");
 
            }   

           //setting--what shoud print when player won and what should be print on head when the player won
            
            $("#head").css({
                "color": 'red',
                "background-color": "green",
                "text-size": "30px"
            });

            $("#cell1").css({
                "color": "yellow",
                "background-color": "green"
            });
            $("#cell2").css({
                "color": "yellow",
                "background-color": "green"
            });
            $("#cell3").css({
                "color": "yellow",
                "background-color": "green"
            });
            

           //function to prevent additional click on the field
            $(".cell").click(function () {
                $(".cell").slideUp(2000);

            })

        }

      //setting--what shoud print when player won and what should be print on head when the player won
        if (cell4 != "" && cell4 == cell5 && cell4 == cell6) {

            $(".cell").slideUp(1500);
            $(".status").slideUp(1500);
            $(".headding h2").css("color", "green");
            if(count%2==0 && count<=9)
            {
            $(".headding h2").html("PLAYER 1 WON");
            }
            else{
                $(".headding h2").html("PLAYER 2 WON");
 
            }  

            $("#head").css({
                "color": 'red',
                "background-color": "green",
                "text-size": "30px"
            });

            $("#cell4").css({
                "color": "yellow",
                "background-color": "green"
            });
            $("#cell5").css({
                "color": "yellow",
                "background-color": "green"
            });
            $("#cell6").css({
                "color": "yellow",
                "background-color": "green"
            });


          //function to prevent additional click on the field
            $(".cell").click(function () {
                $(".cell").slideUp(2000);
            })

        }

         //setting--what shoud print when player won and what should be print on head when the player won
        if (cell7 != "" && cell7 == cell8 && cell7 == cell9) {

            $(".cell").slideUp(1500);
            $(".status").slideUp(1500);
            $(".headding h2").css("color", "green");
            if(count%2==0 && count<=9)
            {
            $(".headding h2").html("PLAYER 1 WON");
            }
            else{
                $(".headding h2").html("PLAYER 2 WON");
 
            }  

            $("#head").css({
                "color": 'red',
                "background-color": "green",
                "text-size": "30px"
            });

            $("#cell7").css({
                "color": "yellow",
                "background-color": "green"
            });
            $("#cell8").css({
                "color": "yellow",
                "background-color": "green"
            });
            $("#cell9").css({
                "color": "yellow",
                "background-color": "green"
            });

             //function to prevent additional click on the field
            $(".cell").click(function () {
                $(".cell").slideUp(2000);
            })

        }
        //setting--what shoud print when player won and what should be print on head when the player won
        if (cell1 != "" && cell1 == cell4 && cell1 == cell7) {

            $(".cell").slideUp(1500);
            $(".status").slideUp(1500);
            $(".headding h2").css("color", "green");
            if(count%2==0 && count<=9)
            {
            $(".headding h2").html("PLAYER 1 WON");
            }
            else{
                $(".headding h2").html("PLAYER 2 WON");
 
            }  

            $("#head").css({
                "color": 'red',
                "background-color": "green",
                "text-size": "30px"
            });

            $("#cell1").css({
                "color": "yellow",
                "background-color": "green"
            });
            $("#cell4").css({
                "color": "yellow",
                "background-color": "green"
            });
            $("#cell7").css({
                "color": "yellow",
                "background-color": "green"
            });

            //function to prevent additional click on the field
            $(".cell").click(function () {
                $(".cell").slideUp(2000);
            })

        }
        //setting--what shoud print when player won and what should be print on head when the player won
        if (cell2 != "" && cell2 == cell5 && cell2 == cell8) {

            $(".cell").slideUp(1500);
            $(".status").slideUp(1500);
            $(".headding h2").css("color", "green");
            if(count%2==0 && count<=9)
            {
            $(".headding h2").html("PLAYER 1 WON");
            }
            else{
                $(".headding h2").html("PLAYER 2 WON");
 
            }  
            $("#head").css({
                "color": 'red',
                "background-color": "green",
                "text-size": "30px"
            });

            $("#cell2").css({
                "color": "yellow",
                "background-color": "green"
            });
            $("#cell5").css({
                "color": "yellow",
                "background-color": "green"
            });
            $("#cell8").css({
                "color": "yellow",
                "background-color": "green"
            });

            //function to prevent additional click on the field
            $(".cell").click(function () {
                $(".cell").slideUp(2000);
            })

        }
         //setting--what shoud print when player won and what should be print on head when the player won
        if (cell3 != "" && cell3 == cell6 && cell3 == cell9) {

            $(".cell").slideUp(1500);
            $(".status").slideUp(1500);
            $(".headding h2").css("color", "green");
            if(count%2==0 && count<=9)
            {
            $(".headding h2").html("PLAYER 1 WON");
            }
            else{
                $(".headding h2").html("PLAYER 2 WON");
 
            }  
            $("#head").css({
                "color": 'red',
                "background-color": "green",
                "text-size": "30px"
            });

            $("#cell3").css({
                "color": "yellow",
                "background-color": "green"
            });
            $("#cell6").css({
                "color": "yellow",
                "background-color": "green"
            });
            $("#cell9").css({
                "color": "yellow",
                "background-color": "green"
            });

            //function to prevent additional click on the field
            $(".cell").click(function () {
                $(".cell").slideUp(2000);
            })

        }
         //setting--what shoud print when player won and what should be print on head when the player won
        if (cell1 != "" && cell1 == cell5 && cell1 == cell9) {
            $(".cell").slideUp(1500);
            $(".status").slideUp(1500);
            $(".headding h2").css("color", "green");
            if(count%2==0 && count<=9)
            {
            $(".headding h2").html("PLAYER 1 WON");
            }
            else{
                $(".headding h2").html("PLAYER 2 WON");
 
            }  
            $("#head").css({
                "color": 'red',
                "background-color": "green",
                "text-size": "30px"
            });

            $("#cell1").css({
                "color": "yellow",
                "background-color": "green"
            });
            $("#cell5").css({
                "color": "yellow",
                "background-color": "green"
            });
            $("#cell9").css({
                "color": "yellow",
                "background-color": "green"
            });

            //function to prevent additional click on the field
            $(".cell").click(function () {
                $(".cell").slideUp(2000);
            });


        }
         //setting--what shoud print when player won and what should be print on head when the player won
        if (cell3 != "" && cell3 == cell5 && cell3 == cell7) {

            $(".cell").slideUp(1500);
            $(".status").slideUp(1500);
            $(".headding h2").css("color", "green");
            if(count%2==0 && count<=9)
            {
            $(".headding h2").html("PLAYER 1 WON");
            }
            else{
                $(".headding h2").html("PLAYER 2 WON");
 
            }  

            $("#head").css({
                "color": 'red',
                "background-color": "green",
                "text-size": "30px"
            });

            $("#cell3").css({
                "color": "yellow",
                "background-color": "green"
            });
            $("#cell5").css({
                "color": "yellow",
                "background-color": "green"
            });
            $("#cell7").css({
                "color": "yellow",
                "background-color": "green"
            });

            //function to prevent additional click on the field
            $(".cell").click(function () {
                $(".cell").slideUp(1500);
               $(".turn").html("AWSOME");

            });

        }
    }



    //Event start here
    $(".cell").click(function () {
        
        
        //check whether the count is even or not to print X or O
        if ($(this).text() == "" && play) {
            

            if (count % 2 == 1) {

                 if(play){
                $(".status").text("Player 2 Turn");
                $(this).append("PLAYER 1");
                $(this).css("background-color","blue");}

                count++;
            } else {
                if(play){
                $("#status").text("Player 1 Turn");


                $(this).append("PLAYER 2");
                $(this).css("background-color", "yellow");}
                count++;
            }
        }

        //condition for game over
        if (count > 9) {
            $(".headding h2").html("GAME OVER");
            $(".headding h2").css({
                "color": 'white',
                "background-color": "red",
                "text-size": "30px"
            });
        }
        // calling the main function to find the winner
        champion();

    });

});