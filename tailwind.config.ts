import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  		},
  		keyframes: {
  			"background-position-spin": {
  				"0%": { backgroundPosition: "0% 0%" },
  				"100%": { backgroundPosition: "0% 200%" }
  			},
  			"ripple": {
  				"0%": { transform: "scale(0)", opacity: "0.5" },
  				"100%": { transform: "scale(2)", opacity: "0" }
  			},
  			"blink": {
  				"0%, 100%": { opacity: "1" },
  				"50%": { opacity: "0" }
  			}
  		},
  		animation: {
  			"background-position-spin": "background-position-spin 1.5s linear infinite",
  			"ripple": "ripple 1s linear",
  			"blink": "blink 1s steps(1) infinite"
  		}
  	}
  },
  plugins: [],
} satisfies Config;
