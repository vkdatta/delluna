export const name="bullet_chart-fill";
export const id="dl_95cbb2501cdcb82d41fe";
export const url=new URL("../icons/bullet_chart-fill.svg?v=925ce9505196a682c1a31cee148d8b56c2aeb587b6d9bfcee0632f0684bfbb21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
