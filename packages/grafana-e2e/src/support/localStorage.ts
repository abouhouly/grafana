export const getLocalStorageItem = (key: string): any => {
  const value = localStorage.getItem(key);

  if (value === null) {
    return value;
  } else {
    return JSON.parse(value);
  }
};

export const requireLocalStorageItem = (key: string): any => {
  const value = localStorage.getItem(key);

  if (value === null) {
    throw new Error(`The key "${key}" does not exist in localStorage`);
  } else {
    return JSON.parse(value);
  }
};
