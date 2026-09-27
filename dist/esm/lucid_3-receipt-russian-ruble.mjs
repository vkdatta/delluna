export const name="lucid_3-receipt-russian-ruble";
export const id="dl_b8d2f6ca10a74235b91a";
export const url=new URL("../icons/lucid_3-receipt-russian-ruble.svg?v=ed6ff2b9908dc06b357626b2b8cabdbc516d3980209c290f20a71966c071813f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
