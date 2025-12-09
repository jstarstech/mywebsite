export default function LogoImg({ size = 24 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height="48" viewBox="0 0 200 200">
      <defs>
        <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b"></stop>
          <stop offset="30%" stopColor="#4c1d95"></stop>
          <stop offset="70%" stopColor="#6b21a8"></stop>
          <stop offset="100%" stopColor="#a855f7"></stop>
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="90" fill="url(#grad1)" stroke="#6b21a8" strokeWidth="2"></circle>
      <circle cx="100" cy="100" r="85" fill="none" stroke="rgba(255,255,255,0.2)"></circle>
      <text
        x="100"
        y="125"
        fill="#fff"
        fontFamily="Arial, sans-serif"
        fontSize="70"
        fontWeight="bold"
        letterSpacing="-2"
        textAnchor="middle"
      >
        MC
      </text>
      <circle
        cx="100"
        cy="100"
        r="90"
        fill="none"
        stroke="rgba(255,255,255,0.3)"
        strokeDasharray="10 190"
        strokeWidth="3"
        opacity="0.5"
        transform="rotate(-45 100 100)"
      ></circle>
    </svg>
  )
}
