export const storeInLocalSession = (mvList) => {
  localStorage.setItem("watchList", JSON.stringify(mvList));
};

export const accessFromLocalSession = () => {
  const str = localStorage.getItem("watchList");

  return str ? JSON.parse(str) : null;
};
