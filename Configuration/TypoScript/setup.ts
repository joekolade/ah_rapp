page {
    includeCSS {
        ah_rapp_custom = EXT:ah_rapp/Resources/Public/Css/ahrapp_custom.css
    }
}

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:ah_rapp/Configuration/TypoScript/bricks/contact_form_setup.ts">


// responsive images
//

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:ah_rapp/Configuration/TypoScript/bricks/resp_images.ts">


// EXT
//

// news
plugin.tx_news.settings {
    topNewsFirst = 1

    list.media.image {
        maxWidth = 230
        maxHeight = 210
    }
}

// scriptmerger
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:scriptmerger/Configuration/setup.txt">
// sourceopt
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sourceopt/Configuration/TypoScript/setup.txt">