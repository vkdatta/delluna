export const name="monitor_weight-fill";
export const id="dl_f6dbe2730c89448a91bc";
export const url=new URL("../icons/monitor_weight-fill.svg?v=d06cc38114ab19f32d1cf65fb5f7a09f7b2b24fbc444128b1e9f0fe84a449bf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
