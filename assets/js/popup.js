
// 1
$(function () {
  var progressTimer,
    progressbar = $("#progressbar"),
    progressLabel = $(".progress-label"),
    dialogButtons = [{
      text: "인증취소",
      click: closeDownload
    }],
    dialog = $("#dialog").dialog({
      autoOpen: false,
      closeOnEscape: false,
      resizable: false,
      buttons: dialogButtons,
      open: function () {
        progressTimer = setTimeout(progress, 1000);
      },
      beforeClose: function () {
        downloadButton.button("option", {
          disabled: true,
          label: "인증불가"
        });
        $("#state-impossible").removeClass("wait");
        $("#state-impossible").addClass("impossible");
        $("#state-impossible").text("인증불가");

        $("#btn-impossible").removeClass("request");
        $("#btn-impossible").addClass("impossible");
      }
    }),
    downloadButton = $("#btn-impossible")
      .button()
      .on("click", function () {
        $(this).button("option", {
          disabled: true,
          label: "인증진행중..."
        });
        dialog.dialog("open");
      });

  progressbar.progressbar({
    value: false,
    change: function () {
      progressLabel.text("진행률: " + progressbar.progressbar("value") + "%");
    },
    complete: function () {
      progressLabel.text("인증 대상 아님!");
      dialog.dialog("option", "buttons", [{
        text: "Close",
        click: closeDownload
      }]);
      $(".ui-dialog button").last().trigger("focus");
    }
  });

  function progress() {
    var val = progressbar.progressbar("value") || 0;

    progressbar.progressbar("value", val + Math.floor(Math.random() * 3));

    if (val <= 99) {
      progressTimer = setTimeout(progress, 50);
    }
  }

  function closeDownload() {
    clearTimeout(progressTimer);
    dialog
      .dialog("option", "buttons", dialogButtons)
      .dialog("close");
    progressbar.progressbar("value", false);
    progressLabel
      .text("인증시작...");
    downloadButton.trigger("focus");
  }
});

// 2
$(function () {
  var progressTimer,
    progressbar = $("#progressbar2"),
    progressLabel = $(".progress-label"),
    dialogButtons = [{
      text: "인증취소",
      click: closeDownload
    }],
    dialog = $("#dialog2").dialog({
      autoOpen: false,
      closeOnEscape: false,
      resizable: false,
      buttons: dialogButtons,
      open: function () {
        progressTimer = setTimeout(progress, 1000);
      },
      beforeClose: function () {
        downloadButton.button("option", {
          disabled: false,
          label: "인증요청"
        });
        $("#state-fail").removeClass("wait");
        $("#state-fail").addClass("fail");
        $("#state-fail").text("인증실패");

      }
    }),
    downloadButton = $("#btn-fail")
      .button()
      .on("click", function () {
        $(this).button("option", {
          disabled: true,
          label: "인증진행중..."
        });
        dialog.dialog("open");
      });

  progressbar.progressbar({
    value: false,
    change: function () {
      progressLabel.text("진행률: " + progressbar.progressbar("value") + "%");
    },
    complete: function () {
      progressLabel.text("인증 실패!");
      dialog.dialog("option", "buttons", [{
        text: "Close",
        click: closeDownload
      }]);
      $(".ui-dialog button").last().trigger("focus");
    }
  });

  function progress() {
    var val = progressbar.progressbar("value") || 0;

    progressbar.progressbar("value", val + Math.floor(Math.random() * 3));

    if (val <= 99) {
      progressTimer = setTimeout(progress, 50);
    }
  }

  function closeDownload() {
    clearTimeout(progressTimer);
    dialog
      .dialog("option", "buttons", dialogButtons)
      .dialog("close");
    progressbar.progressbar("value", false);
    progressLabel
      .text("인증시작...");
    downloadButton.trigger("focus");
  }
});

// 3
function bcPopup1() {
  var progressTimer,
    progressbar = $("#bc-bar1"),
    progressLabel = $(".progress-label2"),
    dialogButtons = [{
      text: "인증취소",
      click: closeDownload
    }],
    dialog = $("#bc1").dialog({
      autoOpen: false,
      closeOnEscape: false,
      resizable: false,
      buttons: dialogButtons,
      open: function () {
        progressTimer = setTimeout(progress, 1000);
      },
      beforeClose: function () {
        downloadButton.button("option", {
          disabled: false,
          label: "재인증"
        });
      }
    }),
    downloadButton = $("#btn-bc1")
      .button()
      .on("click", function () {
        $(this).button("option", {
          disabled: true,
          label: "인증진행중..."
        });
        dialog.dialog("open");
      });

  progressbar.progressbar({
    value: false,
    change: function () {
      progressLabel.text("진행률: " + progressbar.progressbar("value") + "%");
    },
    complete: function () {
      progressLabel.text("BC Storage 저장 성공");
      dialog.dialog("option", "buttons", [{
        text: "Close",
        click: closeDownload
      }]);
      $(".ui-dialog button").last().trigger("focus");
    }
  });

  function progress() {
    var val = progressbar.progressbar("value") || 0;

    progressbar.progressbar("value", val + Math.floor(Math.random() * 3));

    if (val <= 99) {
      progressTimer = setTimeout(progress, 50);
    }
  }

  function closeDownload() {
    clearTimeout(progressTimer);
    dialog
      .dialog("option", "buttons", dialogButtons)
      .dialog("close");
    progressbar.progressbar("value", false);
    progressLabel.text("BC Storage Connecting");
    downloadButton.trigger("focus");
  }
}
bcPopup1();

$(function () {
  var progressTimer,
    progressbar = $("#progressbar3"),
    progressLabel = $(".progress-label"),
    dialogButtons = [{
      text: "인증취소",
      click: closeDownload
    }],
    dialog = $("#dialog3").dialog({
      autoOpen: false,
      closeOnEscape: false,
      resizable: false,
      buttons: dialogButtons,
      open: function () {
        progressTimer = setTimeout(progress, 1000);
      },
      beforeClose: function () {
        downloadButton.button("option", {
          disabled: false,
          label: "재인증"
        });
        $("#state-success").removeClass("wait");
        $("#state-success").addClass("success");
        $("#state-success").text("인증성공");

        $("#btn-success").removeClass('request');
        $("#btn-success").addClass('retry');
        
        $('#btn-bc1').trigger('click');
        $('#bc1 .progress-label').text('sss');
      }
    }),
    downloadButton = $("#btn-success")
      .button()
      .on("click", function () {
        $(this).button("option", {
          disabled: true,
          label: "인증진행중..."
        });
        dialog.dialog("open");
      });

  progressbar.progressbar({
    value: false,
    change: function () {
      progressLabel.text("진행률: " + progressbar.progressbar("value") + "%");
    },
    complete: function () {
      progressLabel.text("인증 성공");
      dialog.dialog("option", "buttons", [{
        text: "Close",
        click: closeDownload
      }]);
      $(".ui-dialog button").last().trigger("focus");
    }
  });

  function progress() {
    var val = progressbar.progressbar("value") || 0;

    progressbar.progressbar("value", val + Math.floor(Math.random() * 3));

    if (val <= 99) {
      progressTimer = setTimeout(progress, 50);
    }
  }

  function closeDownload() {
    clearTimeout(progressTimer);
    dialog
      .dialog("option", "buttons", dialogButtons)
      .dialog("close");
    progressbar.progressbar("value", false);
    progressLabel
      .text("인증시작...");
    downloadButton.trigger("focus");
  }
});

// 4
$(function () {
  var progressTimer,
    progressbar = $("#progressbar4"),
    progressLabel = $(".progress-label"),
    dialogButtons = [{
      text: "인증취소",
      click: closeDownload
    }],
    dialog = $("#dialog4").dialog({
      autoOpen: false,
      closeOnEscape: false,
      resizable: false,
      buttons: dialogButtons,
      open: function () {
        progressTimer = setTimeout(progress, 1000);
      },
      beforeClose: function () {
        downloadButton.button("option", {
          disabled: false,
          label: "진행중"
        });
        $("#state-ing").removeClass("wait");
        $("#state-ing").addClass("ing");
        $("#state-ing").text("인증진행");

        $("#btn-ing").removeClass('request');
        $("#btn-ing").addClass('ing');
      }
    }),
    downloadButton = $("#btn-ing")
      .button()
      .on("click", function () {
        $(this).button("option", {
          disabled: true,
          label: "인증진행중..."
        });
        dialog.dialog("open");
      });

  progressbar.progressbar({
    value: false,
    change: function () {
      progressLabel.text("진행률: " + progressbar.progressbar("value") + "%");
    },
    complete: function () {
      progressLabel.text("실시간 인증 불능 항목입니다");
      dialog.dialog("option", "buttons", [{
        text: "Close",
        click: closeDownload
      }]);
      $(".ui-dialog button").last().trigger("focus");
    }
  });

  function progress() {
    var val = progressbar.progressbar("value") || 0;

    progressbar.progressbar("value", val + Math.floor(Math.random() * 3));

    if (val <= 99) {
      progressTimer = setTimeout(progress, 50);
    }
  }

  function closeDownload() {
    clearTimeout(progressTimer);
    dialog
      .dialog("option", "buttons", dialogButtons)
      .dialog("close");
    progressbar.progressbar("value", false);
    progressLabel
      .text("인증시작...");
    downloadButton.trigger("focus");
  }
});

// 5
$(function () {
  var progressTimer,
    progressbar = $("#progressbar5"),
    progressLabel = $(".progress-label"),
    dialogButtons = [{
      text: "인증취소",
      click: closeDownload
    }],
    dialog = $("#dialog5").dialog({
      autoOpen: false,
      closeOnEscape: false,
      resizable: false,
      buttons: dialogButtons,
      open: function () {
        progressTimer = setTimeout(progress, 1000);
      },
      beforeClose: function () {
        downloadButton.button("option", {
          disabled: false,
          label: "진행중"
        });
        $("#state-success2").removeClass("wait");
        $("#state-success2").addClass("ing");
        $("#state-success2").text("인증진행");

        $("#btn-success2").removeClass('request');
        $("#btn-success2").addClass('ing');
      }
    }),
    downloadButton = $("#btn-success2")
      .button()
      .on("click", function () {
        $(this).button("option", {
          disabled: true,
          label: "인증진행중..."
        });
        dialog.dialog("open");
      });

  progressbar.progressbar({
    value: false,
    change: function () {
      progressLabel.text("진행률: " + progressbar.progressbar("value") + "%");
    },
    complete: function () {
      progressLabel.text("실시간 인증 불능 항목입니다");
      dialog.dialog("option", "buttons", [{
        text: "Close",
        click: closeDownload
      }]);
      $(".ui-dialog button").last().trigger("focus");
    }
  });

  function progress() {
    var val = progressbar.progressbar("value") || 0;

    progressbar.progressbar("value", val + Math.floor(Math.random() * 3));

    if (val <= 99) {
      progressTimer = setTimeout(progress, 50);
    }
  }

  function closeDownload() {
    clearTimeout(progressTimer);
    dialog
      .dialog("option", "buttons", dialogButtons)
      .dialog("close");
    progressbar.progressbar("value", false);
    progressLabel
      .text("인증시작...");
    downloadButton.trigger("focus");
  }
});

// 6

$(document).on('click', '#btn-impossible2', popup6);

function popup6() {
  var progressTimer,
    progressbar = $("#progressbar6"),
    progressLabel = $(".progress-label"),
    dialogButtons = [{
      text: "인증취소",
      click: closeDownload
    }],
    dialog = $("#dialog6").dialog({
      autoOpen: false,
      closeOnEscape: false,
      resizable: false,
      buttons: dialogButtons,
      open: function () {
        progressTimer = setTimeout(progress, 1000);
      },
      beforeClose: function () {
        downloadButton.button("option", {
          disabled: true,
          label: "인증불가"
        });
        $("#state-impossible2").removeClass("wait");
        $("#state-impossible2").addClass("impossible");
        $("#state-impossible2").text("인증불가");

        $("#btn-impossible2").removeClass('request');
        $("#btn-impossible2").addClass('impossible');
      }
    }),
    downloadButton = $("#btn-impossible2")
      .button()
      .on("click", function () {
        $(this).button("option", {
          disabled: true,
          label: "인증진행중..."
        });
        dialog.dialog("open");
      });

  progressbar.progressbar({
    value: false,
    change: function () {
      progressLabel.text("진행률: " + progressbar.progressbar("value") + "%");
    },
    complete: function () {
      progressLabel.text("인증 성공");
      dialog.dialog("option", "buttons", [{
        text: "Close",
        click: closeDownload
      }]);
      $(".ui-dialog button").last().trigger("focus");
    }
  });

  function progress() {
    var val = progressbar.progressbar("value") || 0;

    progressbar.progressbar("value", val + Math.floor(Math.random() * 3));

    if (val <= 99) {
      progressTimer = setTimeout(progress, 50);
    }
  }

  function closeDownload() {
    clearTimeout(progressTimer);
    dialog
      .dialog("option", "buttons", dialogButtons)
      .dialog("close");
    progressbar.progressbar("value", false);
    progressLabel
      .text("인증시작...");
    downloadButton.trigger("focus");
  }
}

// 외국어/자격증 팝업 관리
// 1
function bcPopup2() {
  var progressTimer,
    progressbar = $("#bc-bar2"),
    progressLabel = $(".progress-label2"),
    dialogButtons = [{
      text: "인증취소",
      click: closeDownload
    }],
    dialog = $("#bc2").dialog({
      autoOpen: false,
      closeOnEscape: false,
      resizable: false,
      buttons: dialogButtons,
      open: function () {
        progressTimer = setTimeout(progress, 1000);
      },
      beforeClose: function () {
        downloadButton.button("option", {
          disabled: false,
          label: "재인증"
        });
      }
    }),
    downloadButton = $("#btn-bc2")
      .button()
      .on("click", function () {
        $(this).button("option", {
          disabled: true,
          label: "인증진행중..."
        });
        dialog.dialog("open");
      });

  progressbar.progressbar({
    value: false,
    change: function () {
      progressLabel.text("진행률: " + progressbar.progressbar("value") + "%");
    },
    complete: function () {
      progressLabel.text("BC Storage 저장 성공");
      dialog.dialog("option", "buttons", [{
        text: "Close",
        click: closeDownload
      }]);
      $(".ui-dialog button").last().trigger("focus");
    }
  });

  function progress() {
    var val = progressbar.progressbar("value") || 0;

    progressbar.progressbar("value", val + Math.floor(Math.random() * 3));

    if (val <= 99) {
      progressTimer = setTimeout(progress, 50);
    }
  }

  function closeDownload() {
    clearTimeout(progressTimer);
    dialog
      .dialog("option", "buttons", dialogButtons)
      .dialog("close");
    progressbar.progressbar("value", false);
    progressLabel.text("BC Storage Connecting");
    downloadButton.trigger("focus");
  }
}
bcPopup2();
$(function () {
  var progressTimer,
    progressbar = $("#license-bar1"),
    progressLabel = $(".progress-label"),
    dialogButtons = [{
      text: "인증취소",
      click: closeDownload
    }],
    dialog = $("#license1").dialog({
      autoOpen: false,
      closeOnEscape: false,
      resizable: false,
      buttons: dialogButtons,
      open: function () {
        progressTimer = setTimeout(progress, 1000);
      },
      beforeClose: function () {
        downloadButton.button("option", {
          disabled: false,
          label: "재인증"
        });
        $("#state-license1").removeClass("wait");
        $("#state-license1").addClass("success");
        $("#state-license1").text("인증성공");

        $("#btn-license1").removeClass('request');
        $("#btn-license1").addClass('retry');
        $('#btn-bc2').trigger('click');
      }
    }),
    downloadButton = $("#btn-license1")
      .button()
      .on("click", function () {
        $(this).button("option", {
          disabled: true,
          label: "인증진행중..."
        });
        dialog.dialog("open");
      });

  progressbar.progressbar({
    value: false,
    change: function () {
      progressLabel.text("진행률: " + progressbar.progressbar("value") + "%");
    },
    complete: function () {
      progressLabel.text("인증 성공");
      dialog.dialog("option", "buttons", [{
        text: "Close",
        click: closeDownload
      }]);
      $(".ui-dialog button").last().trigger("focus");
    }
  });

  function progress() {
    var val = progressbar.progressbar("value") || 0;

    progressbar.progressbar("value", val + Math.floor(Math.random() * 3));

    if (val <= 99) {
      progressTimer = setTimeout(progress, 50);
    }
  }

  function closeDownload() {
    clearTimeout(progressTimer);
    dialog
      .dialog("option", "buttons", dialogButtons)
      .dialog("close");
    progressbar.progressbar("value", false);
    progressLabel
      .text("인증시작...");
    downloadButton.trigger("focus");
  }
});

// 2
$(function () {
  var progressTimer,
    progressbar = $("#license-bar2"),
    progressLabel = $(".progress-label"),
    dialogButtons = [{
      text: "인증취소",
      click: closeDownload
    }],
    dialog = $("#license2").dialog({
      autoOpen: false,
      closeOnEscape: false,
      resizable: false,
      buttons: dialogButtons,
      open: function () {
        progressTimer = setTimeout(progress, 1000);
      },
      beforeClose: function () {
        downloadButton.button("option", {
          disabled: false,
          label: "진행중"
        });
        $("#state-license2").removeClass("wait");
        $("#state-license2").addClass("ing");
        $("#state-license2").text("인증진행");

        $("#btn-license2").removeClass('request');
        $("#btn-license2").addClass('ing');
      }
    }),
    downloadButton = $("#btn-license2")
      .button()
      .on("click", function () {
        $(this).button("option", {
          disabled: true,
          label: "인증진행중..."
        });
        dialog.dialog("open");
      });

  progressbar.progressbar({
    value: false,
    change: function () {
      progressLabel.text("진행률: " + progressbar.progressbar("value") + "%");
    },
    complete: function () {
      progressLabel.text("실시간 인증 불능 항목입니다");
      dialog.dialog("option", "buttons", [{
        text: "Close",
        click: closeDownload
      }]);
      $(".ui-dialog button").last().trigger("focus");
    }
  });

  function progress() {
    var val = progressbar.progressbar("value") || 0;

    progressbar.progressbar("value", val + Math.floor(Math.random() * 3));

    if (val <= 99) {
      progressTimer = setTimeout(progress, 50);
    }
  }

  function closeDownload() {
    clearTimeout(progressTimer);
    dialog
      .dialog("option", "buttons", dialogButtons)
      .dialog("close");
    progressbar.progressbar("value", false);
    progressLabel
      .text("인증시작...");
    downloadButton.trigger("focus");
  }
});

// 3
$(function () {
  var progressTimer,
    progressbar = $("#license-bar3"),
    progressLabel = $(".progress-label"),
    dialogButtons = [{
      text: "인증취소",
      click: closeDownload
    }],
    dialog = $("#license3").dialog({
      autoOpen: false,
      closeOnEscape: false,
      resizable: false,
      buttons: dialogButtons,
      open: function () {
        progressTimer = setTimeout(progress, 1000);
      },
      beforeClose: function () {
        downloadButton.button("option", {
          disabled: false,
          label: "인증요청"
        });
        $("#state-license3").removeClass("wait");
        $("#state-license3").addClass("fail");
        $("#state-license3").text("인증실패");
      }
    }),
    downloadButton = $("#btn-license3")
      .button()
      .on("click", function () {
        $(this).button("option", {
          disabled: true,
          label: "인증진행중..."
        });
        dialog.dialog("open");
      });

  progressbar.progressbar({
    value: false,
    change: function () {
      progressLabel.text("진행률: " + progressbar.progressbar("value") + "%");
    },
    complete: function () {
      progressLabel.text("인증 성공");
      dialog.dialog("option", "buttons", [{
        text: "Close",
        click: closeDownload
      }]);
      $(".ui-dialog button").last().trigger("focus");
    }
  });

  function progress() {
    var val = progressbar.progressbar("value") || 0;

    progressbar.progressbar("value", val + Math.floor(Math.random() * 3));

    if (val <= 99) {
      progressTimer = setTimeout(progress, 50);
    }
  }

  function closeDownload() {
    clearTimeout(progressTimer);
    dialog
      .dialog("option", "buttons", dialogButtons)
      .dialog("close");
    progressbar.progressbar("value", false);
    progressLabel
      .text("인증시작...");
    downloadButton.trigger("focus");
  }
});

// 4
$(document).on('click', '#btn-license4', license4);

function license4() {
  var progressTimer,
    progressbar = $("#license-bar4"),
    progressLabel = $(".progress-label"),
    dialogButtons = [{
      text: "인증취소",
      click: closeDownload
    }],
    dialog = $("#license4").dialog({
      autoOpen: false,
      closeOnEscape: false,
      resizable: false,
      buttons: dialogButtons,
      open: function () {
        progressTimer = setTimeout(progress, 1000);
      },
      beforeClose: function () {
        downloadButton.button("option", {
          disabled: false,
          label: "인증요청"
        });
        $("#state-license4").removeClass("wait");
        $("#state-license4").addClass("fail");
        $("#state-license4").text("인증실패");
      }
    }),
    downloadButton = $("#btn-license4")
      .button()
      .on("click", function () {
        $(this).button("option", {
          disabled: true,
          label: "인증진행중..."
        });
        dialog.dialog("open");
      });

  progressbar.progressbar({
    value: false,
    change: function () {
      progressLabel.text("진행률: " + progressbar.progressbar("value") + "%");
    },
    complete: function () {
      progressLabel.text("인증 성공");
      dialog.dialog("option", "buttons", [{
        text: "Close",
        click: closeDownload
      }]);
      $(".ui-dialog button").last().trigger("focus");
    }
  });

  function progress() {
    var val = progressbar.progressbar("value") || 0;

    progressbar.progressbar("value", val + Math.floor(Math.random() * 3));

    if (val <= 99) {
      progressTimer = setTimeout(progress, 50);
    }
  }

  function closeDownload() {
    clearTimeout(progressTimer);
    dialog
      .dialog("option", "buttons", dialogButtons)
      .dialog("close");
    progressbar.progressbar("value", false);
    progressLabel
      .text("인증시작...");
    downloadButton.trigger("focus");
  }
}

// 경력 팝업관리

// 1
function bcPopup3() {
  var progressTimer,
    progressbar = $("#bc-bar3"),
    progressLabel = $(".progress-label2"),
    dialogButtons = [{
      text: "인증취소",
      click: closeDownload
    }],
    dialog = $("#bc3").dialog({
      autoOpen: false,
      closeOnEscape: false,
      resizable: false,
      buttons: dialogButtons,
      open: function () {
        progressTimer = setTimeout(progress, 1000);
      },
      beforeClose: function () {
        downloadButton.button("option", {
          disabled: false,
          label: "재인증"
        });
      }
    }),
    downloadButton = $("#btn-bc3")
      .button()
      .on("click", function () {
        $(this).button("option", {
          disabled: true,
          label: "인증진행중..."
        });
        dialog.dialog("open");
      });

  progressbar.progressbar({
    value: false,
    change: function () {
      progressLabel.text("진행률: " + progressbar.progressbar("value") + "%");
    },
    complete: function () {
      progressLabel.text("BC Storage 저장 성공");
      dialog.dialog("option", "buttons", [{
        text: "Close",
        click: closeDownload
      }]);
      $(".ui-dialog button").last().trigger("focus");
    }
  });

  function progress() {
    var val = progressbar.progressbar("value") || 0;

    progressbar.progressbar("value", val + Math.floor(Math.random() * 3));

    if (val <= 99) {
      progressTimer = setTimeout(progress, 50);
    }
  }

  function closeDownload() {
    clearTimeout(progressTimer);
    dialog
      .dialog("option", "buttons", dialogButtons)
      .dialog("close");
    progressbar.progressbar("value", false);
    progressLabel.text("BC Storage Connecting");
    downloadButton.trigger("focus");
  }
}
bcPopup3();
$(function () {
  var progressTimer,
    progressbar = $("#career-bar1"),
    progressLabel = $(".progress-label"),
    dialogButtons = [{
      text: "인증취소",
      click: closeDownload
    }],
    dialog = $("#career1").dialog({
      autoOpen: false,
      closeOnEscape: false,
      resizable: false,
      buttons: dialogButtons,
      open: function () {
        progressTimer = setTimeout(progress, 1000);
      },
      beforeClose: function () {
        downloadButton.button("option", {
          disabled: false,
          label: "재인증"
        });
        $("#state-career1").removeClass("wait");
        $("#state-career1").addClass("success");
        $("#state-career1").text("인증성공");

        $("#btn-career1").removeClass("request");
        $("#btn-career1").addClass("retry");
        $('#btn-bc3').trigger('click');
      }
    }),
    downloadButton = $("#btn-career1")
      .button()
      .on("click", function () {
        $(this).button("option", {
          disabled: true,
          label: "인증진행중..."
        });
        dialog.dialog("open");
      });

  progressbar.progressbar({
    value: false,
    change: function () {
      progressLabel.text("진행률: " + progressbar.progressbar("value") + "%");
    },
    complete: function () {
      progressLabel.text("인증 성공");
      dialog.dialog("option", "buttons", [{
        text: "Close",
        click: closeDownload
      }]);
      $(".ui-dialog button").last().trigger("focus");
    }
  });

  function progress() {
    var val = progressbar.progressbar("value") || 0;

    progressbar.progressbar("value", val + Math.floor(Math.random() * 3));

    if (val <= 99) {
      progressTimer = setTimeout(progress, 50);
    }
  }

  function closeDownload() {
    clearTimeout(progressTimer);
    dialog
      .dialog("option", "buttons", dialogButtons)
      .dialog("close");
    progressbar.progressbar("value", false);
    progressLabel
      .text("인증시작...");
    downloadButton.trigger("focus");
  }
});

// 2
function bcPopup4() {
  var progressTimer,
    progressbar = $("#bc-bar4"),
    progressLabel = $(".progress-label2"),
    dialogButtons = [{
      text: "인증취소",
      click: closeDownload
    }],
    dialog = $("#bc4").dialog({
      autoOpen: false,
      closeOnEscape: false,
      resizable: false,
      buttons: dialogButtons,
      open: function () {
        progressTimer = setTimeout(progress, 1000);
      },
      beforeClose: function () {
        downloadButton.button("option", {
          disabled: false,
          label: "재인증"
        });
      }
    }),
    downloadButton = $("#btn-bc4")
      .button()
      .on("click", function () {
        $(this).button("option", {
          disabled: true,
          label: "인증진행중..."
        });
        dialog.dialog("open");
      });

  progressbar.progressbar({
    value: false,
    change: function () {
      progressLabel.text("진행률: " + progressbar.progressbar("value") + "%");
    },
    complete: function () {
      progressLabel.text("BC Storage 저장 성공");
      dialog.dialog("option", "buttons", [{
        text: "Close",
        click: closeDownload
      }]);
      $(".ui-dialog button").last().trigger("focus");
    }
  });

  function progress() {
    var val = progressbar.progressbar("value") || 0;

    progressbar.progressbar("value", val + Math.floor(Math.random() * 3));

    if (val <= 99) {
      progressTimer = setTimeout(progress, 50);
    }
  }

  function closeDownload() {
    clearTimeout(progressTimer);
    dialog
      .dialog("option", "buttons", dialogButtons)
      .dialog("close");
    progressbar.progressbar("value", false);
    progressLabel.text("BC Storage Connecting");
    downloadButton.trigger("focus");
  }
}
bcPopup4();
$(function () {
  var progressTimer,
    progressbar = $("#career-bar2"),
    progressLabel = $(".progress-label"),
    dialogButtons = [{
      text: "인증취소",
      click: closeDownload
    }],
    dialog = $("#career2").dialog({
      autoOpen: false,
      closeOnEscape: false,
      resizable: false,
      buttons: dialogButtons,
      open: function () {
        progressTimer = setTimeout(progress, 1000);
      },
      beforeClose: function () {
        downloadButton.button("option", {
          disabled: false,
          label: "재인증"
        });
        $("#state-career2").removeClass("wait");
        $("#state-career2").addClass("success");
        $("#state-career2").text("인증성공");

        $("#btn-career2").removeClass("request");
        $("#btn-career2").addClass("retry");
        $('#btn-bc4').trigger('click');
      }
    }),
    downloadButton = $("#btn-career2")
      .button()
      .on("click", function () {
        $(this).button("option", {
          disabled: true,
          label: "인증진행중..."
        });
        dialog.dialog("open");
      });

  progressbar.progressbar({
    value: false,
    change: function () {
      progressLabel.text("진행률: " + progressbar.progressbar("value") + "%");
    },
    complete: function () {
      progressLabel.text("인증 성공");
      dialog.dialog("option", "buttons", [{
        text: "Close",
        click: closeDownload
      }]);
      $(".ui-dialog button").last().trigger("focus");
    }
  });

  function progress() {
    var val = progressbar.progressbar("value") || 0;

    progressbar.progressbar("value", val + Math.floor(Math.random() * 3));

    if (val <= 99) {
      progressTimer = setTimeout(progress, 50);
    }
  }

  function closeDownload() {
    clearTimeout(progressTimer);
    dialog
      .dialog("option", "buttons", dialogButtons)
      .dialog("close");
    progressbar.progressbar("value", false);
    progressLabel
      .text("인증시작...");
    downloadButton.trigger("focus");
  }
});

// 3
$(function () {
  var progressTimer,
    progressbar = $("#career-bar3"),
    progressLabel = $(".progress-label"),
    dialogButtons = [{
      text: "인증취소",
      click: closeDownload
    }],
    dialog = $("#career3").dialog({
      autoOpen: false,
      closeOnEscape: false,
      resizable: false,
      buttons: dialogButtons,
      open: function () {
        progressTimer = setTimeout(progress, 1000);
      },
      beforeClose: function () {
        downloadButton.button("option", {
          disabled: false,
          label: "진행중"
        });
        $("#state-career3").removeClass("wait");
        $("#state-career3").addClass("ing");
        $("#state-career3").text("인증진행");

        $("#btn-career3").removeClass("request");
        $("#btn-career3").addClass("ing");
      }
    }),
    downloadButton = $("#btn-career3")
      .button()
      .on("click", function () {
        $(this).button("option", {
          disabled: true,
          label: "인증진행중..."
        });
        dialog.dialog("open");
      });

  progressbar.progressbar({
    value: false,
    change: function () {
      progressLabel.text("진행률: " + progressbar.progressbar("value") + "%");
    },
    complete: function () {
      progressLabel.text("실시간 인증 불능 항목입니다");
      dialog.dialog("option", "buttons", [{
        text: "Close",
        click: closeDownload
      }]);
      $(".ui-dialog button").last().trigger("focus");
    }
  });

  function progress() {
    var val = progressbar.progressbar("value") || 0;

    progressbar.progressbar("value", val + Math.floor(Math.random() * 3));

    if (val <= 99) {
      progressTimer = setTimeout(progress, 50);
    }
  }

  function closeDownload() {
    clearTimeout(progressTimer);
    dialog
      .dialog("option", "buttons", dialogButtons)
      .dialog("close");
    progressbar.progressbar("value", false);
    progressLabel
      .text("인증시작...");
    downloadButton.trigger("focus");
  }
});

// 4
$(document).on('click', '#btn-career4', career4);

function career4() {
  var progressTimer,
    progressbar = $("#career-bar4"),
    progressLabel = $(".progress-label"),
    dialogButtons = [{
      text: "인증취소",
      click: closeDownload
    }],
    dialog = $("#career4").dialog({
      autoOpen: false,
      closeOnEscape: false,
      resizable: false,
      buttons: dialogButtons,
      open: function () {
        progressTimer = setTimeout(progress, 1000);
      },
      beforeClose: function () {
        downloadButton.button("option", {
          disabled: false,
          label: "진행중"
        });
        $("#state-career4").removeClass("wait");
        $("#state-career4").addClass("ing");
        $("#state-career4").text("인증진행");

        $("#btn-career4").removeClass("request");
        $("#btn-career4").addClass("ing");
      }
    }),
    downloadButton = $("#btn-career4")
      .button()
      .on("click", function () {
        $(this).button("option", {
          disabled: true,
          label: "인증진행중..."
        });
        dialog.dialog("open");
      });

  progressbar.progressbar({
    value: false,
    change: function () {
      progressLabel.text("진행률: " + progressbar.progressbar("value") + "%");
    },
    complete: function () {
      progressLabel.text("실시간 인증 불능 항목입니다");
      dialog.dialog("option", "buttons", [{
        text: "Close",
        click: closeDownload
      }]);
      $(".ui-dialog button").last().trigger("focus");
    }
  });

  function progress() {
    var val = progressbar.progressbar("value") || 0;

    progressbar.progressbar("value", val + Math.floor(Math.random() * 3));

    if (val <= 99) {
      progressTimer = setTimeout(progress, 50);
    }
  }

  function closeDownload() {
    clearTimeout(progressTimer);
    dialog
      .dialog("option", "buttons", dialogButtons)
      .dialog("close");
    progressbar.progressbar("value", false);
    progressLabel
      .text("인증시작...");
    downloadButton.trigger("focus");
  }
}