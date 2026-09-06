export const name="joystick";
export const id="dl_3c7da5eb2cae45ab972d";
export const url=new URL("../icons/joystick.svg?v=7e516e27846aff48c00e85b73f1523f0f732eb35b1d7028a498c9186604868b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
