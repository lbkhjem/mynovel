/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    divideWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    container: {
      center: true,
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '1px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    fontSize: {
      'base': '14px',
      xs: ['12px', {
        lineHeight: '16px',
      }],
      sm: ['14px', {
        lineHeight: '20px',
      }],
      xl: ['18px', {
        lineHeight: '22px',
      }],
      40:['40px', {
        lineHeight: '49.6px',
      }],
      30:['30px', {
        lineHeight: '37.2px',
      }],
      26:['26px', {
        lineHeight: '34px',
      }],
      24: ['24px', {
        lineHeight: '30px',
      }],
      36: ['36px', {
        lineHeight: '44px',
      }],
      20: ['20px', {
        lineHeight: '23px',
      }],
      16: ['16px', {
        lineHeight: '20px',
      }],
      17: ['17px', {
        lineHeight: '24px',
      }],
      18: ['18px', {
        lineHeight: '25px',
      }],
      10: ['10px', {
        lineHeight: '12px',
      }],
      12: ['12px', {
        lineHeight: '14px',
      }],
      13: ['13px', {
        lineHeight: '15px',
      }],
      11: ['11px', {
        lineHeight: '13px',
      }],
      lg: ['14px', {
        lineHeight: '17px',
      }],
      80: ['80px', {
        lineHeight: '99px',
      }],
      45: ['45px', {
        lineHeight: '55.8px',
      }],
    }
    ,
    extend: {
      colors: {
        'background':'#F4F4F4',
        'ddv': '#BE1E2D',
        'bgddv': '#f2f2f2',
        'brow': '#808A94',
        'login': '#ACACAC',
        'lightddv': '#FE0136',
        'Accent_Color': '#40BAFF',
        'link':'#2F80ED',
        'xanhnhat': '#2980B0',
        'comment': '#F0F2F5',
        'border': '#BFC4C9',
        'linkxanh': '#2980B0',
        'line': '#414141',
        'linengang': '#DFE2E4',
        'orange': '#F2994A',
        'green': '#1C655E',
        'greenlight':'#38C173',
        'linkkhac':'#2D9CDB',
        'divide':'#7F8183',
        'bordercam': '#FFDFE1',
        'uudaibg':'#F6F6F6',
        'pink':'#FFE7E9',
        'brownhat': '#ADB4BB',
        'cancel': '#E9283A',
        'bgpromotion':'#F5F7FD',
        'placeholderpromo':'#E8E8E8',
        'Accent_Color_1': '#3CAEA4',
        'den':'#001529',
        'header': '#14425d',
        'tim':'#847af3',
        'gender': '#536373'
      },
      dropShadow: {
        '2xl': '2px 4px 27px rgba(190, 30, 45, 0.2)',
      }
    },
  },
  plugins: [
  ]
}

