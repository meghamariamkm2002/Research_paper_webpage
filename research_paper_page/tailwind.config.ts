import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        "dark-grey": "#eff2f5",
        "dark-white": "rgba(217, 217, 217, 0.4)",
        "light-grey": "rgba(112, 112, 112, 1)",
        "super-light": "rgba(143, 150, 163, 1)",
        "light-white": "rgba(248, 248, 248, 1)",
        "light-green": "rgba(234, 255, 238, 1)",
        "dark-green": "rgba(47, 157, 88, 1)",
        "not-so-black": "#464646",
        "table-black": "#2D2D2F",
        "sky-blue": "#EBF4FF",
        "not-so-white": "#F9F9F9",
        "light-yellow": "#FCF9B8",
        "light-pink": "#FFDDDD",
        "light-violet": "#F1CAFF",
        "primray-blue": "#0C5473",
        "primary-grey": "#8289A3",
        "base-blue": "#C5F1FF",
        "base-green": "#8CFFDD",
        "base-yellow": "#F3FFAC",
        "base-black": "#004933",
        "base-dark-yellow": "#98920B",
        "secondary-blue": "rgba(48, 126, 198, 1)",
        "mimo-blue": "rgba(77, 201, 255, 1)",
        "mimo-grey": "#A4A4A4",
        "peach": "#DBA39A",
        "off-white": "#F5EBE0",
        "beige": "#FEFCF3",
      }
    },
  },
  plugins: [],
}
export default config
