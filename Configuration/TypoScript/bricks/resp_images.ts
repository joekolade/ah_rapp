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



tt_content.image.20.1 {
    layoutKey = srcset

    # Default Breakpoints
    sourceCollection {
        xl {
            # dataKey = extra-large
            maxW = 1200
            srcsetCandidate = 1200w
        }

        lg {
            # data-key = large
            maxW = 992
            srcsetCandidate = 992w
        }

        md {
            # data-key = medium
            maxW = 768
            srcsetCandidate = 768w
        }

        sm {
            # data-key = small
            maxW = 480
            srcsetCandidate = 480w
        }

        xs {
            # dataKey = extra-small
            maxW = 320
            srcsetCandidate = 320w
            sizes = auto
        }
    }
}