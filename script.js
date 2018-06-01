var content = $('#content');

setInterval(function(){
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
}, 1000);