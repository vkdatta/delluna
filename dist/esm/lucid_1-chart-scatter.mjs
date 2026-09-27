export const name="lucid_1-chart-scatter";
export const id="dl_3940b44124d34ba4a0a9";
export const url=new URL("../icons/lucid_1-chart-scatter.svg?v=790c79d20d37d24aa65df4f5174b31d0ad070eceadbc4c5a748fcc71005c1e40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
