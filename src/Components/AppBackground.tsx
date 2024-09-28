export default function AppBackground() {
    return (
      <div className="fixed w-full h-full -z-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-screen h-screen">
          <defs>
            <linearGradient
              id="light-gradient-a"
              gradientUnits="objectBoundingBox"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0" stopColor="#fdf5c4"> {/* Light yellow paper color */}
                <animate
                  attributeName="stop-color"
                  values="#fdf5c4;#eaeaea;#d6d6d6;#fafafa"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset=".5" stopColor="#eaeaea">
                <animate
                  attributeName="stop-color"
                  values="#eaeaea;#f5f5dc;#e6e6e6;#f5f5f5"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="1" stopColor="#fafafa">
                <animate
                  attributeName="stop-color"
                  values="#fafafa;#fdf5c4;#d6d6d6;#fafafa"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </stop>
              <animateTransform
                attributeName="gradientTransform"
                type="rotate"
                from="0 .5 .5"
                to="360 .5 .5"
                dur="30s"
                repeatCount="indefinite"
              />
            </linearGradient>
  
            <linearGradient
              id="light-gradient-b"
              gradientUnits="objectBoundingBox"
              x1="0"
              y1="1"
              x2="1"
              y2="1"
            >
              <stop offset="0" stopColor="#f5f5dc" stopOpacity="1"> {/* Another soft paper tint */}
                <animate
                  attributeName="stop-color"
                  values="#f5f5dc;#f0f0e0;#dcdcdc;#f5f5dc"
                  dur="15s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="1" stopColor="#fafafa" stopOpacity="0.7">
                <animate
                  attributeName="stop-color"
                  values="#fafafa;#fdf5c4;#d6d6d6;#fafafa"
                  dur="15s"
                  repeatCount="indefinite"
                />
              </stop>
              <animateTransform
                attributeName="gradientTransform"
                type="rotate"
                values="360 .5 .5;0 .5 .5"
                dur="20s"
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>
  
          <rect fill="url(#light-gradient-a)" width="100%" height="100%" />
          <rect fill="url(#light-gradient-b)" width="100%" height="100%" />
        </svg>
      </div>
    );
  }
  