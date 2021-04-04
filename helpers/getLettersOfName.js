const getLettersOfName = (name) => {
  const words = name.split(" ");
  if (words.length > 0) {
    const firstLetters = words.map((word) => word.charAt(0).toUpperCase());
    return firstLetters.join("");
  }
  return "";
};

module.exports = getLettersOfName;
