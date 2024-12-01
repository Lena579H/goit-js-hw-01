function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding) * 2;
  const borderWidth = parseFloat(border) * 2;

  const totalWidth = contentWidth + paddingWidth + borderWidth;

  return totalWidth;
}

const getElementWidth1 = ("50px", "8px", "4px");
const getElementWidth2 = ("60px", "12px", "8.5px");
const getElementWidth3 = ("200px", "0px", "0px");

// Перевірка функції
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
