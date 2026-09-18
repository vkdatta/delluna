export const name="water_damage";
export const id="dl_bb802cc4d247454e8721";
export const url=new URL("../icons/water_damage.svg?v=0ab16b85529db62994c790e3d93ab15a54057e170d5437b940c6a14a2cc673e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
