import { Interpolation, CSSObject } from "create-emotion";


declare module "react-punch" {
    type TEasing = "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-end" | Function
    type TMode = "none" | "forwards" | "backwards" | "both"
    type TDirection = "normal" | "reverse" | "alternate" | "alternate-reverse"
    interface IAnimation {
        frames: {
            from: Interpolation,
            to: Interpolation,
            [key: string]: Interpolation,
        },
        duration: number,
        easing: TEasing,
        loop: number | "infinite",
        mode: TMode,
        direction: TDirection,
    }
    export function animateElement(
        element: React.ReactElement,
        animation: IAnimation): Promise<>;
    export function animateText(
        text: string,
        animation: IAnimation,
        letter_delay: number,
        tag: string,
        delay: number,
        style: CSSObject,
    ): React.ReactElement;
    export function animateClass(
        animation: IAnimation | {
            frames: {
                from: Interpolation,
                to: Interpolation,
                [key: string]: Interpolation,
            },
            duration: number,
            easing: TEasing,
            loop: number | "infinite",
            mode: TMode,
            direction: TDirection,
        }[],
        delay: number | number[],
    ): string;
    export const samples: {
        entrance: {
            fade(easing: TEasing, duration: number, loop: number): void,
            flyin(direction: "top" | "bottom" | "left" | "right", distance: number, easing: TEasing, duration: number, loop: number): void,
            split(direction: "vertical" | "horizontal", easing: TEasing, duration: number, loop: number): void,
            wipe(direction: "top" | "bottom" | "left" | "right", color: string, easing: TEasing, duration: number, loop: number): void,
            shape(type: "triangle" | "rhombus" | "pentagon" | "hexagon" | "heptagon" | "close" | "star", easing: TEasing, duration: number, loop: number): void,
            zoom(direction: "center" | "top" | "bottom" | "left" | "right", distance: number, easing: TEasing, duration: number, loop: number): void,
            flip(direction: "vertical" | "horizontal", easing: TEasing, duration: number, loop: number): void,
            slide(direction: "top" | "bottom" | "left" | "right", distance: number, easing: TEasing, duration: number, loop: number): void,
        },
        exit: {

        },
        emphasis: {
            bounce(distance: number, easing: TEasing, duration: number, loop: number): void,
            flash(easing: TEasing, duration: number, loop: number): void,
            pulse(scale: number, easing: TEasing, duration: number, loop: number): void,
            rubber(scale: number, easing: TEasing, duration: number, loop: number): void,
            shake(scale: number, easing: TEasing, duration: number, loop: number): void,
            jello(easing: TEasing, duration: number, loop: number): void,
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
    interface AnimationGroupProps {
        show: boolean;
        animation: IAnimation;
        isList: boolean;
        style: React.CSSProperties;
        timeout: number;
    }
    export const AnimationGroup: React.FunctionComponent<AnimationGroupProps>

}