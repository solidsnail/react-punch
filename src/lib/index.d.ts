import { Interpolation, CSSObject } from "create-emotion";

export function animateElement(
    element: React.ReactElement,
    animation: {
        frames: {
            from: Interpolation,
            to: Interpolation,
            [key: string]: Interpolation,
        },
        duration: number,
        delay: number,
        easing: "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-end" | Function,
        loop: number | "infinite",
        mode: "none" | "forwards" | "backwards" | "both",
        direction: "normal" | "reverse" | "alternate" | "alternate-reverse",
    }): Promise;
export function animateText(
    text: string,
    animation: {
        frames: {
            from: Interpolation,
            to: Interpolation,
            [key: string]: Interpolation,
        },
        duration: number,
        easing: "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-end" | Function,
        loop: number | "infinite",
        mode: "none" | "forwards" | "backwards" | "both",
        direction: "normal" | "reverse" | "alternate" | "alternate-reverse",
    },
    letter_delay: number,
    tag: keyof ReactHTML,
    delay: number,
    style: CSSObject,
): React.ReactElement;
export function animateClass(
    animation: {
        frames: {
            from: Interpolation,
            to: Interpolation,
            [key: string]: Interpolation,
        },
        duration: number,
        easing: "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-end" | Function,
        loop: number | "infinite",
        mode: "none" | "forwards" | "backwards" | "both",
        direction: "normal" | "reverse" | "alternate" | "alternate-reverse",
    } | {
        frames: {
            from: Interpolation,
            to: Interpolation,
            [key: string]: Interpolation,
        },
        duration: number,
        easing: "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-end" | Function,
        loop: number | "infinite",
        mode: "none" | "forwards" | "backwards" | "both",
        direction: "normal" | "reverse" | "alternate" | "alternate-reverse",
    }[],
    delay: number | number[],
): string;
export const samples: {
    entrance: {
        fade(easing: "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-end" | Function, duration: number): void,
        flyin(direction: "top" | "bottom" | "left" | "right", distance: number, easing: "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-end" | Function, duration: number): void,
        split(direction: "vertical" | "horizontal", easing: "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-end" | Function, duration: number): void,
        wipe(direction: "top" | "bottom" | "left" | "right", color: string, easing: "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-end" | Function, duration: number): void,
        shape(type: "triangle" | "rhombus" | "pentagon" | "hexagon" | "heptagon" | "close" | "star", easing: "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-end" | Function, duration: number): void,
        zoom(direction: "center" | "top" | "bottom" | "left" | "right", distance: number, easing: "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-end" | Function, duration: number): void,
        flip(direction: "vertical" | "horizontal", easing: "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-end" | Function, duration: number): void,
        slide(direction: "top" | "bottom" | "left" | "right", distance: number, easing: "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-end" | Function, duration: number): void,
    },
    exit: {

    },
    emphasis: {
        bounce(distance: number, easing: "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-end" | Function, duration: number): void,
        flash(easing: "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-end" | Function, duration: number): void,
        pulse(scale: number, easing: "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-end" | Function, duration: number): void,
        rubber(scale: number, easing: "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-end" | Function, duration: number): void,
        shake(scale: number, easing: "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-end" | Function, duration: number): void,
        jello(easing: "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-end" | Function, duration: number, loop: number): void,
    },
    motionpath: {

    },
    text: {
        rainbow(colors: string[], duration: number): void,
        gradient(colors: [string, string], angle: number, duration: number): void,
    },
    border: {
        draw(color: string, side: "all" | "top" | "right" | "bottom" | "left", thickness: number, duration: number): void,
    },
}