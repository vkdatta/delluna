export const name="spinner-duotone";
export const id="dl_49f196d8169cf47cb29d";
export const url=new URL("../icons/spinner-duotone.svg?v=33191d87c3351827cfc48d3d2aaa740082c2139126e2d05b14f060a7b9616fd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
