<?php

if (! defined('WP_DEBUG')) {
	die( 'Direct access forbidden.' );
}
add_action( 'wp_enqueue_scripts', function () {
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'chichi-style',  get_stylesheet_uri() );
});

add_action('wp_head', function() {
	?>
	 <script type="text/javascript">window._ab_id_=158046</script>
	 <script src="https://cdn.botfaqtor.ru/one.js"></script>
	<?php
});


add_filter( 'upload_mimes', function($mimes) {
	$mimes['svg'] = 'image/svg+xml';
	$mimes['svgz'] = 'image/svg+xml';
	return $mimes;
});

