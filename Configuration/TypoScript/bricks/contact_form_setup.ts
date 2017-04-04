lib {
    contactform = FLUIDTEMPLATE
    contactform {
        template = FILE
        template.file = EXT:ah_rapp/Resources/Private/Templates/Contactform.html


#        variables {
#            form < styles.content.get
#            form.select.pidInList = {$ah_rapp.settings.contactform.pid}
#            form.select.uidInList = {$ah_rapp.settings.contactform.ceuid}
#        }
    }
}

lib.contactbar.20 < lib.contactform