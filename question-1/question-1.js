function lowerCaseWords(array) {
  return new Promise((resolve, reject) => {
    try {
      const filteredArray = array
        .filter((item) => typeof item === "string")
        .map((word) => word.toLowerCase());
      resolve(filteredArray);
    } catch (error) {
      reject(error);
    }
  });
}

const mixedArray = ["Illia", 123, "hHELLOwORD", true, "SPRING"];
const wrongData = true;

lowerCaseWords(mixedArray)
  .then((result) => console.log(result))
  .catch((error) => console.error("Error:", error.message));

lowerCaseWords(wrongData)
  .then((result) => console.log(result))
  .catch((error) => console.error("Error:", error.message));
