tt_content.image.20.1 {
    layoutKey = srcset

    # Default Breakpoints
    sourceCollection {
        huge {
            # dataKey = extra-large
            maxW = 1600
            srcsetCandidate = 1600w
        }
        xl {
            # dataKey = extra-large
            maxW = 1140
            srcsetCandidate = 1140w
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