import keyMap from './keyMap.json';

const getLangKey = langCode => {
  return keyMap[langCode] || 'en';
};

export default getLangKey;