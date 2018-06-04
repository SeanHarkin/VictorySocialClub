$(document).ready(() => {
  const $finlay = $('#Finlay');
  const $sean = $('#Sean');

  $finlay.hide;
  $sean.hide;

  $(".up").on( 'click', () => {
    $finlay.show();
  }
  $(".down").on( 'click', () => {
      $sean.show();
  }
  })
