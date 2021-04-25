import {atom} from 'recoil'
const formState = atom({
  key: 'formState', // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});
export default formState