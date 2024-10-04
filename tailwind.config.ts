import type { Config } from "tailwindcss/types/config";


const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			keyframes: {
				moveAlongBorder: {
					'0%': { transform: 'translate(0, 0)' },
					'25%': { transform: 'translate(100%, 0)' },
					'50%': { transform: 'translate(100%, 100%)' },
					'75%': { transform: 'translate(0, 100%)' },
					'100%': { transform: 'translate(0, 0)' },
				},
			},
			boxShadow: {
				redGlassBottom: "0 10px 400px rgba(223, 74, 74, 0.5)", // Only bottom shadow
				redGlassLeft: "10px -10px 14px rgba(223, 74, 74, 0.5),-10px 10px 14px rgba(223, 74, 74, 0.5)",

				redGlassTop:
					"0 10px 20px rgba(223, 74, 74, 0.5), 0 -20px 400px rgba(223, 74, 74, 0.5)", // Only top shadow
				redGlassBoth:
					"0 10px 20px rgba(223, 74, 74, 0.5), 0 -10px 400px rgba(223, 74, 74, 0.5)", // Both top and bottom shadow
				redGlassBoths:
					"0 10px 20px rgba(223, 74, 74, 0.5), 0 -10px 400px rgba(223, 74, 74, 0.5)",
				redGlass:
					"0 8px 32px 0 rgba(223, 1, 74, 0.37), 0 8px 32px 0 rgba(223, 10, 74, 0.37), 0 8px 32px 0 rgba(223, 33, 74, 0.37)", redGlassLight:
					"0 5px 10px 0 rgba(223, 1, 74, 0.37), 0 5px 10px 0 rgba(223, 10, 74, 0.37), 0 5px 10px 0 rgba(223, 33, 74, 0.37)",
				redGlassX:
					"0 -8px 10px 0 rgba(223, 74, 74, 0.37), 0 -8px 10px 0 rgba(223, 74, 74, 0.37), 0 8px 5px 0 rgba(223, 74, 74, 0.37)",
				glass: "0 8px 32px 0 rgba(135, 31, 31, 0.37)", // General glass effect in a darker red
			},

			animation: {
				spotlight: "spotlight 2s ease .75s 1 forwards",
				'move-dot': 'moveAlongBorder 5s linear infinite',

			},


			colors: {
				textHead: '#110b1d',
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};

export default config;
