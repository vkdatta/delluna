export const name="sun-fill";
export const id="dl_b2fdbc65f4d04cebaa2e";
export const url=new URL("../icons/S/sun-fill.svg?v=343fb225b7f7dddd7b6b80e1cec533cf7839da96e0513c6da40e88dd24306154",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
