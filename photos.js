var photos= ["https://earthfirstnews.files.wordpress.com/2012/03/jlm-wolf05-1024x768.jpg"]
	<img src=" https://earthfirstnews.files.wordpress.com/2012/03/jlm-wolf05-1024x768.jpg"
<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <style>
    img {
      width: 50%;
    }
    </style>
  </head>

  <body>
    <h1>Click on the photo to see a random image</h1>
    <img src="http://barbara-5.info/wp-content/uploads/2016-04-23_10-45-21-300x200.jpg" alt='image' id="changeablePic" onClick="change();">

    <script type="text/javascript">
      var catPic = "http://www.totallyduh.com/files/2011/12/funny-melon-head-cat-300x200.jpg";
      var eaglePic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6NNGeZvcu-LqAr8oEim8Hr_m3UnF-mlrUcRUJa1wqTKE9Nhi";
      var llamaPic = "https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/2680689/300/200/m1/fpnw/wm0/northernwhimsy-llamacorns-pillow-mockup-for-cm-(2)-.jpg?1494645611&s=14b3cc68350e39a6e5faa3a6be076fa8";
      var foxPic = "https://d1yn1kh78jj1rr.cloudfront.net/image/thumbnail/HTj88dJU-j5dutf3f/11153508_detail_high_thumb.jpg";
      var pigPic = "https://images-na.ssl-images-amazon.com/images/I/412H4BkYWiL._SX300_QL70_.jpg";
      var lionPic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0udLOOpmIShXIem74HK3sGAvMa_uq07g9kX4p6BXIZ8kZMBav";
      var snakePic = "https://imgc.allpostersimages.com/img/posters/joel-sartore-a-conant-s-milk-snake-lampropeltis-triangulum-conanti-at-pet-paradise_u-L-Q1360CP0.jpg?src=gp&w=300&h=375";
      var cheetahPic = "https://kids.kiddle.co/images/thumb/4/42/Acinonyx_jubatus_walking_edit.jpg/300px-Acinonyx_jubatus_walking_edit.jpg";
      var pandaPic = "https://gradschoolpanda.files.wordpress.com/2017/03/hi-panda.jpg?w=300&h=200";
      var dogPic = "http://aspengrovevet.com/wp-content/uploads/2018/04/spring-dog-dangers-300x200.jpeg";
      var animalPics = [catPic, eaglePic, llamaPic, foxPic, pigPic, lionPic, snakePic, cheetahPic, pandaPic, dogPic ];

      function change() {
        var image = document.getElementById('changeablePic');
        var animalPic = getRandomInt(0, 10)
        image.src = animalPics[animalPic]
      }

      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
        //The maximum is exclusive and the minimum is inclusive
      }
    </script>
  </body>
</html>
