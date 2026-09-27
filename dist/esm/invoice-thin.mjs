export const name="invoice-thin";
export const id="dl_d3ac2924817541e38f6e";
export const url=new URL("../icons/invoice-thin.svg?v=a409bb7321e5b1dba25cb311ff0219645658327eb308a261154dd76a7769d9d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
