export const name="king_bed-fill";
export const id="dl_4d42f812523c90c0c968";
export const url=new URL("../icons/king_bed-fill.svg?v=a6f654f2820ad19eeac6d5bf3f47a601f0b96078dc9c19010f8aa938de6e72c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
