import React from 'react';

const SvgSwitch = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="79"
        height="51"
        viewBox="0 0 79 51"
        fill="none"
      >
        <g filter="url(#filter0_d_174_541)">
          <rect x="11" y="11" width="46" height="20" rx="10" fill="#CECDCD" />
        </g>
        <g filter="url(#filter1_d_174_541)">
          <circle cx="20.9996" cy="21.0001" r="9.4" fill="#F8F8F8" />
        </g>
        <defs>
          <filter
            id="filter0_d_174_541"
            x="3"
            y="1"
            width="76"
            height="50"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="7" dy="5" />
            <feGaussianBlur stdDeviation="7.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.627451 0 0 0 0 0.619608 0 0 0 0 0.627451 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_174_541"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_174_541"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_174_541"
            x="0.599609"
            y="0.600098"
            width="48.8"
            height="48.8"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="4" dy="4" />
            <feGaussianBlur stdDeviation="7.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.952941 0 0 0 0 0.952941 0 0 0 0 0.952941 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_174_541"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_174_541"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default SvgSwitch;
