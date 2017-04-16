/*
 * Taking care of the form
 */

$(function () {
    // Get the form.
  var form = $('#ajax-contact')

    // Get the messages div.
  var formMessages = $('#form-messages')

    // Set up an event listener for the contact form.
  $(form).submit(function (e) {
        // Stop the browser from submitting the form.
    e.preventDefault()

        // Serialize the form data.
    var formData = $(form).serialize()

        // Submit the form using AJAX.
    $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: formData
    })
            .done(function (response) {
                // Make sure that the formMessages div has the 'success' class.
              $(formMessages).removeClass('error')
              $(formMessages).addClass('success')

                // Set the message text.
              $(formMessages).text(response)

                // Clear the form.
              $('#name').val('')
              $('#email').val('')
              $('#message').val('')
            })
            .fail(function (data) {
                // Make sure that the formMessages div has the 'error' class.
              $(formMessages).removeClass('success')
              $(formMessages).addClass('error')

                // Set the message text.
              if (data.responseText !== '') {
                $(formMessages).text(data.responseText)
              } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.')
              }
            })
  })
})

/*
 * Projects - effect on hover
 */

$('figure').hover(function () {
  $(this).next('div').children('hr').toggleClass('violet')
})

/*
 * Close mobile nav on click
 */

$(function () {
  $('.top-nav').find('a').on('click', closeNav)
})

function closeNav () {
  jQuery('#burger').attr('checked', false)
}

/*
 * Change title when away
 */

$(function () {
  var pageTitle = $('title').text()
  $(window).blur(function () {
    $('title').text('Hey, come back! / ' + pageTitle)
  })
  $(window).focus(function () {
    $('title').text(pageTitle)
  })
})

/*
 * Accessibility - effect on focus
 */

$('.button-link').on('focus blur', toggleFocus);
function toggleFocus(e){
  if( e.type === 'focusin'){
    $(this).parent().toggleClass('focused-button')
  }
  else {
    $(this).parent().toggleClass('focused-button')
  }
}

$('figure a').on('focus blur', toggleFocusPortfolio);
function toggleFocusPortfolio(e){
  if( e.type === 'focusin'){
    $(this).parent().next('div').children('hr').toggleClass('violet');
    $(this).children('img').toggleClass('shadow');
  }
  else {
    $(this).parent().next('div').children('hr').toggleClass('violet')
    $(this).children('img').toggleClass('shadow');
  }
}