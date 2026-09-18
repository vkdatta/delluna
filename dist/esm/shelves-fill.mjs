export const name="shelves-fill";
export const id="dl_8e80cff9ea4d49339118";
export const url=new URL("../icons/shelves-fill.svg?v=6a26a62ad35e546454be4c218b59e90deee640e5c62bc4cb3cdf54534a86b09c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
