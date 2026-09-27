export const name="potted_plant-fill";
export const id="dl_493cc2d29caf17d3cba5";
export const url=new URL("../icons/potted_plant-fill.svg?v=1683ade390f24996f7293f771f28bdacfd514dd8adc316e21de327ed02e67023",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
