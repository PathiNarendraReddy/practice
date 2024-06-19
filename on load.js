<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8"/>

        <title>event example</title>
        <script src="basic.js"></script>
    </head>
    <body>
      
    <h1> onload event example</h1>
    <img src="event.jpg" alt="Narendra"/>
    <p id="one"></p>
    <script>
        document.getElementById("imgid").addEventListener("onload",narendra);
        function narendra(){
            document.getElementById("one").innerHTML=Image loaded;
        }
   </script>
    </body>
</html>
