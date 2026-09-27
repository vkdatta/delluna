export const name="ring_volume-fill";
export const id="dl_840088b103b10d96ee73";
export const url=new URL("../icons/ring_volume-fill.svg?v=65873232291079e3f40cd49a139c0ce3a8ee4756a41bb461cbb4bd00014b0615",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
