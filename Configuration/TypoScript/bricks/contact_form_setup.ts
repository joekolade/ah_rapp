lib {
    contactform = FLUIDTEMPLATE
    contactform {
        file = typo3conf/ext/ah_rapp/Resources/Private/Templates/Contactform.html

        variables {
            form < styles.content.get
            form.select.pidInList = {$site.ah_rapp.contactform.pid}
            form.select.uidInList = {$site.ah_rapp.contactform.ceuid}
        }
    }
}

lib.contactbar.20 < lib.contactform