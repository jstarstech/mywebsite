export default function LinkedInIcon({
  size = 24,
  color = "currentColor",
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="4" fill={color} />
      <circle cx="8" cy="8" r="1.5" fill="white" />
      <rect x="7" y="11" width="2" height="6" rx="0.5" fill="white" />
      <path
        d="M12 11 L12 17"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 13 C14 11, 16 11, 17 13 L17 17"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
