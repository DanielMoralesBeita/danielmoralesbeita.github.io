$(function() {

  $.ajax({
     
        url: 'https://raw.githubusercontent.com/DanielMoralesBeita/Medallas-de-CodeShoold-Jquey-Ajax/master/assets/1789994.json',
    dataType: 'jsonp',
    success: function(data) {
      populateWithCourses(data.courses.completed)
    }});

  function populateWithCourses(courses) {

    var $badges = $('#badges');

    courses.forEach(function(course) {

      $div = $('<div />', {
        'class': 'course'
      }).appendTo($badges);

      $('<h3 />', {
        text: course.title
      }).appendTo($div);

      $('<img />', {
        src: course.badge
      }).appendTo($div);

      $('<a />', {
        'class': 'btn btn-primary',
        target: '_blank',
        href: course.url,
        text: 'See Course'
      }).appendTo($div);

    });

  }

});
