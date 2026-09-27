export const name="monitor-arrow-up-fill";
export const id="dl_7ec92fec1dfa4a0a94fe";
export const url=new URL("../icons/monitor-arrow-up-fill.svg?v=fbaa1bdc1c9d2bb1ed5e3edcb2040ee28d720f2541195735c730bcfd2a58f5a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
