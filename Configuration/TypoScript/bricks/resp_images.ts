tt_content.image.20.1 {
    layoutKey = srcset

    # Default Breakpoints
    sourceCollection {
        huge {
            # dataKey = extra-large
            maxW = 1600
            srcsetCandidate = 1600w
            sizes = (min-width: 1140px)
        }
        xl {
            # dataKey = extra-large
            maxW = 1140
            srcsetCandidate = 1140w
            sizes = (min-width: 992px)
        }

        lg {
            # data-key = large
            maxW = 992
            srcsetCandidate = 992w
            sizes = (min-width: 768px)
        }

        md {
            # data-key = medium
            maxW = 768
            srcsetCandidate = 768w
            sizes = (min-width: 480px)
        }

        sm {
            # data-key = small
            maxW = 480
            srcsetCandidate = 480w
            sizes = (min-width: 320px)
        }

        xs {
            # dataKey = extra-small
            maxW = 320
            srcsetCandidate = 320w
            sizes = auto
        }
    }
}