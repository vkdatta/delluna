export const name="lucid_3-pickaxe";
export const id="dl_4c0066806a144c98be90";
export const url=new URL("../icons/lucid_3-pickaxe.svg?v=f84257ff5669425b0d35145172a5a0fc0ba891bb2669270d173b1413b5b844cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
