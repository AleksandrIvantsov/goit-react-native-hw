import * as React from "react";
import Svg, { Rect, Path, Circle, G, Defs, ClipPath } from "react-native-svg";

export function Grid(props) {
  return (
    <Svg height="24" width="24" viewBox="0 0 24 24" {...props}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 3H10V10H3V3Z"
        stroke="#212121"
        stroke-opacity="0.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14 3H21V10H14V3Z"
        stroke="#212121"
        stroke-opacity="0.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14 14H21V21H14V14Z"
        stroke="#212121"
        stroke-opacity="0.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 14H10V21H3V14Z"
        stroke="#212121"
        stroke-opacity="0.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function User(props) {
  return (
    <Svg height="24" width="24" viewBox="0 0 24 24" {...props}>
      <Path
        d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21"
        stroke="#212121"
        stroke-opacity="0.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
        stroke="#212121"
        stroke-opacity="0.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function LogOut(props) {
  return (
    <Svg height="24" width="24" viewBox="0 0 24 24" {...props}>
      <Path
        d="M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10"
        stroke="#BDBDBD"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17 16L21 12L17 8"
        stroke="#BDBDBD"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M21 12H9"
        stroke="#BDBDBD"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function ArrowLeft(props) {
  return (
    <Svg height="24" width="24" viewBox="0 0 24 24" {...props}>
      <Path
        d="M20 12H4"
        stroke="#212121"
        stroke-opacity="0.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10 18L4 12L10 6"
        stroke="#212121"
        stroke-opacity="0.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function Add(props) {
  return (
    <Svg height="25" width="25" viewBox="0 0 25 25" {...props}>
      <Circle cx="12.5" cy="12.5" r="12" fill="white" stroke="#FF6C00" />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z"
        fill="#FF6C00"
      />
    </Svg>
  );
}

export function CameraIcon(props) {
  return (
    <Svg height="24" width="24" viewBox="0 0 24 24" {...props}>
      <G clip-path="url(#clip0_36_45)">
        <Path
          d="M11.9998 15.2C13.7671 15.2 15.1998 13.7673 15.1998 12C15.1998 10.2327 13.7671 8.79999 11.9998 8.79999C10.2325 8.79999 8.7998 10.2327 8.7998 12C8.7998 13.7673 10.2325 15.2 11.9998 15.2Z"
          fill="white"
        />
        <Path
          d="M9 2L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H16.83L15 2H9ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_36_45">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export function MapPin(props) {
  return (
    <Svg height="24" width="24" viewBox="0 0 24 24" {...props}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 10.3636C20 16.0909 12 21 12 21C12 21 4 16.0909 4 10.3636C4 6.29681 7.58172 3 12 3C16.4183 3 20 6.29681 20 10.3636V10.3636Z"
        stroke="#BDBDBD"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
        stroke="#BDBDBD"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function Trash(props) {
  return (
    <Svg height="24" width="24" viewBox="0 0 24 24" {...props}>
      <Path
        d="M3 6H5H21"
        stroke="#BDBDBD"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M19.5 6C19.5 5.72386 19.2761 5.5 19 5.5C18.7239 5.5 18.5 5.72386 18.5 6H19.5ZM5.5 6C5.5 5.72386 5.27614 5.5 5 5.5C4.72386 5.5 4.5 5.72386 4.5 6H5.5ZM7.5 6C7.5 6.27614 7.72386 6.5 8 6.5C8.27614 6.5 8.5 6.27614 8.5 6H7.5ZM15.5 6C15.5 6.27614 15.7239 6.5 16 6.5C16.2761 6.5 16.5 6.27614 16.5 6H15.5ZM18.5 6V20H19.5V6H18.5ZM18.5 20C18.5 20.8284 17.8284 21.5 17 21.5V22.5C18.3807 22.5 19.5 21.3807 19.5 20H18.5ZM17 21.5H7V22.5H17V21.5ZM7 21.5C6.17157 21.5 5.5 20.8284 5.5 20H4.5C4.5 21.3807 5.61929 22.5 7 22.5V21.5ZM5.5 20V6H4.5V20H5.5ZM8.5 6V4H7.5V6H8.5ZM8.5 4C8.5 3.17157 9.17157 2.5 10 2.5V1.5C8.61929 1.5 7.5 2.61929 7.5 4H8.5ZM10 2.5H14V1.5H10V2.5ZM14 2.5C14.8284 2.5 15.5 3.17157 15.5 4H16.5C16.5 2.61929 15.3807 1.5 14 1.5V2.5ZM15.5 4V6H16.5V4H15.5Z"
        fill="#BDBDBD"
      />
      <Path
        d="M10 11V17"
        stroke="#BDBDBD"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14 11V17"
        stroke="#BDBDBD"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function RemoveBtn(props) {
  return (
    <Svg height="30" width="30" viewBox="0 0 31 31" {...props}>
      <Circle
        cx="18.4999"
        cy="18.5"
        r="12"
        transform="rotate(-45 18.4999 18.5)"
        fill="white"
        stroke="#E8E8E8"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.2574 13.5503L13.5503 14.2574L17.7929 18.5L13.5503 22.7426L14.2574 23.4497L18.5 19.2071L22.7426 23.4497L23.4498 22.7426L19.2071 18.5L23.4498 14.2574L22.7426 13.5503L18.5 17.7929L14.2574 13.5503Z"
        fill="#BDBDBD"
      />
    </Svg>
  );
}

export function MessageCircle(props) {
  return (
    <Svg height="24" width="24" viewBox="0 0 24 24" {...props}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 11.5C2.99656 12.8199 3.30493 14.1219 3.9 15.3C5.33904 18.1793 8.28109 19.9988 11.5 20C12.8199 20.0034 14.1219 19.6951 15.3 19.1L21 21L19.1 15.3C19.6951 14.1219 20.0034 12.8199 20 11.5C19.9988 8.28109 18.1793 5.33904 15.3 3.9C14.1219 3.30493 12.8199 2.99656 11.5 3H11C6.68419 3.2381 3.2381 6.68419 3 11V11.5V11.5Z"
        stroke="#BDBDBD"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function MessageCircleOrange(props) {
  return (
    <Svg height="24" width="24" viewBox="0 0 24 24" {...props}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 11.5C2.99656 12.8199 3.30493 14.1219 3.9 15.3C5.33904 18.1793 8.28109 19.9988 11.5 20C12.8199 20.0034 14.1219 19.6951 15.3 19.1L21 21L19.1 15.3C19.6951 14.1219 20.0034 12.8199 20 11.5C19.9988 8.28109 18.1793 5.33904 15.3 3.9C14.1219 3.30493 12.8199 2.99656 11.5 3H11C6.68419 3.2381 3.2381 6.68419 3 11V11.5Z"
        fill="#FF6C00"
      />
    </Svg>
  );
}

export function ArrowUp(props) {
  return (
    <Svg width="12" height="16" viewBox="0 0 12 16" {...props}>
      <Path
        d="M6 1L6.35355 0.646447C6.15829 0.451184 5.84171 0.451184 5.64645 0.646447L6 1ZM10.6464 6.35355C10.8417 6.54882 11.1583 6.54882 11.3536 6.35355C11.5488 6.15829 11.5488 5.84171 11.3536 5.64645L10.6464 6.35355ZM0.646447 5.64645C0.451184 5.84171 0.451184 6.15829 0.646447 6.35355C0.841709 6.54882 1.15829 6.54882 1.35355 6.35355L0.646447 5.64645ZM5.5 15C5.5 15.2761 5.72386 15.5 6 15.5C6.27614 15.5 6.5 15.2761 6.5 15H5.5ZM5.64645 1.35355L10.6464 6.35355L11.3536 5.64645L6.35355 0.646447L5.64645 1.35355ZM5.64645 0.646447L0.646447 5.64645L1.35355 6.35355L6.35355 1.35355L5.64645 0.646447ZM5.5 1V8H6.5V1H5.5ZM5.5 8V15H6.5V8H5.5Z"
        fill="white"
      />
    </Svg>
  );
}
