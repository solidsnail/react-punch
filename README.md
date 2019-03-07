<p  align="center">
<img alt="header" src="./src/logo.gif" />
</p>

<p  align="center">
<b>A kinetic typography library for ReactJS </b>
</p>

<p  align="center">
<b>0.0.3c</b>
</p>

## Usage

```cmd
npm i react-punch
```
```jsx
import { animateText, samples } from "react-punch";
```
```jsx
<b>{animateText("Hello World!",samples.emphasis.bounce(10, "ease-out", 1000, "infinite"),100)}</b>
```
<p  align="center">
<img alt="header" src="./src/helloworld.gif" />
</p>

## API

<details><summary>animateClass</summary>

Triggers the animation on mount
```jsx
 <div
        className={animateClass({
          frames:{
            from: { opacity: 0, transform: "scale(0,0)" },
            to: { opacity: 1, transform: "scale(1,1)" },
          },
          easing: "cubic-bezier(0.0, 0.06, 0.05, 0.95)"
        })}
      />
```
<img alt="header" src="./src/animateclass.gif" />
</p>
</details>

## Samples
### Entrance

<details><summary>Fade</summary>

```jsx
<b>{animateText("Hello World!",samples.entrance.fade())}</b>
```
<img alt="header" src="./src/textfade.gif" />
</p>
</details>

<details><summary>Flyin</summary>

```jsx
<b>{animateText("Hello World!",samples.entrance.flyin())}</b>
```
<img alt="header" src="./src/textflyin.gif" />
</p>
</details>

<details><summary>Split</summary>

```jsx
<b>{animateText("Hello World!",samples.entrance.split())}</b>
```
<img alt="header" src="./src/textsplit.gif" />
</p>
</details>

<details><summary>Wipe</summary>

```jsx
<b>{animateText("Hello World!",samples.entrance.wipe())}</b>
```
<img alt="header" src="./src/textwipe.gif" />
</p>
</details>

<details><summary>Shape</summary>

```jsx
<b>{animateText("Hello World!",samples.entrance.shape())}</b>
```
<img alt="header" src="./src/textshape.gif" />
</p>
</details>

<details><summary>Zoom</summary>

```jsx
<b>{animateText("Hello World!",samples.entrance.zoom())}</b>
```
<img alt="header" src="./src/textzoom.gif" />
</p>
</details>

<details><summary>Flip</summary>

```jsx
<b>{animateText("Hello World!",samples.entrance.flip())}</b>
```
<img alt="header" src="./src/textflip.gif" />
</p>
</details>

<details><summary>Slide</summary>

```jsx
<b>{animateText("Hello World!",samples.entrance.slide())}</b>
```
<img alt="header" src="./src/textslide.gif" />
</p>
</details>

### Exit

<details><summary>Fade</summary>

```jsx
<b>{animateText("Hello World!",samplesexit.fade())}</b>
```
<img alt="header" src="./src/textfadeexit.gif" />
</p>
</details>

<details><summary>Flyin</summary>

```jsx
<b>{animateText("Hello World!",samplesexit.flyin())}</b>
```
<img alt="header" src="./src/textflyinexit.gif" />
</p>
</details>

<details><summary>Split</summary>

```jsx
<b>{animateText("Hello World!",samplesexit.split())}</b>
```
<img alt="header" src="./src/textsplitexit.gif" />
</p>
</details>

<details><summary>Wipe</summary>

```jsx
<b>{animateText("Hello World!",samplesexit.wipe())}</b>
```
<img alt="header" src="./src/textwipeexit.gif" />
</p>
</details>

<details><summary>Shape</summary>

```jsx
<b>{animateText("Hello World!",samplesexit.shape())}</b>
```
<img alt="header" src="./src/textshapeexit.gif" />
</p>
</details>

<details><summary>Zoom</summary>

```jsx
<b>{animateText("Hello World!",samplesexit.zoom())}</b>
```
<img alt="header" src="./src/textzoomexit.gif" />
</p>
</details>

<details><summary>Flip</summary>

```jsx
<b>{animateText("Hello World!",samplesexit.flip())}</b>
```
<img alt="header" src="./src/textflipexit.gif" />
</p>
</details>

<details><summary>Slide</summary>

```jsx
<b>{animateText("Hello World!",samplesexit.slide())}</b>
```
<img alt="header" src="./src/textslideexit.gif" />
</p>
</details>

### Text

<details><summary>Rainbow</summary>

```jsx
<b>{animateText("Hello World!",samples.text.rainbow())}</b>
```
<img alt="header" src="./src/textrainbow.gif" />
</p>
</details>

<details><summary>Gradient</summary>

```jsx
<b>{animateText("Hello World!",samples.text.gradient())}</b>
```
<img alt="header" src="./src/textgradient.gif" />
</p>
</details>
