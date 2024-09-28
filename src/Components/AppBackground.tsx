export default function AppBackground() {
    return (
        <div className="fixed w-full h-full -z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-screen h-screen">
                <defs>
                    <linearGradient id="light-gradient-a" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#f5f5f5">
                            <animate attributeName="stop-color"
                                values="#f5f5f5;#e0e0e0;#fafafa;#f5f5f5;" dur="20s" repeatCount="indefinite">
                            </animate>
                        </stop>
                        <stop offset=".5" stopColor="#e0e0e0">
                            <animate attributeName="stop-color"
                                values="#e0e0e0;#fafafa;#f0f0f0;#e0e0e0;" dur="20s" repeatCount="indefinite">
                            </animate>
                        </stop>
                        <stop offset="1" stopColor="#fafafa">
                            <animate attributeName="stop-color"
                                values="#fafafa;#f5f5f5;#e0e0e0;#fafafa;" dur="20s" repeatCount="indefinite">
                            </animate>
                        </stop>
                        <animateTransform attributeName="gradientTransform" type="rotate" from="0 .5 .5" to="360 .5 .5"
                            dur="20s" repeatCount="indefinite" />
                    </linearGradient>

                    <linearGradient id="light-gradient-b" gradientUnits="objectBoundingBox" x1="0" y1="1" x2="1" y2="1">
                        <stop offset="0" stopColor="#f0f0f0">
                            <animate attributeName="stop-color"
                                values="#f0f0f0;#f5f5f5;#e0e0e0;#f0f0f0;" dur="20s" repeatCount="indefinite">
                            </animate>
                        </stop>
                        <stop offset="1" stopColor="#f5f5f5" stopOpacity="0">
                            <animate attributeName="stop-color"
                                values="#f5f5f5;#fafafa;#e0e0e0;#f5f5f5;" dur="20s" repeatCount="indefinite">
                            </animate>
                        </stop>
                        <animateTransform attributeName="gradientTransform" type="rotate" values="360 .5 .5;0 .5 .5"
                            dur="10s" repeatCount="indefinite" />
                    </linearGradient>
                </defs>

                <rect fill="url(#light-gradient-a)" width="100%" height="100%" />
                <rect fill="url(#light-gradient-b)" width="100%" height="100%" />
            </svg>
        </div>
    )
}