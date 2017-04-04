<?php

$EM_CONF[$_EXTKEY] = array(
	'title' => 'AH Rapp Template',
	'description' => '',
	'category' => 'templates',
	'author' => 'Joe Schäfer',
	'author_email' => 'mail@schaefer-webentwicklung.de',
	'state' => 'alpha',
	'internal' => '',
	'uploadfolder' => '0',
	'createDirs' => '',
	'clearCacheOnLoad' => 0,
	'version' => '0.6.0',
	'constraints' => array(
		'depends' => array(
			'typo3' => '7.6.16-8.99.99',
			'gridelements' => '',
			'bootstrap_grids' => '',
			'mask' => '',
			'realurl' => '',
			'dd_googlesitemap' => '',
			't3monitoring_client' => '',
			'cs_seo' => '',
			'sourceopt' => '',
			'scriptmerger' => '',
			// Sysextensions
			'opendocs' => '',
			'recycler' => '',
			//'rte_ckeditor' => '',
		),
		'conflicts' => array(
			//'rtehtmlarea' => ''
		),
		'suggests' => array(
			'rx_unrollsavebuttons' => '',
			'go_maps_ext' => '',
			//'frontend_editing' => '',
		),
	),
);
