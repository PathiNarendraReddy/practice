<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8"/>

        <title>event example</title>
        <script src="basic.js"></script>
    </head>
    <body>
      
   <h1>focus event</h1>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate atque perspiciatis eos porro suscipit quod nobis quo magnam, unde tempore!</p>
 <p>text area with field </p>
 <textarea" id="text1" onfocus="getRelatedTarget()">
</textarea>
<p>textarea with text2></p>
<textarea id="text2"></textarea>
<script>
  function getRelatedTarget(){
    document.write(this.event.getRelatedTarget);
  }
</script>
    </body>
</html>
