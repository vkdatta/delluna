export const name="spinner-fill";
export const id="dl_0b9d34e3bed04aa78a2c";
export const url=new URL("../icons/S/spinner-fill.svg?v=85ebcaa0348c4d8ee53791de3266f19c091db0760b0378756b685734b0bf3978",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
