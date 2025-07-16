<?php

$root_dir = dirname(__DIR__);
$www_dir  = $root_dir . '/public';

$dotenv = Dotenv\Dotenv::createImmutable($root_dir);
$dotenv->load();

$dotenv->required([
    'DB_NAME',
    'DB_USER',
    'DB_PASSWORD',
    'WP_HOME'
]);

$dotenv->ifPresent([
    'DISALLOW_FILE_EDIT',
    'DISALLOW_FILE_MODS',
    'DISABLE_WP_CRON',
    'WP_DEBUG_DISPLAY',
    'WP_DEBUG_LOG',
    'SCRIPT_DEBUG',
    'WP_CACHE'
])->isBoolean();

/**
 * URLs
*/
define( 'WP_HOME',    $_ENV['WP_HOME'] );
define( 'WP_SITEURL', WP_HOME . '/wp' );

/**
 * Custom Content Directory
 */
define( 'CONTENT_DIR',    '/wp-content' );
define( 'WP_CONTENT_DIR', $www_dir . CONTENT_DIR );
define( 'WP_PLUGIN_DIR',  WP_CONTENT_DIR . '/plugins' );
define( 'WP_CONTENT_URL', WP_HOME . CONTENT_DIR );


/**
 * Cache
 */
define( 'WP_CACHE',    $_ENV['WP_CACHE'] );
define( 'WPCACHEHOME', env( 'WP_CACHE_HOME' ) ? WP_PLUGIN_DIR . env( 'WP_CACHE_HOME' ) : NULL );

/**
 * DB Settings
*/
define( 'DB_NAME',     $_ENV['DB_NAME'] );
define( 'DB_USER',     $_ENV['DB_USER'] );
define( 'DB_PASSWORD', $_ENV['DB_PASSWORD'] );
define( 'DB_HOST',     env( 'DB_HOST' ) ?: 'localhost' );
define( 'DB_CHARSET',  'utf8mb4' );
define( 'DB_COLLATE',  '' );

$table_prefix = env( 'DB_PREFIX' ) ?: 'wp_';

/**
 * Salts and Keys
 */
define( 'AUTH_KEY',          env( 'AUTH_KEY' )  );
define( 'SECURE_AUTH_KEY',   env( 'SECURE_AUTH_KEY' ) );
define( 'LOGGED_IN_KEY',     env( 'LOGGED_IN_KEY' ) );
define( 'NONCE_KEY',         env( 'NONCE_KEY' ) );
define( 'AUTH_SALT',         env( 'AUTH_SALT' ) );
define( 'SECURE_AUTH_SALT',  env( 'SECURE_AUTH_SALT' ) );
define( 'LOGGED_IN_SALT',    env( 'LOGGED_IN_SALT' ) );
define( 'NONCE_SALT',        env( 'NONCE_SALT' ) );
define( 'WP_CACHE_KEY_SALT', env( 'WP_CACHE_KEY_SALT' ) );

/**
 * Custom Settings
 */
define( 'AUTOMATIC_UPDATER_DISABLED', !env( 'AUTOMATIC_UPDATER_DISABLED' ) ?: true );
define( 'DISABLE_WP_CRON', env( 'DISABLE_WP_CRON' ) ?: false );

// Disable the plugin and theme file editor in the admin
define( 'DISALLOW_FILE_EDIT', !env( 'DISALLOW_FILE_EDIT' ) ?: true );

// Disable plugin and theme updates and installation from the admin
define( 'DISALLOW_FILE_MODS', !env( 'DISALLOW_FILE_MODS' ) ?: true );

define('FS_METHOD', !env('FS_METHOD') ?: 'direct');

/**
 * Debugging Settings
 */
define( 'WP_DEBUG_DISPLAY', env( 'WP_DEBUG_DISPLAY' ) ?:false );
define( 'WP_DEBUG_LOG',     env( 'WP_DEBUG_LOG' )     ?: false );
define( 'SCRIPT_DEBUG',     env( 'SCRIPT_DEBUG' )     ?: false );
ini_set( 'display_errors', '0' );

/**
 * Allow WordPress to detect HTTPS when used behind a reverse proxy or a load balancer
 * See https://codex.wordpress.org/Function_Reference/is_ssl#Notes
 */
if ( isset( $_SERVER['HTTP_X_FORWARDED_PROTO'] ) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https' ) {
    $_SERVER['HTTPS'] = 'on';
}
// Absolute path to the WordPress directory
if ( !defined( 'ABSPATH' ) ) {
    define( 'ABSPATH', $webroot_dir . '/wp/' );
}

function env( $name ) {
    return isset( $_ENV[$name] ) ?  $_ENV[$name] : NULL;
}
