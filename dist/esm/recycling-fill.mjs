export const name="recycling-fill";
export const id="dl_33e1f62cdad05978e849";
export const url=new URL("../icons/recycling-fill.svg?v=7eef1b04d6dacf86a3eada875879e5b918f13f7c09f5d1fe82ffce160edf75af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
