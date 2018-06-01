$('#load').on('click', function() {
    var content = $('#content');
    $.ajax({
        url: 'file.txt',
        cache: false,
        success: function(data) {
            content.text(data);
        },
        error: function() {
            console.log('Something went wrong');
        }
    });
});