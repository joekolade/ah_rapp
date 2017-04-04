page.10.variables {
    contactform = FLUIDTEMPLATE
    contactform {
        file = EXT:ah_rapp/Resources/Private/Templates/Contactform.html

        variables {
            form < styles.content.get
            form.select.pidInList = {$site.ah_rapp.contactform.pid}
            form.select.uidInList = {$site.ah_rapp.contactform.ceuid}
        }
    }
}