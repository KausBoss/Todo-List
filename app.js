$(() => {
	$(document.body)
		.append($('<input>').attr('id', 'inp'))
		.append(
			$('<button>').text('ADD').click(() => {
				console.log('Clicked');
				$('#tasklist').append(
					$('<li>')
						.text($('#inp').val())
						.append(
							$('<button>').text('X').click((ev) => {
								$(ev.target).parent().remove();
							})
						)
						.append(
							$('<button>').text('^').attr('class', 'btnup').click((ev) => {
								$(ev.target).parent().insertBefore($(ev.target).parent().prev());
							})
						)
						.append(
							$('<button>').text('V').attr('class', 'btndwn').click((ev) => {
								$(ev.target).parent().insertAfter($(ev.target).parent().next());
							})
						)
				);
				$('#inp').val('');
			})
		)
		.append($('<ul>').attr('id', 'tasklist'));
});
