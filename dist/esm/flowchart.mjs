export const name="flowchart";
export const id="dl_aa7b7026f3530b11ef84";
export const url=new URL("../icons/flowchart.svg?v=38a451c41a3550fd4aa8f28ecdee8de1d95f0579a5ca5f34cdcc06a8d0b28283",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
