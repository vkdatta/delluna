export const name="brightness_2";
export const id="dl_1f44087e23b9446ea8dd";
export const url=new URL("../icons/brightness_2.svg?v=56c547d2a93f2da7afcc2030e9ba35d545e9057669e3217662b790c5dff02edd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
