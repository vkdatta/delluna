export const name="cell-signal-low-fill";
export const id="dl_bcff90f8f36241cc9b16";
export const url=new URL("../icons/cell-signal-low-fill.svg?v=b34d75817adb8ff4301127fcfe5fa10fc4b7b7e72556d45629180e63ac4b4dfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
