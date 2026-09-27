export const name="cell_tower-fill";
export const id="dl_2d2505035b1a883a212f";
export const url=new URL("../icons/cell_tower-fill.svg?v=2d6ea48a260ea77634377b3c1caf92237906e47272119405c196eabf58c7e256",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
