export const name="storefront-fill";
export const id="dl_6d047a12f6a346f78e3f";
export const url=new URL("../icons/S/storefront-fill.svg?v=c4f89c48138eb0e7269cd8286bb5774135cd5cfd6ea10c588c8c62591353dd83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
