// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require bootstrap-sprockets
//= require_tree .

  $(function(){
    $('.search-btn').on('click', (e) => {
      e.preventDefault();
      $('.search-form').slideToggle(200);
    });

    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1000,
    });

    $(document).on('turbolinks:load', () => {
      $('#book_comment_destroy').on('ajax:success', (e) => {
        $('#book-comment-' + e.detail[0].comment.id).fadeOut();
      });
    });
  });
