lib {
    contactform = FLUIDTEMPLATE
    contactform {
        file = EXT:ah_rapp/Resources/Private/Templates/Contactform.html

#        variables {
#            form < styles.content.get
#            form.select.pidInList = {$ah_rapp.settings.contactform.pid}
#            form.select.uidInList = {$ah_rapp.settings.contactform.ceuid}
#        }
    }

    contactform = TEXT
    contactform.value = Maybe this way
}

lib.contactbar.20 < lib.contactform