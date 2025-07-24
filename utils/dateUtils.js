export const formatDate = (date = new Date()) => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const getCurrentDate = () => formatDate();
