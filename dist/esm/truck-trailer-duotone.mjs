export const name="truck-trailer-duotone";
export const id="dl_7fa4d6d02b174111b9d1";
export const url=new URL("../icons/T/truck-trailer-duotone.svg?v=5c308e1563c49ac284612a8fd96e6567fa06f1bb439d117c00d82e2307b07288",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
