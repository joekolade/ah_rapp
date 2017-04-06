page {
    includeCSS {
        ah_rapp_powermail = EXT:ah_rapp/Resources/Public/Css/ahrapp_powermail.css
    }
}


lib {
    contactform  < styles.content.get
    contactform {
        select.pidInList = 95
        select.uidInList = 146
    }
}

lib.contactbar = COA
lib.contactbar {
    wrap = <div class="panel panel-info" style="margin-top:1em;"><div class="panel-body"><div class="row">|</div></div></div>
}
lib.contactbar.10 {
    wrap = <div class="col-sm-6">|</div>
}

lib.contactbar.20 < lib.contactform
lib.contactbar.20 {
    wrap = <div class="col-sm-6 hidden-xs">|</div>
}