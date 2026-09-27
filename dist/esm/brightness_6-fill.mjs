export const name="brightness_6-fill";
export const id="dl_0ec7573db51054b90e0a";
export const url=new URL("../icons/brightness_6-fill.svg?v=446a23cb269d3c6604358cea338a66037961fc09133043459f1082f91ff42cd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
