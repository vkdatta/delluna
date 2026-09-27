export const name="cards-fill";
export const id="dl_46bbc2d577914274a0d2";
export const url=new URL("../icons/cards-fill.svg?v=33f1bd096bdfa1a7a4f07ff423d36707a020e73c665378c3a62132689105e52e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
