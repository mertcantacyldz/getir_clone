/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand_color': '#4C3398',
        'pri_brand_color': '#5D3EBC',
        'pri_brand_color_light': '#f3f0fe',
        'sec_brand_color': '#7849f7',
        'brand_yellow': '#ffd300',
        'border_color': '#dfdee2',
        'error_color': '#db471e',
        'box_shadow': '#5d3ebc0a',
        'modal_bg': '#18112db8',
        'close_button' : '#a2a2a2',
        'footer_button' : '#F3F0FE',
        'gray1' : '#525252'
      },
      height: {
        '11.5': '2.813rem',
        '21': '5.25rem',
        '37': '9.375rem'


      },
      width: {
        '17': '4.5rem',
        '18': '4.688rem',
        '37': '9.375rem'
      },
      padding: {
        '3.5': '0.875rem'
      },

      fontFamily: {
        'sans': ["Open Sans", "Helvetica Neue", 'Helvetica', 'Arial', "sans-serif"],
        'odor' : [ "Bebas Neue", 'sans-serif'],

      },

      invert: {
        25: '.25',
        50: '.5',
        75: '.75',
        90: '.90',
      }



    },
  },
  plugins: [],
}

