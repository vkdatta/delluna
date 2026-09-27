export const name="csv-fill";
export const id="dl_1339f81233a9d4c80ba4";
export const url=new URL("../icons/csv-fill.svg?v=1d65369e48fe0221d07910659017ea83d3235a09074374ff769fb139995a52bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
