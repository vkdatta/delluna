export const name="order_approve-fill";
export const id="dl_cb67cfd228496bb02733";
export const url=new URL("../icons/order_approve-fill.svg?v=1f6a6036a954726249ee7d3b8dd955487a5db8f538959f47d05a69e9fed4a6f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
