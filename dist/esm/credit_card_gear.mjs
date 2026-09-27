export const name="credit_card_gear";
export const id="dl_3fc884d29a7f5409b997";
export const url=new URL("../icons/credit_card_gear.svg?v=459da2cc790d7afe363a1e3cb7c780c2bcd3dfb78f6c25593208c2250c2084b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
