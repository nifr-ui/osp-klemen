angular.module('appControllers', [])
  .controller('serviceCtrl', function ($http) {
    const scope = this;

  })
  .controller('adviceCtrl', function ($http) {
    const scope = this;
    scope.displayAdvice = './views/adviceContent/expedia.html';
    scope.setAdvice = (platform) => {
      scope.displayAdvice = `./views/adviceContent/${platform}.html`;
      $('.btn-link.active').removeClass('active');
      $(`#${platform}`).addClass('active');
    }
  })
  