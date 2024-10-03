const resolvedPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "delayed success!" });
    }, 500);
  });
};

const rejectedPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("error: delayed exception!"));
    }, 500);
  });
};

resolvedPromise()
  .then((result) => {
    console.log("resolve:", result);
  })
  .catch((error) => {
    console.error("reject:", error);
  });

rejectedPromise()
  .then((result) => {
    console.log("resolve:", result);
  })
  .catch((error) => {
    console.error("reject:", error.message);
  });
