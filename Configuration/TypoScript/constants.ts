// EXT
//

// scriptmerger
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:scriptmerger/Configuration/constants.txt">
// sourceopt
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sourceopt/Configuration/TypoScript/constants.txt">


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


// ext:powermail
//

plugin.tx_powermail {
    view.templateRootPath = EXT:ah_rapp/Resources/Extensions/powermail/Templates/
    view.partialRootPath = EXT:ah_rapp/Resources/Extensions/powermail/Partials/
    view.layoutRootPath = EXT:ah_rapp/Resources/Extensions/powermail/Layouts/
}


// ext:cookieconsent2
//

plugin.tx_cookieconsent2.settings {
    link = 34
    message = Diese Webseite verwendet Cookies, um korrekt zu funktionieren und Ihnen ein optimales Nutzererlebnis zu bieten. Wenn Sie damit einverstanden sind, setzen Sie Ihren Besuch der Seite fort, oder sehen Sie sich für weitere Informationen unser Impressum an.
    dismiss = OK.
    learnMore = Mehr erfahren
}


// ext:scriptmerger
//

plugin.tx_scriptmerger.css.enable = 1
plugin.tx_scriptmerger.css.compress.enable = 0
#plugin.tx_scriptmerger.css.merge.ignore = https://fonts.googleapis.com/
#plugin.tx_scriptmerger.css.compress.ignore = https://fonts.googleapis.com/css

plugin.tx_scriptmerger.javascript.enable = 1
plugin.tx_scriptmerger.javascript.compress.enable = 0
plugin.tx_scriptmerger.javascript.parseBody = 1

// ext:sourceopt
//

// https://docs.typo3.org/typo3cms/extensions/sourceopt/TyposcriptReferenceForSourceopt/Index.html
sourceopt.enabled = 1
sourceopt.formatHtml = 2
sourceopt.formatHtml = 1