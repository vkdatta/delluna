export const name="lucid_2-ghost";
export const id="dl_d3a9e1ac346b4854a830";
export const url=new URL("../icons/lucid_2-ghost.svg?v=c6389f35ec10158a37b590b1c6ba7e115cc6052db69666784625f651b7783fcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
