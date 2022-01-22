import AsyncStorage from '@react-native-async-storage/async-storage';

export const getItemsFromStorage = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    const items = jsonValue ? JSON.parse(jsonValue) : [];
    return items;
  } catch (err) {
    console.log(err);
  }
};

export const setItemsToStorage = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (err) {
    console.log(err);
  }
};
