tt_content.image.20.1 {
    layoutKey = srcset

    # bootstrap package does this

    params.cObject = CASE
    params.cObject {
        key.field = layout
        # Default is responsive
        default = TEXT
        default.value = class="img-responsive img-content" sizes="(min-width: 1140px) 1600px, (min-width: 992px) 1140px, (min-width: 768px) 992px, (min-width: 480px) 768px, (min-width: 320px) 480px, auto"
        # Normal
        1 = TEXT
        1.value = class="img-content" sizes="(min-width: 1140px) 1600px, (min-width: 992px) 1140px, (min-width: 768px) 992px, (min-width: 480px) 768px, (min-width: 320px) 480px, auto"
        # Rounded corners
        2 = TEXT
        2.value = class="img-rounded img-content" sizes="(min-width: 1140px) 1600px, (min-width: 992px) 1140px, (min-width: 768px) 992px, (min-width: 480px) 768px, (min-width: 320px) 480px, auto"
        3 = TEXT
        3.value = class="img-rounded img-responsive img-content" sizes="(min-width: 1140px) 1600px, (min-width: 992px) 1140px, (min-width: 768px) 992px, (min-width: 480px) 768px, (min-width: 320px) 480px, auto"
        # Circle
        4 = TEXT
        4.value = class="img-circle img-content" sizes="(min-width: 1140px) 1600px, (min-width: 992px) 1140px, (min-width: 768px) 992px, (min-width: 480px) 768px, (min-width: 320px) 480px, auto"
        5 = TEXT
        5.value = class="img-circle img-responsive img-content" sizes="(min-width: 1140px) 1600px, (min-width: 992px) 1140px, (min-width: 768px) 992px, (min-width: 480px) 768px, (min-width: 320px) 480px, auto"
    }

    # Default Breakpoints
    sourceCollection >
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