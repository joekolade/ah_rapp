#styles.content.textmedia.maxWInText = 992
#
#tt_content.textmedia.settings.responsive_image_rendering {
#    layoutKey = srcset
#
#    # Default Breakpoints
#    sourceCollection {
#        xl {
#            dataKey = extra-large
#            width = 1200
#            srcset = 1200w
#        }
#
#        lg {
#            data-key = large
#            width = 992
#            srcset = 992w
#        }
#
#        md {
#            data-key = medium
#            width = 768
#            srcset = 768w
#        }
#
#        sm {
#            data-key = small
#            width = 480
#            srcset = 480w
#        }
#
#        xs {
#            dataKey = extra-small
#            width = 320
#            srcset = 320w
#            sizes = auto
#        }
#    }
#}

tt_content.image.20.1{
    layoutKey = srcset
    layout {
        default {
            element = <img src="###SRC###" width="###WIDTH###" height="###HEIGHT###" ###PARAMS### ###ALTPARAMS### ###BORDER### ###SELFCLOSINGTAGSLASH###>
        }
        srcset {
            element = <img src="###SRC###" srcset="###SOURCECOLLECTION###" ###PARAMS### ###ALTPARAMS### ###SELFCLOSINGTAGSLASH###>
            source = |*|###SRC### ###SRCSETCANDIDATE###,|*|###SRC### ###SRCSETCANDIDATE###
        }
        picture {
            element = <picture> ###SOURCECOLLECTION### <img src="###SRC###" ###PARAMS### ###ALTPARAMS### ###SELFCLOSINGTAGSLASH###></picture>
            source = <source srcset="###SRC###" media="###MEDIAQUERY###" ###SELFCLOSINGTAGSLASH###>
        }
        data {
            element = <img src="###SRC###" ###SOURCECOLLECTION### ###PARAMS### ###ALTPARAMS### ###SELFCLOSINGTAGSLASH###>
            source = data-###DATAKEY###="###SRC###"
        }
        yourCustomRendering {
            element = //your element definition
            source = // your source definition
        }
    }
}
/*
tt_content.image.20.1.sourceCollection >
tt_content.image.20.1.sourceCollection {
big {
maxW = 600
dataKey = big
}
small {
maxW = 200
dataKey = small
}
smallLandscape {
maxW = 400
dataKey = smallLandscape
}
}
*/

tt_content.image.20.1 {
    sourceCollection {
        small {
            // […]
        }
        medium {
            width = 400
            height = 300
            maxW = 400
            maxH = 300
            minW = 400
            minH = 300
            quality = 90
            pixelDensity = 1
            srcsetCandidate = 800w
            mediaQuery = (min-device-width: 800px)
            dataKey = medium
        }
        mediumHires {
            width = 400
            maxW = 400
            pixelDensity = 2
            srcsetCandidate = 400w 2x
            mediaQuery =
            dataKey = mediumHires
        }
        large {
            // […]
        }
        monster {
            // […]
        }
    }
}