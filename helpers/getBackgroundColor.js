const { backgroundColors } = require("./defaults");

const getBackgroundColor = (name) => {
  const base64 = Buffer.from(name).toString("base64");
  const index = String(base64 + name).length % backgroundColors.length;
  return backgroundColors[index];
};

module.exports = getBackgroundColor;
