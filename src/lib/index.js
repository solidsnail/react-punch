import React, { useRef, useEffect, useState } from "react";
import { css, keyframes } from "emotion";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import samples from "./samples";
import { isElement } from "./helpers";

export { samples };

export const animateElement = function (
  element = null,
  animation = {},
) {
  return new Promise(function (resolve) {
    if (element == null)
      throw "Target not defined";
    if (!isElement(element))
      throw "Target is not a valid  element";
    const animationName = keyframes(animation.frames);
    const cls = css({
      animationName,
      animationDuration: (animation.duration || 1000) + "ms",
      animationTimingFunction: animation.easing || "ease",
      animationIterationCount: animation.loop || 1,
      animationFillMode: animation.mode || "forwards",
      animationDirection: animation.direction || "unset",
    });
    setTimeout(() => {
      if (!element.classList.contains(cls)) {
        element.classList.add(cls);
      } else {
        element.classList.remove(cls);
        void element.offsetWidth;
        element.classList.add(cls);
      }
      setTimeout(resolve, animation.duration || 1000);
    }, animation.delay || 0);

  })
}

export const animateClass = function (
  animation = {},
  delay = 0,
) {
  let anim;
  if (Array.isArray(animation)) {
    anim = {
      animation: animation.map((anim, i) => `${keyframes(anim.frames)} ${(anim.duration || 1000) + "ms"} ${anim.easing || "ease"} ${((delay && delay[i]) ? delay[i] : 0) + "ms"} ${anim.loop || 1} ${anim.direction || "normal"} ${anim.mode || "forwards"} running`).join(" , ")
    }
  } else {
    anim = {
      animationName: keyframes(animation.frames),
      animationDuration: (animation.duration || 1000) + "ms",
      animationTimingFunction: animation.easing || "ease",
      animationIterationCount: animation.loop || 1,
      animationDelay: (delay || 0) + "ms",
      animationFillMode: animation.mode || "forwards",
      animationDirection: animation.direction || "unset",
    }
  }
  const cls = css(anim);
  return cls
}

export const animateText = function (
  text = null,
  animation = {},
  letter_delay = 200,
  tag = "span",
  delay = 0,
  style = {},
) {
  if (text == null)
    throw "Target not defined";
  if (typeof text !== "string")
    throw "Target is not a string";
  const animationName = keyframes(animation.frames);
  const Letter = ({ letter, delay: letterDelay, nosplit = false }) => {
    let element, ref;
    const cls = css({
      animationName,
      animationDuration: (animation.duration || 1000) + "ms",
      animationDelay: (nosplit ? delay : delay + letterDelay) + "ms",
      animationTimingFunction: animation.easing || "ease",
      animationIterationCount: animation.loop || 1,
      animationFillMode: animation.mode || "forwards",
      animationDirection: animation.direction || "unset",
    });
    ref = useRef(null);
    useEffect(() => {
      element = ref.current;
      if (!element.classList.contains(cls)) {
        element.classList.add(cls);
      } else {
        element.classList.remove(cls);
        void element.offsetWidth;
        element.classList.add(cls);
      }
    }, []);
    return React.createElement(tag, { ref, style: { ...style, display: "inline-block" } }, letter)
  };
  return letter_delay > 0 ? text.split("").map((letter, i) => <Letter key={i} letter={letter} delay={letter_delay * i} />) : <Letter letter={text} nosplit delay={delay} />
}

export const AnimationGroup = function ({ show = false, animation = samples.entrance.zoom("center", 200, "ease", 500), isList = false, style = {}, children, timeout = 1000 }) {
  const toggleCSS = {
    "&.toggle-appear": {
      ...animation.frames.from,
    },
    "&.toggle-appear.toggle-appear-active": {
      ...animation.frames.to,
      transition: `all ${animation.duration || 1000}ms ${animation.easing || "ease"} ${animation.duration || 1000}ms`,
    },
    "&.toggle-enter": {
      ...animation.frames.from,
    },
    "&.toggle-enter.toggle-enter-active": {
      ...animation.frames.to,
      transition: `all ${animation.duration || 1000}ms ${animation.easing || "ease"}`,
    },
    "&.toggle-leave": {
      ...animation.frames.to,
    },
    "&.toggle-leave.toggle-leave-active": {
      ...animation.frames.from,
      transition: `all ${animation.duration || 1000}ms ${animation.easing || "ease"}`,
    },
    ...style,
  }
  const [appear, setAppear] = useState(false);
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setAppear(show);
      }, timeout);
    } else {
      setAppear(show);
    }
  }, [show]);
  return (
    isList
      ?
      <ReactCSSTransitionGroup
        component="div"
        transitionName="toggle"
        transitionEnterTimeout={animation.duration || 1000}
        transitionLeaveTimeout={animation.duration || 1000}>
        {children ? children.map(child => React.cloneElement(child, { className: `${css(toggleCSS)} ${child.props.className || ""}`, style: { ...child.props.style, ...style } })) : []}
      </ReactCSSTransitionGroup>
      :
      <ReactCSSTransitionGroup
        component="div"
        transitionName="toggle"
        transitionEnterTimeout={animation.duration || 1000}
        transitionLeaveTimeout={animation.duration || 1000}>
        {appear && React.cloneElement(children, { className: `${css(toggleCSS)} ${children.props.className || ""}`, style: { ...children.props.style, ...style } })}
      </ReactCSSTransitionGroup>
  )
}