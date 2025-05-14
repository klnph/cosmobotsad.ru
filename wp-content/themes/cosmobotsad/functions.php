<?php

add_action( 'wp_enqueue_scripts', function() {
	wp_enqueue_style( 'chichi-style',  get_stylesheet_uri() );
} );

add_action('wp_head', function() {
	?>
	 <script type="text/javascript">window._ab_id_=158046</script>
	 <script src="https://cdn.botfaqtor.ru/one.js"></script>
	<?php
});