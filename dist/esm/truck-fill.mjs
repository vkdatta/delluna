export const name="truck-fill";
export const id="dl_f8db92499405c00997a3";
export const url=new URL("../icons/truck-fill.svg?v=25d276242f2df107ae270ff3d132ae3467d0e10404ae46ee008a63adeef16e6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
