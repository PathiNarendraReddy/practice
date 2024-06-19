<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8"/>

        <title>event example</title>
        <script src="basic.js"></script>
    </head>
    <body>
      
    <h1> onchange event example</h1>
    <select id="chooseone" onchange="narendra()">
    <option value="DBMS">DBMS</option>
    <option value="JAVA">JAVA</option>
    <option value="DATA SCIENCE">DATA SCIENCE</option>
    <option value="SQL">SQL</option>
    <option value="C++">C++</option>
</select>
 <p id="one"></p>
 <script>
    function narendra(){
        varx=document.getElementById("chooseone").value;
        document.getElementById("one").innerHTML="you are selected:"+x;
    }
 </script>
 
    </body>
</html>
