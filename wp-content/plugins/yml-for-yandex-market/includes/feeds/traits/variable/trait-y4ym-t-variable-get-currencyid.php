<?php

/**
 * Trait for variable products.
 *
 * @link       https://icopydoc.ru
 * @since      0.1.0
 * @version    5.0.0 (25-03-2025)
 *
 * @package    Y4YM
 * @subpackage Y4YM/includes/feeds/traits/variable
 */

/**
 * The trait adds `get_currencyid` methods.
 * 
 * This method allows you to return the `currencyId` tag.
 *
 * @since      0.1.0
 * @package    Y4YM
 * @subpackage Y4YM/includes/feeds/traits/variable
 * @author     Maxim Glazunov <icopydoc@gmail.com>
 * @depends    classes:     Y4YM_Get_Paired_Tag
 *             methods:     get_product
 *                          get_offer
 *                          get_feed_id
 *             functions:   common_option_get
 */
trait Y4YM_T_Variable_Get_Currencyid {

	/**
	 * Get `currencyId` tag.
	 * 
	 * @see https://yandex.ru/support/marketplace/assortment/fields/index.html
	 * @see https://yandex.ru/support/direct/ru/feeds/requirements-yml
	 * 
	 * @param string $tag_name
	 * @param string $result_xml
	 * 
	 * @return string Example: `<currencyId>RUB</currencyId>`.
	 */
	public function get_currencyid( $tag_name = 'currencyId', $result_xml = '' ) {

		$res = get_woocommerce_currency(); // получаем валюта магазина
		switch ( $res ) { /*  RUR, BYN, EUR, USD, UAN, KZT */
			case "RUB":
				$currency_id_yml = "RUR";
				break;
			case "USD":
				$currency_id_yml = "USD";
				break;
			case "EUR":
				$currency_id_yml = "EUR";
				break;
			case "UAH":
				$currency_id_yml = "UAH";
				break;
			case "KZT":
				$currency_id_yml = "KZT";
				break;
			case "UZS":
				$currency_id_yml = "UZS";
				break;
			case "BYN":
				$currency_id_yml = "BYN";
				break;
			case "BYR":
				$currency_id_yml = "BYN";
				break;
			case "ABC":
				$currency_id_yml = "BYN";
				break;
			default:
				$currency_id_yml = "RUR";
		}
		$tag_value = apply_filters( 'y4ym_currency_id', $currency_id_yml, $this->get_feed_id() );

		$result_xml = $this->get_variable_tag( $tag_name, $tag_value );
		return $result_xml;

	}

}