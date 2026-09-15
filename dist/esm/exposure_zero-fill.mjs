export const name="exposure_zero-fill";
export const id="dl_e2d3a77c93dc4e668816";
export const url=new URL("../icons/E/exposure_zero-fill.svg?v=8371b1eb068c4941520b369e07ab31de766ee4a05d273bf259c94b5666e53133",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
