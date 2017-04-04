lib {
    contactform = FLUIDTEMPLATE
    contactform {
        templateName = Contactform

        templateRootPaths {
            10 = EXT:ah_rapp/Resources/Private/Templates
        }

#        variables {
#            form < styles.content.get
#            form.select.pidInList = {$ah_rapp.settings.contactform.pid}
#            form.select.uidInList = {$ah_rapp.settings.contactform.ceuid}
#        }
    }
}

lib.contactbar.20 < lib.contactform