import {atom} from 'recoil'
const listState = atom({
  key: 'listState', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
export default listState