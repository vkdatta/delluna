export const name="distance-fill";
export const id="dl_d1d94f9fc61e4e9d6630";
export const url=new URL("../icons/distance-fill.svg?v=8f1390ba174da6056f48d7527466518ec0c2cd5e6828ba52a270006412a645d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
