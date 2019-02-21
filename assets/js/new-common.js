String.prototype.replaceAt = function(index, character) {
  return this.substr(0, index) + character;
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

var inputClear = {
  wrapClass : '.input-box',
  clearBtnClass : '.input-clear',
  validateClass : 'vaild',
  setKeyUp : function() {
    var wrapper = $(this.wrapClass).parent();
    var setTarget = this.setTarget(),
      targetInputs = setTarget[0];

    for (var i = 0; i < targetInputs.length; i++) {
      $(wrapper).delegate(targetInputs[i], 'keyup', this.showHideClearBtn(targetInputs[i]));
    }
  },
  showHideClearBtn : function() {
    var clearBtnClass = this.clearBtnClass,
      valiClass = this.validateClass;
    
    return function(input) {
      var $targetInput = $(input.target);
      var inputValue = $targetInput.val(),
        $clearBtn = $targetInput.next(clearBtnClass);
      
      inputValue ? $clearBtn.addClass(valiClass) : $clearBtn.removeClass(valiClass);
    };
  },
  setTarget : function() {
    var targetInputs = [],
      targetButtons = [];
    var clearBtn = this.clearBtnClass;

    $(clearBtn).each(function() {
      targetButtons.push($(this));
      targetInputs.push($(this).prev('input'));
    });

    return [targetInputs, targetButtons];
  },
  setClearBtn : function() {
    var wrapper = $(this.wrapClass).parent();
    var setTarget = this.setTarget(),
      targetButtons = setTarget[1];

    for (var i = 0; i < targetButtons.length; i++) {
      $(wrapper).delegate(targetButtons[i], 'click', this.clickClearBtn(targetButtons[i]));
    }
  },
  clickClearBtn : function() {
    var valiClass = this.validateClass;

    return function(button) {
      $(button.target).prev('input').val('').focus();
      $(button.target).removeClass(valiClass);
    };
  },
  init : function() {
    this.setKeyUp();
    this.setClearBtn();
  }
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

$(document).ready(function() {
  if ($('.input-date').length) {
    setDatePicker();
  }
  if ($('.input-clear').length) {
    inputClear.init();
  }
  if ($('.js-list').length) {
    setPersonalInfoList();
  }
});
