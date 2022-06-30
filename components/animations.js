
export const easing = [0.6, -0.05, 0.01, 0.99]

export const fadeIn = {
    initial: {
        opacity: 0,
    },

    animate: {

        opacity: 1,
        transition: {
            duration: 2,
            ease: easing
        }
    }
}

export const slideInFromTop = {
    initial: {
        y: -50,
    },

    animate: {

        y: 0,
        transition: {
            duration: 1,
            ease: easing
        }
    }
}

export const slideInLeftFast = {
    initial: {
        x: -100,
        opacity: 0,
    },

    animate: {

        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: easing
        }
    }
}

export const slideInRightFast = {
    initial: {
        x: 100,
        opacity: 0,
    },

    animate: {

        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: easing
        }
    }
}
export const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.5
        }
    }
}