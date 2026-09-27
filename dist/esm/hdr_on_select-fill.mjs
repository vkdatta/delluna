export const name="hdr_on_select-fill";
export const id="dl_853cfb312f6f2b241a7c";
export const url=new URL("../icons/hdr_on_select-fill.svg?v=2f2bddc561ec1df6a7efd977ef34690ff76d6e0d7ca507dc35f07da671f6303e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
