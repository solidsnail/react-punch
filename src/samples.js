export default {
    entrance: {
        fade: (easing = "cubic-bezier(0.215, 0.61, 0.355, 1)", duration = 1000, loop = 1) => {
            return ({
                frames: {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
                duration,
                easing,
                direction: "alternate",
                loop,
            })
        },
        flyin: (direction = "top", distance = 200, easing = "cubic-bezier(0.215, 0.61, 0.355, 1)", duration = 500, loop = 1) => {
            const translateFrom = {
                top: `translateY(${distance}px)`,
                bottom: `translateY(${-distance}px)`,
                left: `translateX(${distance}px)`,
                right: `translateX(${-distance}px)`,
            }
            const translateTo = {
                top: `translateY(0px)`,
                bottom: `translateY(0px)`,
                left: `translateX(0px)`,
                right: `translateX(0px)`,
            }
            return ({
                frames: {
                    from: {
                        clipPath: `inset(${direction === "bottom" ? 100 : 0}% ${direction === "left" ? 100 : 0}% ${direction === "top" ? 100 : 0}% ${direction === "right" ? 100 : 0}%)`,
                        transform: translateFrom[direction]
                    },
                    to: {
                        clipPath: `inset(0% 0% 0% 0%)`,
                        transform: translateTo[direction]
                    },
                },
                duration,
                mode: "both",
                easing,
                direction: "alternate",
                loop,
            })
        },
        split: (direction = "vertical", easing = "cubic-bezier(0.215, 0.61, 0.355, 1)", duration = 1000, loop = 1) => {
            const translateFrom = {
                vertical: `inset(50% 0% 50% 0%)`,
                horizontal: `inset(0% 50% 0% 50%)`,
            }
            const translateTo = {
                vertical: `inset(0% 0% 0% 0%)`,
                horizontal: `inset(0% 0% 0% 0%)`,
            }
            return ({
                frames: {
                    from: {
                        clipPath: translateFrom[direction]
                    },
                    to: {
                        clipPath: translateTo[direction]
                    },
                },
                duration,
                mode: "both",
                easing,
                loop,
            })
        },
        wipe: (direction = "top", color = "black", easing = "cubic-bezier(0.215, 0.61, 0.355, 1)", duration = 3000, loop = 1) => {
            const translate = {
                top: (i) => `linear-gradient(to top, ${color}, transparent ${i * 3}%)`,
                bottom: (i) => `linear-gradient(to bottom, ${color}, transparent ${i * 3}%)`,
                left: (i) => `linear-gradient(to left, ${color}, transparent ${i * 3}%)`,
                right: (i) => `linear-gradient(to right, ${color}, transparent ${i * 3}%)`,
            }
            const frames = {};
            for (let i = 0; i <= 100; i++) {
                frames[`${i}%`] = {
                    background: i === 0 ? "transparent" : translate[direction](i),
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }
            }
            return ({
                frames,
                duration,
                easing,
                direction: "alternate",
                loop,
            })
        },
        shape: (type = "triangle", easing = "cubic-bezier(0.215, 0.61, 0.355, 1)", duration = 2000, loop = 1) => {
            const translateFrom = {
                triangle: `polygon(50% 50%, 45% 65%, 55% 65%)`,
                rhombus: `polygon(50% 45%, 55% 50%, 50% 55%, 45% 50%)`,
                pentagon: `polygon(50% 25%, 65% 40%, 60% 55%, 40% 55%, 35% 40%)`,
                hexagon: `polygon(50% 30%, 65% 45%, 65% 55%, 50% 70%, 35% 55%, 35% 40%)`,
                star: `polygon(50% 20%, 55% 35%, 70% 40%, 60% 45%, 65% 60%, 50% 55%, 35% 60%, 40% 45%, 30% 40%, 45% 35%)`,
            }
            const translateTo = {
                triangle: `polygon(50% -20%, -20% 100%, 120% 100%)`,
                rhombus: `polygon(50% -20%, 120% 50%, 50% 120%, -20% 50%)`,
                pentagon: `polygon(50% -20%, 120% 38%, 82% 120%, 18% 120%, -20% 38%)`,
                hexagon: `polygon(50% -20%, 120% 25%, 120% 75%, 50% 120%, -20% 75%, -20% 25%)`,
                star: `polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)`,
            }
            return ({
                frames: {
                    from: {
                        clipPath: translateFrom[type]
                    },
                    to: {
                        clipPath: translateTo[type]
                    },
                },
                duration,
                easing,
                direction: "alternate",
                loop,
            })
        },
        zoom: (direction = "center", distance = 100, easing = "cubic-bezier(0.215, 0.61, 0.355, 1)", duration = 1000, loop = 1) => {
            const translateFrom = {
                center: `translate(0px,0px)`,
                top: `translate(0px,${distance}px)`,
                bottom: `translate(0px,${-distance}px)`,
                left: `translate(${distance}px,0px)`,
                right: `translate(${-distance}px,0px)`,
            }
            const translateTo = {
                center: `translate(0px,0px)`,
                top: `translate(0px,0px)`,
                bottom: `translate(0px,0px)`,
                left: `translate(0px,0px)`,
                right: `translate(0px,0px)`,
            }
            const transformOrigin = {
                center: `center center`,
                top: `bottom center`,
                bottom: `top center`,
                left: `center right`,
                right: `center left`,
            }
            return ({
                frames: {
                    from: {
                        opacity: 0,
                        transformOrigin: transformOrigin[direction],
                        transform: `scale(0,0) ${translateFrom[direction]}`
                    },
                    to: {
                        opacity: 1,
                        transformOrigin: transformOrigin[direction],
                        transform: `scale(1,1) ${translateTo[direction]}`
                    },
                },
                duration,
                mode: "both",
                easing,
                direction: "alternate",
                loop,
            })
        },
        bounce: (direction = "center", distance = 300, easing = "cubic-bezier(0.215, 0.61, 0.355, 1)", duration = 1000, loop = 1) => {
            const translateFrom = (d = null) => ({
                center: `translate(0px,0px)`,
                top: `translate(0px,${d || distance}px)`,
                bottom: `translate(0px,${d || -distance}px)`,
                left: `translate(${d || distance}px,0px)`,
                right: `translate(${d || -distance}px,0px)`,
            })
            return ({
                frames: {
                    from: {
                        opacity: 0,
                        transform: translateFrom()[direction],
                    },
                    "60%": {
                        opacity: 1,
                        transform: translateFrom(25)[direction],
                    },
                    "75%": {
                        transform: translateFrom(-10)[direction],
                    },
                    "90%": {
                        transform: translateFrom(5)[direction],
                    },
                    to: {
                        transform: "translate(0px,0px)",
                    }
                },
                duration,
                easing,
                direction: "alternate",
                loop,
            })
        },
        flip: (direction = "vertical", easing = "cubic-bezier(0.215, 0.61, 0.355, 1)", duration = 1000, loop = 1) => {
            const translateFrom = {
                vertical: `perspective(400px) rotate3d(0, 1, 0, 90deg)`,
                horizontal: `perspective(400px) rotate3d(1, 0, 0, 90deg)`,
            }
            const translateTo = {
                vertical: `perspective(400px) rotate3d(0, 1, 0, 0deg)`,
                horizontal: `perspective(400px) rotate3d(1, 0, 0, 0deg)`,
            }
            return ({
                frames: {
                    from: {
                        opacity: 0,
                        transform: translateFrom[direction],
                    },
                    to: {
                        opacity: 1,
                        transform: translateTo[direction],
                    }
                },
                duration,
                mode: "both",
                direction: "alternate",
                easing,
                loop,
            })
        },
        slide: (direction = "top", distance = 100, easing = "cubic-bezier(0.215, 0.61, 0.355, 1)", duration = 500, loop = 1) => {
            const translateFrom = {
                top: `translateY(${distance}px)`,
                bottom: `translateY(${-distance}px)`,
                left: `translateX(${distance}px)`,
                right: `translateX(${-distance}px)`,
            }
            const translateTo = {
                top: `translateY(0px)`,
                bottom: `translateY(0px)`,
                left: `translateX(0px)`,
                right: `translateX(0px)`,
            }
            return ({
                frames: {
                    from: {
                        opacity: 0,
                        transform: translateFrom[direction]
                    },
                    to: {
                        opacity: 1,
                        transform: translateTo[direction]
                    },
                },
                duration,
                mode: "both",
                direction: "alternate",
                easing,
                loop,
            })
        },
    },
    exit: {

    },
    emphasis: {
        bounce: (distance = 30, easing = "cubic-bezier(0.215, 0.61, 0.355, 1)", duration = 1000, loop = 1) => {
            return ({
                frames: {
                    from: {
                        transform: "translate3d(0, 0, 0)",
                    },
                    "20%": {
                        transform: "translate3d(0, 0, 0)",
                    },
                    "40%": {
                        transform: `translate3d(0, -${distance}px, 0)`,
                    },
                    "43%": {
                        transform: `translate3d(0, -${distance}px, 0)`,
                    },
                    "53%": {
                        transform: "translate3d(0, 0, 0)",
                    },
                    "70%": {
                        transform: `translate3d(0, -${distance / 2}px, 0)`,
                    },
                    "80%": {
                        transform: "translate3d(0, 0, 0)",
                    },
                    "90%": {
                        transform: "translate3d(0, -4px, 0)",
                    },
                    to: {
                        transform: "translate3d(0, 0, 0)",
                    },
                },
                duration,
                easing,
                loop,
            })
        },
        flash: (easing = "cubic-bezier(0.215, 0.61, 0.355, 1)", duration = 1000, loop = 1) => {
            return ({
                frames: {
                    from: {
                        opacity: 1,
                    },
                    "25%": {
                        opacity: 0,
                    },
                    "50%": {
                        opacity: 1,
                    },
                    "75%": {
                        opacity: 0,
                    },
                    to: {
                        opacity: 1,
                    },
                },
                duration,
                easing,
                loop,
            })
        },
        pulse: (scale = 0.1, easing = "cubic-bezier(0.215, 0.61, 0.355, 1)", duration = 1000, loop = 1) => {
            return ({
                frames: {
                    from: {
                        transform: `scale3d(1, 1, 1)`
                    },
                    "50%": {
                        transform: `scale3d(${1 + scale}, ${1 + scale}, ${1 + scale})`
                    },
                    to: {
                        transform: `scale3d(1, 1, 1)`
                    }
                },
                duration,
                easing,
                loop,
            })
        },
        rubber: (scale = 0.25, easing = "cubic-bezier(0.215, 0.61, 0.355, 1)", duration = 1000, loop = 1) => {
            return ({
                frames: {
                    from: {
                        transform: `scale3d(1, 1, 1)`,
                    },
                    "30%": {
                        transform: `scale3d(${1 + scale}, ${0.5 + scale}, 1)`,
                    },
                    "40%": {
                        transform: `scale3d(${0.5 + scale}, ${1 + scale}, 1)`,
                    },
                    "50%": {
                        transform: `scale3d(${1 + (scale - 0.10)}, ${1 - (scale + 0.10)}, 1)`,
                    },
                    "65%": {
                        transform: `scale3d(${1 - (scale - 0.20)}, ${1 + (scale - 0.20)}, 1)`,
                    },
                    "75%": {
                        transform: `scale3d(${1 + (scale - 0.20)}, ${1 - (scale - 0.20)}, 1)`,
                    },
                    to: {
                        transform: `scale3d(1, 1, 1)`,
                    }
                },
                duration,
                easing,
                loop,
            })
        },
        shake: (scale = 10, easing = "cubic-bezier(0.215, 0.61, 0.355, 1)", duration = 1000, loop = 1) => {
            return ({
                frames: {
                    from: {
                        transform: `translate3d(0, 0, 0)`,
                    },
                    "10%": {
                        transform: `translate3d(${-scale}px, 0, 0)`,
                    },
                    "30%": {
                        transform: `translate3d(${-scale}px, 0, 0)`,
                    },
                    "50%": {
                        transform: `translate3d(${-scale}px, 0, 0)`,
                    },
                    "70%": {
                        transform: `translate3d(${-scale}px, 0, 0)`,
                    },
                    "90%": {
                        transform: `translate3d(${-scale}px, 0, 0)`,
                    },
                    "20%": {
                        transform: `translate3d(${scale}px, 0, 0)`,
                    },
                    "40%": {
                        transform: `translate3d(${scale}px, 0, 0)`,
                    },
                    "60%": {
                        transform: `translate3d(${scale}px, 0, 0)`,
                    },
                    "80%": {
                        transform: `translate3d(${scale}px, 0, 0)`,
                    },
                    to: {
                        transform: `translate3d(0, 0, 0)`,
                    }
                },
                duration,
                easing,
                loop,
            })
        },
        jello: (easing = "cubic-bezier(0.215, 0.61, 0.355, 1)", duration = 1000, loop = 1) => {
            return ({
                frames: {
                    from: {
                        transform: `translate3d(0, 0, 0)`,
                    },
                    "11.1%": {
                        transform: `translate3d(0, 0, 0)`,
                    },
                    "22.2%": {
                        transform: `skewX(-12.5deg) skewY(-12.5deg)`,
                    },
                    "33.3%": {
                        transform: `skewX(6.25deg) skewY(6.25deg)`,
                    },
                    "44.4%": {
                        transform: `skewX(-3.125deg) skewY(-3.125deg)`,
                    },
                    "55.5%": {
                        transform: `skewX(1.5625deg) skewY(1.5625deg)`,
                    },
                    "66.6%": {
                        transform: `skewX(-0.78125deg) skewY(-0.78125deg)`,
                    },
                    "77.7%": {
                        transform: `skewX(0.390625deg) skewY(0.390625deg)`,
                    },
                    "88.8%": {
                        transform: `skewX(-0.1953125deg) skewY(-0.1953125deg)`,
                    },
                    to: {
                        transform: `translate3d(0, 0, 0)`,
                    }
                },
                duration,
                mode: "both",
                easing,
                loop,
            })
        },
    },
    motionpath: {

    },
    text: {
        rainbow: (colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"], duration = 2000) => {
            const frames = {};
            colors.map((color, i) => {
                frames[`${((i + 1) / colors.length) * 100}%`] = { color };
            });
            return ({
                frames,
                duration,
                direction: "alternate",
                loop: "infinite",
            })
        },
        gradient: (colors = ["red", "yellow"], angle = 90, duration = 10000) => {
            return ({
                frames: {
                    from: {
                        filter: "hue-rotate(0deg)",
                        backgroundImage: `linear-gradient(${angle}deg,${colors[0]},${colors[1]})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    },
                    to: {
                        filter: "hue-rotate(360deg)",
                        backgroundImage: `linear-gradient(${angle}deg,${colors[0]},${colors[1]})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    },
                },
                duration,
                easing: "linear",
                direction: "reverse",
                loop: "infinite",
            })
        },
    },
    border: {
        draw: (color = "grey", side = "all", thickness = 3, duration = 2000) => {
            const frames = {
                all: {
                    "0%": {
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `linear-gradient(to right, ${color} 100%, ${color} 100%),linear-gradient(to bottom, ${color} 100%, ${color} 100%),linear-gradient(to right, ${color} 100%, ${color} 100%),linear-gradient(to bottom, ${color} 100%, ${color} 100%)`,
                        backgroundPosition: '0 0,100% 0,100% 100%,0 100%',
                        backgroundSize: `0 ${thickness}px,
                                  ${thickness}px 0,
                                  0 ${thickness}px,
                                  ${thickness}px 0`
                    },
                    "25%": {
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `linear-gradient(to right, ${color} 100%, ${color} 100%),linear-gradient(to bottom, ${color} 100%, ${color} 100%),linear-gradient(to right, ${color} 100%, ${color} 100%),linear-gradient(to bottom, ${color} 100%, ${color} 100%)`,
                        backgroundPosition: '0 0,100% 0,100% 100%,0 100%',
                        backgroundSize: `100% ${thickness}px,
                                  ${thickness}px 0,
                                  0 ${thickness}px,
                                  ${thickness}px 0`
                    },
                    "50%": {
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `linear-gradient(to right, ${color} 100%, ${color} 100%),linear-gradient(to bottom, ${color} 100%, ${color} 100%),linear-gradient(to right, ${color} 100%, ${color} 100%),linear-gradient(to bottom, ${color} 100%, ${color} 100%)`,
                        backgroundPosition: '0 0,100% 0,100% 100%,0 100%',
                        backgroundSize: `100% ${thickness}px,
                                  ${thickness}px 100%,
                                  0 ${thickness}px,
                                  ${thickness}px 0`
                    },
                    "75%": {
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `linear-gradient(to right, ${color} 100%, ${color} 100%),linear-gradient(to bottom, ${color} 100%, ${color} 100%),linear-gradient(to right, ${color} 100%, ${color} 100%),linear-gradient(to bottom, ${color} 100%, ${color} 100%)`,
                        backgroundPosition: '0 0,100% 0,100% 100%,0 100%',
                        backgroundSize: `100% ${thickness}px,
                                  ${thickness}px 100%,
                                  100% ${thickness}px,
                                  ${thickness}px 0`
                    },
                    "100%": {
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `linear-gradient(to right, ${color} 100%, ${color} 100%),linear-gradient(to bottom, ${color} 100%, ${color} 100%),linear-gradient(to right, ${color} 100%, ${color} 100%),linear-gradient(to bottom, ${color} 100%, ${color} 100%)`,
                        backgroundPosition: '0 0,100% 0,100% 100%,0 100%',
                        backgroundSize: `100% ${thickness}px,
                                  ${thickness}px 100%,
                                  100% ${thickness}px,
                                  ${thickness}px 100%`
                    }
                },
                top: {
                    "0%": {
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `linear-gradient(to right, ${color} 100%, ${color} 100%),linear-gradient(to bottom, ${color} 100%, ${color} 100%),linear-gradient(to right, ${color} 100%, ${color} 100%),linear-gradient(to bottom, ${color} 100%, ${color} 100%)`,
                        backgroundPosition: '0 0,100% 0,100% 100%,0 100%',
                        backgroundSize: `0 ${thickness}px,
                                  ${thickness}px 0,
                                  0 ${thickness}px,
                                  ${thickness}px 0`
                    },
                    "100%": {
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `linear-gradient(to right, ${color} 100%, ${color} 100%),linear-gradient(to bottom, ${color} 100%, ${color} 100%),linear-gradient(to right, ${color} 100%, ${color} 100%),linear-gradient(to bottom, ${color} 100%, ${color} 100%)`,
                        backgroundPosition: '0 0,100% 0,100% 100%,0 100%',
                        backgroundSize: `100% ${thickness}px,
                                  ${thickness}px 0,
                                  0 ${thickness}px,
                                  ${thickness}px 0`
                    },
                },
                right: {
                    "0%": {
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `linear-gradient(to right, ${color} 100%, ${color} 100%),linear-gradient(to bottom, ${color} 100%, ${color} 100%),linear-gradient(to right, ${color} 100%, ${color} 100%),linear-gradient(to bottom, ${color} 100%, ${color} 100%)`,
                        backgroundPosition: '0 0,100% 0,100% 100%,0 100%',
                        backgroundSize: `0% ${thickness}px,
                                  ${thickness}px 0%,
                                  0 ${thickness}px,
                                  ${thickness}px 0`
                    },
                    "100%": {
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `linear-gradient(to right, ${color} 100%, ${color} 100%),linear-gradient(to bottom, ${color} 100%, ${color} 100%),linear-gradient(to right, ${color} 100%, ${color} 100%),linear-gradient(to bottom, ${color} 100%, ${color} 100%)`,
                        backgroundPosition: '0 0,100% 0,100% 100%,0 100%',
                        backgroundSize: `0% ${thickness}px,
                                  ${thickness}px 100%,
                                  0 ${thickness}px,
                                  ${thickness}px 0`
                    },
                },
                bottom: {
                    "0%": {
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `linear-gradient(to right, ${color} 100%, ${color} 100%),linear-gradient(to bottom, ${color} 100%, ${color} 100%),linear-gradient(to right, ${color} 100%, ${color} 100%),linear-gradient(to bottom, ${color} 100%, ${color} 100%)`,
                        backgroundPosition: '0 0,100% 0,100% 100%,0 100%',
                        backgroundSize: `0 ${thickness}px,
                                  ${thickness}px 0,
                                  0 ${thickness}px,
                                  ${thickness}px 0`
                    },
                    "100%": {
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `linear-gradient(to right, ${color} 100%, ${color} 100%),linear-gradient(to bottom, ${color} 100%, ${color} 100%),linear-gradient(to right, ${color} 100%, ${color} 100%),linear-gradient(to bottom, ${color} 100%, ${color} 100%)`,
                        backgroundPosition: '0 0,100% 0,100% 100%,0 100%',
                        backgroundSize: `0% ${thickness}px,
                                  ${thickness}px 0%,
                                  100% ${thickness}px,
                                  ${thickness}px 0`
                    },
                },
                left: {
                    "0%": {
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `linear-gradient(to right, ${color} 100%, ${color} 100%),linear-gradient(to bottom, ${color} 100%, ${color} 100%),linear-gradient(to right, ${color} 100%, ${color} 100%),linear-gradient(to bottom, ${color} 100%, ${color} 100%)`,
                        backgroundPosition: '0 0,100% 0,100% 100%,0 100%',
                        backgroundSize: `0 ${thickness}px,
                                  ${thickness}px 0,
                                  0 ${thickness}px,
                                  ${thickness}px 0`
                    },
                    "100%": {
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `linear-gradient(to right, ${color} 100%, ${color} 100%),linear-gradient(to bottom, ${color} 100%, ${color} 100%),linear-gradient(to right, ${color} 100%, ${color} 100%),linear-gradient(to bottom, ${color} 100%, ${color} 100%)`,
                        backgroundPosition: '0 0,100% 0,100% 100%,0 100%',
                        backgroundSize: `0% ${thickness}px,
                                  ${thickness}px 0%,
                                  0% ${thickness}px,
                                  ${thickness}px 100%`
                    },
                },
            }
            return ({
                frames: frames[side],
                duration,
            })
        },
    },
}