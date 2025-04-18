<?php

/**
 * Trait for simple products.
 *
 * @link       https://icopydoc.ru
 * @since      0.1.0
 * @version    5.0.0 (25-03-2025)
 *
 * @package    Y4YM
 * @subpackage Y4YM/includes/feeds/traits/simple
 */

/**
 * The trait adds `get_condition` methods.
 * 
 * This method allows you to return the `condition` tag.
 *
 * @since      0.1.0
 * @package    Y4YM
 * @subpackage Y4YM/includes/feeds/traits/simple
 * @author     Maxim Glazunov <icopydoc@gmail.com>
 * @depends    classes:     Y4YM_Get_Paired_Tag
 *             methods:     get_product
 *                          get_feed_id
 *             functions:   common_option_get
 */
trait Y4YM_T_Simple_Get_Condition {

	/**
	 * Get `condition` tag.
	 * 
	 * @see https://yandex.ru/support/marketplace/ru/assortment/fields/index.html
	 * 
	 * @param string $tag_name
	 * @param string $result_xml
	 * 
	 * @return string Example: `<condition type="reduction">...</condition>`
	 */
	public function get_condition( $tag_name = 'condition', $result_xml = '' ) {

		$condition = $this->get_simple_product_post_meta( 'condition' );
		if ( empty( $condition ) || $condition === 'default' ) {
			$condition = common_option_get(
				'y4ym_condition',
				'disabled',
				$this->get_feed_id(),
				'y4ym'
			);
		}
		$reason = $this->get_simple_product_post_meta( 'reason' );
		if ( empty( $reason ) ) {
			$reason = common_option_get(
				'y4ym_reason',
				'disabled',
				$this->get_feed_id(),
				'y4ym'
			);
		}
		$quality = $this->get_simple_product_post_meta( 'quality' );
		if ( empty( $quality ) || $quality === 'default' ) {
			$quality = common_option_get(
				'y4ym_quality',
				false,
				$this->get_feed_id(),
				'y4ym'
			);
		}

		if ( empty( $condition ) || empty( $reason ) || $condition === 'disabled' ) {

		} else {
			$result_xml = new Y4YM_Get_Open_Tag( $tag_name, [ 'type' => $condition ] );
			$result_xml .= new Y4YM_Get_Paired_Tag( 'reason', $reason );
			$result_xml .= new Y4YM_Get_Paired_Tag( 'quality', $quality );
			$result_xml .= new Y4YM_Get_Closed_Tag( $tag_name );
		}

		$result_xml = apply_filters(
			'y4ym_f_simple_tag_condition',
			$result_xml,
			[ 
				'product' => $this->get_product()
			],
			$this->get_feed_id()
		);
		return $result_xml;

	}

}