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