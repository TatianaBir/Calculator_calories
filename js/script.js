$(document).ready(function () {
    $.get( '/product-name', function (data) {
        $('#list').jqxDropDownList({ source: data, selectedIndex: 1, width: '200', height: '25'});
    });

    $('.btn-ok').click(function () {
        var name = $('#dropdownlistContentlist').text();
        $.get( '/product?name=' + name, function (data) {
            $('.product-weight').val(data.weight);
            $('.product-prot').val(data.prot);
            $('.product-fat').val(data.fat);
            $('.product-carbs').val(data.carbs);
            $('.product-calories').val(data.calories);
        });
    });
});

