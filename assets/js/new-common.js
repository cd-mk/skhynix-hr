String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character;
};

var setInputClear = function(selector) {
    $('.' + selector).each(function() {
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

var setPersonalInfoList = function() {
    $('.js-list').each(function() {
        var count = $(this).closest('.inner').find('.info-list').length;
        var $addBtn = $(this).find('.add'),
            $removeBtn = $(this).find('.remove');
            
        $addBtn.on('click', function() {
            var cloneList = $(this).closest('.inner').find('.info-list').eq(0).clone(true, false);

            count++;

            cloneList.find('li').find('input').each(function() {
                var inputId = $(this).attr('id'),
                    numberIdx = inputId.indexOf(1);

                inputId = inputId.replaceAt(numberIdx, count);

                $(this).val('');
                $(this).attr('disabled', false);
                $(this).attr('id', inputId);
                $(this).closest('li').find('label').attr('for', inputId);

                $(this).on('keyup', function() {
                    $(this).val() ? $(this).next('.input-clear').addClass('vaild') : $(this).next('.input-clear').removeClass('vaild');
                });
                $(this).next('.input-clear').on('click', function() {
                    $(this).removeClass('vaild');
                    $(this).prev('input').val("").focus();
                });
                
                if ($(this).hasClass('input-date')) {
                    $(this).removeClass('hasDatepicker').datepicker();
                }
            });
            $(this).closest('.js-list').before(cloneList);
        });

        $removeBtn.on('click', function() {
            var checkdList = [],
                removeList = [];

            $(this).closest('.inner').find('.check-box').find('input').each(function() {
                if ($(this).is(':checked')) {
                    checkdList.push($(this));
                }
            });

            for (var i = 0; i < checkdList.length; i++) {
                removeList.push(checkdList[i].closest('.info-list'));
            }
            for (var j = 0; j < removeList.length; j++) {
                removeList[j].remove();
            }
        });
    });
};

var init = function() {
    if ($('.input-clear').length) {
        setInputClear('input-clear');
    }
    if ($('.input-date').length) {
        setDatePicker();
    }
    if ($('.js-list').length) {
        setPersonalInfoList();
    }
};

$(document).ready(init);