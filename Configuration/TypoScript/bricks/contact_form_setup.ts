lib {
    contactform  < styles.content.get
    contactform {
        select.pidInList = {$ah_rapp.settings.contactform.pid}
        select.pidInList.insertData = 1
        #select.uidInList = {$ah_rapp.settings.contactform.ceuid}
    }
}

lib.contactbar = COA
lib.contactbar.20 < lib.contactform