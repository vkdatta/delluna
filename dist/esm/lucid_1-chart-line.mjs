export const name="lucid_1-chart-line";
export const id="dl_1cf978d213d0438dae4a";
export const url=new URL("../icons/lucid_1-chart-line.svg?v=0c73599fa6d33b883d5f409392635fd03286baf00206010e9b8175ac0433f31f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
