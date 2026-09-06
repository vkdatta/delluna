export const name="bathtub-fill";
export const id="dl_e2b23199ccb045ff9fdd";
export const url=new URL("../icons/bathtub-fill.svg?v=b8c842db1c4bebb1517af5b2cc9d95d3dec43d8987d1871fc621b36079edc1e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
