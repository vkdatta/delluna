export const name="wifi-low-duotone";
export const id="dl_c3ee499435ad89aed017";
export const url=new URL("../icons/wifi-low-duotone.svg?v=9e1b4ebdb50815ed071c3d42e73ab33a02f6627d5e570b9782677fe6d07f3d8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
