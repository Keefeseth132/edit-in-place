$(document).ready(function(){
	$('.editable').on('click', function(){
		var current = $(this)
		current.hide()
		var input = $('<input class="input" type="text">')
		current.after(input)
		current.focus()
})

	$('body').on('blur', '.input', function(){
		var thisInput = $(this).val()
		$(this).prev().text(thisInput)
		$(this).prev().show()
		$(this).hide()


})





});