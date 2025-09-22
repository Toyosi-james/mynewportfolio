// tailwind.config.mjs
/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // If you use other folders, add them here, or use "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
        colors:{
            lightHover:"#fcf4ff",
            darkHover:"2a004a",
            darkTheme:"#11001F"
        },
        boxShadow:{
          "black" : '4px 4px 0 #000',
          "white" : '4px 4px 0 #fff'
        }
    },
  },
  plugins: [],
};
