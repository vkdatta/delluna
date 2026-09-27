export const name="house-fill";
export const id="dl_fb666a380c434d138094";
export const url=new URL("../icons/house-fill.svg?v=f81b46131d0944b76dc7463232bcb41556bcde82204f200475422b5300148520",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
