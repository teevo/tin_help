$(document).ready(function() {
    console.log('yo!!');
    var source = $("#handlebars-test").html();
    var template = Handlebars.compile(source);

    var data = {
        twitter: 'fasdfasdf',
        jobTitle: 'loser',
        firstName: 'bye'
    };

    console.log(data);
    $("#main").append(template(data));
});