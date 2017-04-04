lib {
    contactform  < styles.content.get
    contactform {
        #select.pidInList = {$ah_rapp.settings.contactform.pid}
        #select.insertData = 1
        select.uidInList = 146
    }
}

lib.contactbar = COA
lib.contactbar.20 < lib.contactform