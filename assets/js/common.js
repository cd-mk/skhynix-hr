$(function() {

  var group = $(".personal-info");

  group.each(function() {
    var _group = new GroupBox(this);
  });

  // 사용자 정의 생성자 함수 정의
  function GroupBox(groupElement) {

    var box = $(groupElement).find(".box");
    var title = $(groupElement).find(".box .title a");

    box.each(function(idx) {
      var newBox = new RootBox(this);
      if (idx > 0) {
        newBox.siblingsClose();
      }
    });
  }

  // 사용자 정의 생성자 함수 정의
  function RootBox(boxElement) {
    var _this = this;
    var boxEl = $(boxElement);
    var target = $(boxEl).find(".title a");
    var cont = $(boxEl).find(".cont");

    // _groupParent = $(boxEl).parent();

    target.on("click", anchorClickEvent);

    function anchorClickEvent() {

      if (cont.is(':hidden')) {
        _this.open();
      } else {
        _this.close();
      }
    }

    _this.siblingsClose = function() {
      cont.css('display', 'none');
    };

    _this.open = function() {
      cont.slideDown();
    };
    _this.close = function() {
      cont.slideUp();
    }
  }

  function searchClear() {
    $('.search-clear').prev().each(function() {
      $(this).keyup(function() {
        $(this).next().toggle(Boolean($(this).val()));
      });
      $(this).next().toggle(Boolean($(this).val()));
      $(this).next().click(function() {
        $(this).prev().val('').focus();
        $(this).hide();
      });
    });
  }
  searchClear();

  function listShow() {
    $('.js-change-wrap').delegate('.list-change', 'change', function() {
      var opt = $(this).val();

      $(this).find('option').eq(0).prop('selected', true);
      $(this).closest('.js-change').find('.info-list').hide();
      $(this).closest('.js-change').find('.info-list' + '.' + opt).show();

    });
  }
  listShow();

  function optionChange() {
    $('.inner').delegate('.degree select', 'change', function() {
      var opt = $(this).val();

      if (opt === '중졸' || opt === '고졸') {
        $(this).closest('.info-list').find('.department-name input').css('opacity', 0);
        $(this).closest('.info-list').find('.department-name span').css('opacity', 0);
        $(this).closest('.info-list').find('.grade input').css('opacity', 0);
        $(this).closest('.info-list').find('.grade span').css('opacity', 0);
      } else {
        $(this).closest('.info-list').find('.department-name input').css('opacity', 1);
        $(this).closest('.info-list').find('.department-name span').css('opacity', 1);
        $(this).closest('.info-list').find('.grade input').css('opacity', 1);
        $(this).closest('.info-list').find('.grade span').css('opacity', 1);
        $(this).closest('.info-list').find('input').attr('disabled', false);
      }
    });
  }
  optionChange();

  function checkButton() {
    var isFull;

    $('.inner').delegate('input', 'blur', function() {
      $(this).closest('.info-list').find('input[type=text]').each(function() {
        
        if ($(this).val() === '') {
          isFull = true;
        } else {
          isFull = false;
        }
      });
      if (!isFull) {
        $(this).closest('.info-list').find('.progress span').css('opacity', 1);
        $(this).closest('.info-list').find('.certifi a').css('opacity', 1);
      } else {
        $(this).closest('.info-list').find('.progress span').css('opacity', 0);
        $(this).closest('.info-list').find('.certifi a').css('opacity', 0);
      }

    });
  }
  checkButton();

  function setInfoList() {
    $('.btn-plus').on('click', function() {
      var addList;
      var chkWrap = $(this).closest('.inner').hasClass('js-change-wrap') ? true : false;

      if (chkWrap) {
        addList = $(this).closest('.inner').find('.js-change').eq(0).clone().addClass('cloned');

        if ($(this).closest('.inner').hasClass('info-2')) {
          addList.find('.progress span').removeAttr('class').addClass('btn wait').text('인증대기').attr('id', 'state-license4');
          addList.find('.certifi a').removeAttr('class').addClass('btn request').text('인증요청').attr('id', 'btn-license4');
        }
      } else {
        addList = $(this).closest('.inner').find('.info-list').eq(0).clone().addClass('cloned').attr('style', 'display: block');

        if ($(this).closest('.inner').hasClass('info-1')) {
          addList.find('.progress span').removeAttr('class').addClass('btn wait').text('인증대기').attr('id', 'state-impossible2');
          addList.find('.certifi a').removeAttr('class').addClass('btn request').text('인증요청').attr('id', 'btn-impossible2');
        } else if ($(this).closest('.inner').hasClass('info-3')) {
          addList.find('.progress span').removeAttr('class').addClass('btn wait').text('인증대기').attr('id', 'state-career4');
          addList.find('.certifi a').removeAttr('class').addClass('btn request').text('인증요청').attr('id', 'btn-career4');
        }
      }
      addList.find('input').val('');
      addList.find('input').attr('disabled', false);
      addList.find('.degree select').find('option').eq(2).prop('selected', true);
      addList.find('.progress span').css('opacity', 0);
      addList.find('.certifi a').css('opacity', 0);
      $(this).closest('.add-list').before(addList);

      // plus 버튼 클릭 시 popup 이벤트 트리거
      popup6();
      license4();
      career4();
    });

    $('.btn-minus').on('click', function() {
      if ($(this).closest('.inner').find('.info-list').length > 1) {
        $(this).closest('.add-list').prev('.cloned').remove();
      }
    });
  }
  setInfoList();
});