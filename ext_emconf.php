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
			't3monitoring_client' => '',
			'cs_seo' => '',
			'sourceopt' => '',
			'scriptmerger' => '',
			// Sysextensions
			'opendocs' => '',
			'recycler' => '',
            'go_maps_ext' => '',
            'cookieconsent2' => '',
		),
		'conflicts' => array(
			//'rtehtmlarea' => ''
		),
		'suggests' => array(
			'dd_googlesitemap' => '',
			'rx_unrollsavebuttons' => '',
			'go_maps_ext' => '',
            'fluid_styled_content' => '',
            'fsc_layout_wrap' => '',
            'lib_js_lazysizes' => '', // https://github.com/joekolade/lib_js_lazysizes
            'fluid_styled_responsive_images' => ''
			//'frontend_editing' => '',
		),
	),
);
