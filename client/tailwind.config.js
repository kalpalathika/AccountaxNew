module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    backgroundImage: {
      'pack-train': "url('assets/finance2.jpg')",
    },
    extend: {keyframes: {
      fadeInUp: {
        '0%': { opacity: 0,  transform : 'translate(20px)' },
        '100%': { opacity: 1,  transform : 'translateY(0px)' },
      }
    },
    animation: {
      fadeInUpAnim:  'fadeInUp 1s linear 2s'
    },
  
  }
},
  plugins: [],
};
