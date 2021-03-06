angular
  .module("appControllers", [])
  .controller("homeCtrl", function () {
    const scope = this;
    $(".navbar-nav > .nav-item >.nav-link.btn.btn-link").removeClass("active");
    $("#homeBtn").addClass("active");
  })
  .controller("serviceCtrl", function () {
    const scope = this;
    $(".navbar-nav > .nav-item >.nav-link.btn.btn-link").removeClass("active");
    $("#servicesBtn").addClass("active");
  })
  .controller("adviceCtrl", function () {
    const scope = this;
    scope.displayAdvice = "./views/adviceContent/expedia.html";
    scope.setAdvice = (platform) => {
      scope.displayAdvice = `./views/adviceContent/${platform}.html`;
      $(".nav-tabs > .nav-item > .btn-link.active").removeClass("active");
      $(`#${platform}`).addClass("active");
    };
    $(".navbar-nav > .nav-item >.nav-link.btn.btn-link").removeClass("active");
    $("#adviceBtn").addClass("active");
  })
  .controller("commentsCtrl", function () {
    const scope = this;
    $(".navbar-nav > .nav-item >.nav-link.btn.btn-link").removeClass("active");
    $("#commentsBtn").addClass("active");
  });
