export const name="bluetooth-x-fill";
export const id="dl_d6a11d36252144a798a7";
export const url=new URL("../icons/bluetooth-x-fill.svg?v=ff097e3181396d33d6ea0ee6757c99171861e574bb3f72c7e7cef6d278ad5005",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
