const getAppsFromLs = () => {
  const lsApps = localStorage.getItem("apps");
  if (lsApps) {
    const storedApps = JSON.parse(lsApps);
    return storedApps;
  } else {
    return [];
  }
};

const saveAppsToLs = (id) => {
  const lsSavedItems = getAppsFromLs();
  if (lsSavedItems.includes(id)) {
    alert("this is already in locla sore");
  } else {
    lsSavedItems.push(id);
    const saveToLs = JSON.stringify(lsSavedItems);
    localStorage.setItem("apps", saveToLs);
  }
};

export { getAppsFromLs, saveAppsToLs };
