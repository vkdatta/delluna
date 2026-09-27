export const name="key_off-fill";
export const id="dl_515c3e1df50da85d4e8b";
export const url=new URL("../icons/key_off-fill.svg?v=a809a6d9da8d885a391b9af9cbedef4ad4c50978ede877e65d06d6235a66a752",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
