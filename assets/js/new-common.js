var inputClear = function() {
    $('.input-clear').each(function() {
        var $clearTarget = $(this).prev('input'),
            $clearBtn = $(this);

        $clearTarget.on('keyup', function() {
            $(this).val() ? $clearBtn.addClass('vaild') : $clearBtn.removeClass('vaild');
        });
        $clearBtn.on('click', function() {
            $(this).removeClass('vaild');
            $(this).prev('input').val("").focus();
        });
    });
};

var setDatePicker = function() {
    $.datepicker.setDefaults({
        dateFormat: 'yy-mm-dd',
        dayNames: ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'],
        dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'],
        monthNames: ['1월', '2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    });
    $('.input-date').datepicker();
};

var init = function() {
    if ($('.input-clear').length) {
        inputClear();
    }
    if ($('.input-date').length) {
        setDatePicker();
    }
};

$(document).ready(init);