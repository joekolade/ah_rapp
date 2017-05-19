
// Site "Namespace"
//

ah_rapp {
    settings {
        contactform.pid = 95
        contactform.ceuid = 146
    }
}

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:ah_rapp/Configuration/TypoScript/bricks/contact_form_constants.ts">


// responsive images
//

styles.content.imgtext.responsive = 1
styles.content.imgtext.layoutKey = picture
styles.content.imgtext.maxWInText = 1140
styles.content.textmedia.maxWInText = 1140


// ext:scriptmerger
//


plugin.tx_scriptmerger.css.enable = 1
plugin.tx_scriptmerger.css.compress.enable = 0
plugin.tx_scriptmerger.css.merge.ignore = https://fonts.googleapis.com/css
#plugin.tx_scriptmerger.css.compress.ignore = https://fonts.googleapis.com/css

plugin.tx_scriptmerger.javascript.enable = 1
plugin.tx_scriptmerger.javascript.compress.enable = 0
plugin.tx_scriptmerger.javascript.parseBody = 1

