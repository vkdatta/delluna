export const name="hvac-fill";
export const id="dl_d0f7d7f33a5d465dae7b";
export const url=new URL("../icons/hvac-fill.svg?v=a5a4d22d827ec53234a15a19b46b7c095b33c10d47953dfdb5f921b7d6206d12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
