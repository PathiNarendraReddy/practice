<!DOCTYPE html>
<html>
    <meta charset="UTF-8"/>
    <title>onblur evnts</title>
    <head>

    </head>
    <body>
        <h1>Onblur events </h1> email :
        <input type="email" id="email" >
        <script>
            document.getElementById("email").onblur= function(){
                hello();

                }
            function hello(){
                alert("PLEASE FILL");
            }
        </script>
    </body>
</html>
