export const name="keyboard_full-fill";
export const id="dl_17019777480e06cf3656";
export const url=new URL("../icons/keyboard_full-fill.svg?v=c7915aa7365a4ed32286edab4137754e151dfdcb2916f799d389c620ef3adbef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
