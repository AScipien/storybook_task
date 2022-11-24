const customViewports = {
  gridXS: {
    name: 'gridXS',
    styles: {
      width: '360px',
      height: '963px',
    },
  },
  gridS: {
    name: 'gridS',
    styles: {
      width: '600px',
      height: '801px',
    },
  },
  gridM: {
    name: 'gridM',
    styles: {
      width: '800px',
      height: '801px',
    },
  },
  gridL: {
    name: 'gridL',
    styles: {
      width: '1024px',
      height: '801px',
    },
  },
  gridXL: {
    name: 'gridXL',
    styles: {
      width: '1288px',
      height: '801px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },

  },

  viewport: { viewports: customViewports },
}