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

var init = function() {
    if ($('.input-clear').length) {
        inputClear();
    }
};

$(document).ready(init);