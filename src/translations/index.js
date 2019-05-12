import I18n from 'react-native-i18n'
import en from './en'
import sq from './sq'

I18n.fallbacks = true;

I18n.translations = {
  en,
  sq,
};

export const switchLanguage = (lang, component) => {
  I18n.locale = lang;
  component.forceUpdate();
};

export default I18n

