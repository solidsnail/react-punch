import { css, keyframes } from "emotion";

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`
export function animate(
    element = null,
    animation = {
        from: { opacity: 0 },
        to: { opacity: 1 },
        duration: 1,
    }
) {
    element.classList.add(css({ animation: `${bounce} 1s ease 1` }))
}