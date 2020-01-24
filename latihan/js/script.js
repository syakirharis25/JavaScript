var profile = $('.profile'),
	deskripsi = $('.deskripsi');

profile.on('mouseenter', function()) {
	deskripsi.show();
}

profile.on('mouseout', function() {
	deskripsi.hide();
});