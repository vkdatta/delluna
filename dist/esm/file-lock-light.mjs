export const name="file-lock-light";
export const id="dl_18ce6bd0311d43709692";
export const url=new URL("../icons/file-lock-light.svg?v=33b96aac5ce05fda23716934a3cb1388076a566812a1574eba66b23998937c1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
