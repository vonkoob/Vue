$(document).ready(function() {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

})

var vm = new Vue({
    el: '#cardlist',
    data: {
        object: {
            Name: 'Mausoleum',
            Monster: 'Giant Zombie',
            Rating: 3
        }
    }
})