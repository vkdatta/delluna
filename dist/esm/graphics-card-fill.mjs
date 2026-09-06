export const name="graphics-card-fill";
export const id="dl_381529596a9f42a08525";
export const url=new URL("../icons/graphics-card-fill.svg?v=77b837e9a4ba59a8d8aeeb0e867cd2d4ed6cd3afba4cd5ace2be52aca24fb57c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
