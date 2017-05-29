// EXT
//

// scriptmerger
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:scriptmerger/Configuration/constants.txt">
// sourceopt
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sourceopt/Configuration/TypoScript/constants.txt">


// Site "Namespace"
//

config.domain = www.autohaus-rapp.com

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

plugin.tx_scriptmerger {
    css {
        enable = 1
        compress {
            enable = 0
            ignore = \.gz\.
        }

        merge {
            enable = 1
            ignore =
        }
    }
    javascript {
        minify {
            enable = 1
            ignore = \?,\.min\.
        }
        compress {
            enable = 0
            ignore = \?,\.gz\.
        }
        merge {
            enable = 1
            ignore = \?
        }
        parseBody = 1
    }
}

#plugin.tx_scriptmerger.css.merge.ignore = https://fonts.googleapis.com/
#plugin.tx_scriptmerger.css.compress.ignore = https://fonts.googleapis.com/css





// ext:sourceopt
//

// https://docs.typo3.org/typo3cms/extensions/sourceopt/TyposcriptReferenceForSourceopt/Index.html
sourceopt.enabled = 1
sourceopt.formatHtml = 2
sourceopt.formatHtml = 1

// all ext setups
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:ah_rapp/Configuration/TypoScript/ext/" extensions="tsconst">