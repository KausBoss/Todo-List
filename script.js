$('.txtb').on('keyup', function(e) {
	if (e.keyCode == 13 && $('.txtb').val() != '') {
		var task = $("<div class='task'></div>").text($('.txtb').val());

		var del = $("<i class='fas fa-trash-alt'></i>").click(function(ev) {
			var p = $(this).parent();
			p.slideUp(function() {
				p.remove();
			});
		});

		var check = $("<i class='fas fa-check'></i>").click(function() {
			var p = $(this).parent();
			p.slideUp(function() {
				$('.comp').append(p);
				p.fadeIn();
			});
		});

		var up = $(`<i class='fas fa-angle-double-up'></i>`).click(function(ev) {
			$(ev.target).parent().insertBefore($(ev.target).parent().prev());
		});

		var down = $(`<i class='fas fa-angle-double-down'></i>`).click(function(ev) {
			$(ev.target).parent().insertAfter($(ev.target).parent().next());
		});

		task.append(del, check);
		task.append(up, down);

		$('.notcomp').append(task);
		//to clear the input
		$('.txtb').val('');
	}
});
