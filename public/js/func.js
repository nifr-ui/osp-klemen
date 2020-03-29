$(document).ready(function () {

  $('#main').load('home.html');
  $('#homeBtn').parent().addClass('active');

  $('#homeBtn').click(function () {
    $('#main').load('home.html').ready(function(){
      $(window).scrollTop(0);
    })
    $('.nav-item').removeClass('active');
    $('#homeBtn').parent().addClass('active');
  });

  $('#servicesBtn').click(function () {
    $('#main').load('services.html').ready(function(){
      $(window).scrollTop(0);
    })
    $('.nav-item').removeClass('active');
    $('#servicesBtn').parent().addClass('active');
  });

  $('#advicesBtn').click(function () {
    $('#main').load('advice.html').ready(function(){
      $(window).scrollTop(0);
    })
    $('.nav-item').removeClass('active');
    $('#advicesBtn').parent().addClass('active');
  });

  $('#contactBtn').click(function () {
    $('#main').load('contact.html').ready(function(){
      $(window).scrollTop(0);
    })
    $('.nav-item').removeClass('active');
    $('#contactBtn').parent().addClass('active');
  });

  $('#aboutUsBtn').click(function () {
    $('#main').load('aboutUs.html').ready(function(){
      $(window).scrollTop(0);
    })
    $('.nav-item').removeClass('active');
    $('#aboutUsBtn').parent().addClass('active');
  });

  $('#commentsBtn').click(function () {
    $('#main').load('comments.html').ready(function(){
      $(window).scrollTop(0);
    })
    $('.nav-item').removeClass('active');
    $('#commentsBtn').parent().addClass('active');
  });

  $('.navbar-nav>li>button').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

});
