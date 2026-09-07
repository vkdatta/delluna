export const name="airplay-fill";
export const id="dl_ca75fd8811cd43cd83fc";
export const url=new URL("../icons/airplay-fill.svg?v=4753d4f6b673cfbd918daf0b9b6a6ce656eb0c968b2d3cd8b7464900dc6a09d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
