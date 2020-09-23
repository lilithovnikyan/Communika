let els = document.getElementsByClassName('step');
let steps = [];
Array.prototype.forEach.call(els, (e) => {
    steps.push(e);
    e.addEventListener('click', (x) => {
        progress(x.target.id);
    });
});

function progress(stepNum) {
    let p = stepNum * 30;
    document.getElementsByClassName('percent')[0].style.width = `${p}%`;
    steps.forEach((e) => {
        if (e.id === stepNum) {
            e.classList.add('selected');
            e.classList.remove('completed');
        }
        if (e.id < stepNum) {
            e.classList.add('completed');
        }
        if (e.id > stepNum) {
            e.classList.remove('selected', 'completed');
        }
    });
}

// STEPS

$(".steps .step").click(function() {
    $(this).parent().find('.selected').removeClass('selected');
    $(this).parent().find('.completed').removeClass('completed');
    $(this).addClass('selected');
    var thisId = $(this).attr('id');
    var contentId = "Step" + thisId;
    $('.contentSteps').css('display', 'none');
    $('.changeable-content').find('#' + contentId ).css('display', 'block');
});
$(".changeable-content .btn-next-step").click(function() {
    var nextId = $(this).parent().parent().parent().parent().parent().attr('id');
    var lastSymbol = parseInt(nextId.slice(nextId.length - 1)) + 1;
    $('.steps').find('.completed').removeClass('completed');
    $('.steps').find('.selected').removeClass('selected');
    $('.steps').find('#' + lastSymbol).addClass('selected');
    nextId = nextId.slice(0,-1);
    console.log(nextId);
    $('.contentSteps').css('display', 'none');
    $('.changeable-content').find('#' + nextId + lastSymbol ).css('display', 'block');
});
$(".changeable-content .btn-prev").click(function() {
    var nextId = $(this).parent().parent().parent().parent().parent().attr('id');
    var lastSymbol = parseInt(nextId.slice(nextId.length - 1)) - 1;
    $('.steps').find('.completed').removeClass('completed');
    $('.steps').find('.selected').removeClass('selected');
    $('.steps').find('#' + lastSymbol).addClass('selected');
    nextId = nextId.slice(0,-1);
    $('.contentSteps').css('display', 'none');
    $('.changeable-content').find('#' + nextId + lastSymbol ).css('display', 'block');
});