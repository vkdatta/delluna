export const name="draft_orders";
export const id="dl_a59648ab91b0e5f141d5";
export const url=new URL("../icons/draft_orders.svg?v=5fce561841d3d34968fb7dfb94a7ddea91249897c902f9bb5928d357c53c5e0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
