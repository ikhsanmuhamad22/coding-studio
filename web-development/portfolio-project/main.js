const toogleDetail = (e) => {
    const target = $(e.target)

    if ($(target).hasClass('active')) {
        $(target).html('More info').removeClass('active')
    } else {
        $(target).html('Less info').addClass('active')
    }

    const parent = $(target).parents('.about-item-exp');
    const items = $(parent).children('.about-item-desc')
    items.slideToggle()
}

const onFormSubmit = (e) => {
    e.preventDefault()
    const email = $('#inputEmail')
    const subject = $('#inputSubject')
    const message = $('#inputMessage')

    if (!$(email).val()) {
        alert('Email is required')
    } else if (!$(subject).val()) {
        alert('Subject is required')
    } else if (!$(message).val()) {
        alert('Message is required')
    } else {
        alert('Message was submit')
        $(email).val('')
        $(subject).val('')
        $(message).val('')
    }
}