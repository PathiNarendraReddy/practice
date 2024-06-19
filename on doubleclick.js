<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8"/>

        <title>event example</title>
        <script src="basic.js"></script>
    </head>
    <body>
      
    <h1> dbl click event example</h1>
<p id="one">dblclick</p>
   <script>
    document.getElementById("one").addEventListener("dblclick",Narendra);
    function Narendra(){
        document.getElementById("one").innerHTML="DBMS"
    }

   </script>
    </body>
</html>
