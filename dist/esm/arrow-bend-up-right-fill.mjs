export const name="arrow-bend-up-right-fill";
export const id="dl_12aa7532689f44e3aafb";
export const url=new URL("../icons/arrow-bend-up-right-fill.svg?v=1fef0b35093db10968c6970bcd075609c1cd9ea6817d09e0f5d9ebd267a9c9c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
