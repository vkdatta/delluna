export const name="network-slash-duotone";
export const id="dl_b19ac7fedfbc4163bc0d";
export const url=new URL("../icons/network-slash-duotone.svg?v=df2889bdca4bae400b3f548e039176d0c67ac87f1c3507f194915d02997dc9a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
