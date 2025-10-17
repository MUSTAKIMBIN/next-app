const getAppsFromLs = () => {
  try {
    const lsApps = localStorage.getItem("apps");
    if (!lsApps) return []; // if nothing is stored yet

    const storedApps = JSON.parse(lsApps);

    // ✅ if data is not an array (maybe object or string)
    if (!Array.isArray(storedApps)) {
      console.warn("⚠️ localStorage data is not an array, resetting...");
      localStorage.removeItem("apps");
      return [];
    }

    return storedApps;
  } catch (error) {
    console.error("Error parsing localStorage data:", error);
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

const removeAppsFromLs = (id) => {
  const storedApps = getAppsFromLs();

  if (!Array.isArray(storedApps)) return;

  // Convert both to numbers to avoid string/number mismatch
  const updated = storedApps.filter((appId) => Number(appId) !== Number(id));

  localStorage.setItem("apps", JSON.stringify(updated));

  // console.log(`Removed app with ID ${id}`, updated);//
};

export { getAppsFromLs, saveAppsToLs, removeAppsFromLs };
