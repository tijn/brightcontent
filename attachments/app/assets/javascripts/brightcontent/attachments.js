//= require jquery-fileupload/basic

$(function () {

  var request_url = $("#attachable_url").val();

  $('#fileupload').fileupload({
    done: function (e, data) {
      $.get(request_url, function(data) {
        $('#attachments').html(data);
      });
    }
  });
});
