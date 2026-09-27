export const name="lucid_3-receipt-russian-ruble";
export const id="dl_b8d2f6ca10a74235b91a";
export const url=new URL("../icons/lucid_3-receipt-russian-ruble.svg?v=fc70eb3cadf5bb115d26e6ea6d08cb8afd8e893b2ff60a2149033abce9a856b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
