$(document).ready(function() {
    $(".yacht-vote-up").submit(function(e) {
      e.preventDefault();
  
      var videoId = $(this).data("id");
      $.ajax({
        type: "PUT",
        url: "videos/" + videoId + "/yacht-vote-up",
        success: function(data) {
          console.log("yacht voted up!");
        },
        error: function(err) {
          console.log(err.messsage);
        }
      });
    });
  
    $(".yacht-vote-down").submit(function(e) {
      e.preventDefault();
  
      var videoId = $(this).data("id");
      $.ajax({
        type: "PUT",
        url: "videos/" + videoId + "/yacht-vote-down",
        success: function(data) {
          console.log("yacht voted down!");
        },
        error: function(err) {
          console.log(err.messsage);
        }
      });
    });

    $(".rocker-vote-up").submit(function(e) {
        e.preventDefault();
    
        var videoId = $(this).data("id");
        $.ajax({
          type: "PUT",
          url: "videos/" + videoId + "/rocker-vote-up",
          success: function(data) {
            console.log("rocker voted up!");
          },
          error: function(err) {
            console.log(err.messsage);
          }
        });
      });
    
      $(".rocker-vote-down").submit(function(e) {
        e.preventDefault();
    
        var videoId = $(this).data("id");
        $.ajax({
          type: "PUT",
          url: "videos/" + videoId + "/rocker-vote-down",
          success: function(data) {
            console.log("rocker voted down!");
          },
          error: function(err) {
            console.log(err.messsage);
          }
        });
      });

  });