TCAdefaults {
    # Bild oben links als Standard
    tt_content.imageorient = 2
}


/**
* Title von Links
*/
RTE.classesAnchor.internalLink.titleText = Webseite anzeigen
RTE.classesAnchor.externalLink.titleText = Webseite anzeigen
RTE.classesAnchor.externalLinkInNewWindow.titleText = Webseite öffnen
RTE.classesAnchor.internalLinkInNewWindow.titleText = Webseite öffnen
RTE.classesAnchor.download.titleText = Datei herunterladen
RTE.classesAnchor.downloadImage.titleText = Bild herunterladen
RTE.classesAnchor.mail.titleText = E-Mail senden


// Cs seo
tx_csseo {
    # new index and table name of the model
    1 = tx_news_domain_model_news

    # if the get parameter is set in the URL the cs_seo properties will be shown
    1.enable = GP:tx_news_pi1|news

    1.fallback {
        title = title
        description = teaser
    }

    #    1.evaluation {
    #        # additional params to initialize the detail view, the pipe will be replaced by the uid
    #        getParams = &tx_myext_pi1[controller]=MyController&tx_myext_pi1[action]=MyAction&tx_myext_pi1[mymod]=|
    #
    #        # detail pid for the current records, only if set the table will be available
    #        detailPid =
    #    }
}