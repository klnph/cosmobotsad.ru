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
 * The trait adds `get_sales_notes` method.
 * 
 * This method allows you to return the `sales_notes` tag.
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
trait Y4YM_T_Simple_Get_Sales_Notes {

	/**
	 * Get `sales_notes` tag.
	 * 
	 * @see https://yandex.ru/support/merchants/ru/offers
	 * 
	 * @param string $tag_name
	 * @param string $result_xml
	 * 
	 * @return string Example: `<sales_notes>Необходима предоплата.</sales_notes>`.
	 */
	public function get_sales_notes( $tag_name = 'sales_notes', $result_xml = '' ) {

		$sales_notes_cat = common_option_get(
			'y4ym_sales_notes_cat',
			'disabled',
			$this->get_feed_id(),
			'y4ym'
		);
		if ( $sales_notes_cat === 'disabled' ) {
			return $result_xml;
		} else if ( $sales_notes_cat === 'default_value' ) {
			$tag_value = common_option_get(
				'y4ym_sales_notes',
				'',
				$this->get_feed_id(),
				'y4ym'
			);
		} else {
			$tag_value = $this->get_simple_global_attribute_value( $sales_notes_cat );
		}
		$result_xml = $this->get_simple_tag( y4ym_replace_decode( $tag_name ), $tag_value );
		return $result_xml;

	}

}