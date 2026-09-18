export const name="stat_minus_3";
export const id="dl_97d08611713d4c8f91b5";
export const url=new URL("../icons/S/stat_minus_3.svg?v=547b6d240a4ac3721d81b3289fa3a3e6b5b7abd6af1b559dc230b081f4533d87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
