export const name="mode_cool_off-fill";
export const id="dl_1b2acfc7a35d1efb80b3";
export const url=new URL("../icons/mode_cool_off-fill.svg?v=f4078d79f96edf0bd7a3d8ceb878f90bc82ae950d477f516b1ceb5c3a2dfc9ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
