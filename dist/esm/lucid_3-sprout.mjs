export const name="lucid_3-sprout";
export const id="dl_e97635c1778e4ea09704";
export const url=new URL("../icons/lucid_3-sprout.svg?v=08e3ccfa7f618721c918efaf8a392ef210f416e7a1e51590db729f0e40f3b797",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
